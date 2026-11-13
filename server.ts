import express from "express";
import type { Request, Response } from "express";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = Number(process.env.PORT) || 3000;
const IS_PRODUCTION = process.env.NODE_ENV === "production";
const DATA_FILE = path.join(__dirname, "data", "contact-submissions.json");

const submissions: ContactSubmission[] = [];

async function persistSubmission(entry: ContactSubmission): Promise<void> {
  submissions.push(entry);
  try {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    let existing: ContactSubmission[] = [];
    try {
      const raw = await fs.readFile(DATA_FILE, "utf-8");
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        existing = parsed;
      }
    } catch {
      existing = [];
    }
    existing.push(entry);
    await fs.writeFile(DATA_FILE, JSON.stringify(existing, null, 2), "utf-8");
  } catch {
    // Ephemeral / read-only container fallback keeps entry in memory
  }
}

async function createApp() {
  const app = express();
  app.use(express.json({ limit: "64kb" }));

  app.get("/api/health", (_req: Request, res: Response) => {
    res.json({ ok: true });
  });

  app.post("/api/contact", async (req: Request, res: Response) => {
    const body = req.body ?? {};
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const subject = typeof body.subject === "string" ? body.subject.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !subject || !message) {
      res.status(400).json({ ok: false, error: "All fields are required." });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      res.status(400).json({ ok: false, error: "Please provide a valid email address." });
      return;
    }

    if (name.length > 120 || subject.length > 200 || message.length > 4000) {
      res.status(400).json({ ok: false, error: "Input exceeds maximum allowed length." });
      return;
    }

    const entry: ContactSubmission = {
      id: crypto.randomUUID().slice(0, 8),
      name,
      email,
      subject,
      message,
      submittedAt: new Date().toISOString(),
    };

    await persistSubmission(entry);

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry),
      }).catch(() => {});
    }

    let delivered = false;
    let needsActivation = false;
    try {
      const origin = typeof req.headers.origin === "string"
        ? req.headers.origin
        : `https://${req.headers.host || "localhost"}`;
      const fsRes = await fetch("https://formsubmit.co/ajax/rajendramadival7@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: origin,
          Referer: origin,
        },
        body: JSON.stringify({
          name,
          email,
          _subject: `[Portfolio] ${subject}`,
          message,
          _replyto: email,
          _template: "table",
        }),
      });
      const fsJson = (await fsRes.json().catch(() => null)) as { success?: string | boolean; message?: string } | null;
      if (fsRes.ok && (fsJson?.success === true || fsJson?.success === "true")) {
        delivered = true;
      } else if (typeof fsJson?.message === "string" && fsJson.message.toLowerCase().includes("activat")) {
        needsActivation = true;
      }
    } catch {
      // Network error forwarding to FormSubmit; local submission is still persisted
    }

    const responseMessage = delivered
      ? `Message sent successfully! Thanks ${name} (Ref #${entry.id}).`
      : needsActivation
        ? `Message saved (Ref #${entry.id}). One-time setup: check rajendramadival7@gmail.com and click "Activate Form" from FormSubmit to receive future emails.`
        : `Thanks ${name}! Your message has been recorded (Ref #${entry.id}).`;

    res.status(201).json({
      ok: true,
      id: entry.id,
      submittedAt: entry.submittedAt,
      delivered,
      needsActivation,
      message: responseMessage,
    });
  });

  if (!IS_PRODUCTION) {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.join(__dirname, "dist");
    app.use(express.static(distDir));
    app.get("/{*splat}", (_req: Request, res: Response) => {
      res.sendFile(path.join(distDir, "index.html"));
    });
  }

  return app;
}

createApp()
  .then((app) => {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Portfolio server running at http://0.0.0.0:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
  });
