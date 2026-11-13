import thumbGymkhanna from "./assets/images/thumb_gymkhanna_1794570628206.jpg";
import thumbPaperzero from "./assets/images/thumb_paperzero_1794570628141.jpg";
import thumbFinflow from "./assets/images/thumb_finflow_1794570628345.jpg";
import thumbNamma from "./assets/images/thumb_namma_kannada_1794570628924.jpg";
import thumbPartha from "./assets/images/thumb_partha_1794570630536.jpg";
import thumbPern from "./assets/images/thumb_pern_todo_1794570629183.jpg";

interface ProjectDetails {
  title: string;
  tech: string;
  description: string;
  highlights: string[];
  repoUrl: string;
  liveUrl?: string;
  thumb: string;
}

const PROJECTS: Record<string, ProjectDetails> = {
  gymkhanna: {
    title: "GymKhanna",
    tech: "HTML · CSS · Vanilla JS · Firebase · Gemini API · IndexedDB",
    description:
      "An installable fitness-tracking PWA combining workout logging, AI coaching, nutrition tracking, and analytics with a custom program builder, barcode food scanner, and cross-device Firebase sync.",
    highlights: [
      "Output: Live PWA deployed on Vercel with four working modules.",
      "Learned: Structuring a large framework-free app, offline storage via IndexedDB, and integrating Gemini AI into a real user flow.",
    ],
    repoUrl: "https://github.com/Rajendra-Madival/GYM_KHANNA",
    liveUrl: "https://gym-khanna.vercel.app",
    thumb: thumbGymkhanna,
  },
  paperzero: {
    title: "PaperZero",
    tech: "Python · Flask · SQLAlchemy · Flask-Login · Hack Fusion",
    description:
      "A paper-reduction college ERP built with a four-member team during Hack Fusion at KLS VDIT, offering role-based interfaces for students, teachers, and management.",
    highlights: [
      "Output: Working multi-role web platform with document approval workflows and real-time analytics delivered within the hackathon window.",
      "Learned: Modular Flask Blueprint backend architecture, role-based access control, and team collaboration under deadline.",
    ],
    repoUrl: "https://github.com/Rajendra-Madival/PaperZero",
    thumb: thumbPaperzero,
  },
  finflow: {
    title: "FINFLOW",
    tech: "Python · Streamlit · Pytesseract (OCR) · Pandas · PyMuPDF · Wave Hackathon",
    description:
      "An automated GST sales and purchase register built with a four-member team at Wave Hackathon. Scans invoices with OCR, validates GSTINs & tax charges, and generates GSTR-1, GSTR-3B, and GSTR-2A reports.",
    highlights: [
      "Output: Working dashboard with live registers, net tax payable, and auto-generated GST reports.",
      "Learned: Translating real GST compliance rules into code and building an end-to-end OCR-to-report pipeline.",
    ],
    repoUrl: "https://github.com/Rajendra-Madival/FINFLOW-FINAL",
    thumb: thumbFinflow,
  },
  namma: {
    title: "Namma Kannada",
    tech: "JavaScript · Web App · Vercel",
    description:
      "An interactive Kannada language web application deployed on Vercel designed to help learners explore Kannada script, vocabulary, and everyday phrases.",
    highlights: [
      "Deployed live on Vercel with clean interactive typography and responsive layout.",
      "Built with JavaScript and modern web standards for mobile and desktop learners.",
    ],
    repoUrl: "https://github.com/Rajendra-Madival/Namma-Kannada",
    liveUrl: "https://namma-kannada-three.vercel.app",
    thumb: thumbNamma,
  },
  partha: {
    title: "Partha",
    tech: "Web Platform · Student Alumni Network",
    description:
      "A student-focused alumni platform for experience-based discovery, mentorship connections, and career opportunities.",
    highlights: [
      "Designed around connecting students directly with alumni mentors by shared domain and experience.",
      "Structured discovery and mentorship pathways for campus career preparation.",
    ],
    repoUrl: "https://github.com/Rajendra-Madival/Partha",
    thumb: thumbPartha,
  },
  pern: {
    title: "Todo using PERN",
    tech: "PostgreSQL · Express · React · Node.js",
    description:
      "A full-stack Todo application built with the PERN stack featuring persistent PostgreSQL storage, Express REST endpoints, and full CRUD task workflows.",
    highlights: [
      "Implements RESTful create, read, update, and delete endpoints backed by PostgreSQL.",
      "Connects a React front-end directly to a Node.js + Express backend.",
    ],
    repoUrl: "https://github.com/Rajendra-Madival/Todo-using-PERN",
    thumb: thumbPern,
  },
};

/* Typing Animation for Hero Tagline */
const typedTaglineEl = document.querySelector<HTMLElement>("#typedTagline");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const TAGLINE_PHRASES = [
  "CSE Student | Web Developer | Problem Solver",
  "CSE Student at KLS VDIT",
  "Full-Stack Web Developer",
  "Problem Solver & Hackathon Builder",
];

if (typedTaglineEl && !prefersReducedMotion.matches) {
  let phraseIdx = 0;
  let charIdx = TAGLINE_PHRASES[0].length;
  let isDeleting = true;

  const stepTyping = (): void => {
    const current = TAGLINE_PHRASES[phraseIdx];
    if (isDeleting) {
      charIdx = Math.max(0, charIdx - 1);
      typedTaglineEl.textContent = current.slice(0, charIdx);
      if (charIdx === 0) {
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % TAGLINE_PHRASES.length;
        window.setTimeout(stepTyping, 320);
        return;
      }
      window.setTimeout(stepTyping, 28);
    } else {
      charIdx = Math.min(current.length, charIdx + 1);
      typedTaglineEl.textContent = current.slice(0, charIdx);
      if (charIdx === current.length) {
        isDeleting = true;
        window.setTimeout(stepTyping, 2100);
        return;
      }
      window.setTimeout(stepTyping, 52);
    }
  };

  window.setTimeout(stepTyping, 2000);
}

/* Theme Toggle */
const themeButton = document.querySelector<HTMLButtonElement>("#theme");
const rootEl = document.documentElement;

const applyTheme = (isDark: boolean): void => {
  rootEl.classList.toggle("dark", isDark);
  if (themeButton) {
    themeButton.textContent = isDark ? "☀️" : "🌙";
    themeButton.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  }
};

try {
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme === "dark") {
    applyTheme(true);
  }
} catch {
  // Ignore storage restrictions
}

themeButton?.addEventListener("click", () => {
  const nextDark = !rootEl.classList.contains("dark");
  applyTheme(nextDark);
  try {
    localStorage.setItem("portfolio-theme", nextDark ? "dark" : "light");
  } catch {
    // Ignore storage restrictions
  }
});

/* Mobile Navigation Drawer */
const menuToggle = document.querySelector<HTMLButtonElement>("#menuToggle");
const mobileNav = document.querySelector<HTMLElement>("#mobileNav");

const closeMobileNav = (): void => {
  if (!mobileNav || !menuToggle) return;
  mobileNav.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
};

menuToggle?.addEventListener("click", () => {
  if (!mobileNav) return;
  const isOpen = !mobileNav.hidden;
  mobileNav.hidden = isOpen;
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMobileNav);
});

/* Interactive 3D Flip GitFut Card */
const gitfutCard = document.querySelector<HTMLElement>("#gitfutCard");
const gitfutExtLink = gitfutCard?.querySelector<HTMLAnchorElement>(".gitfut-ext-link") ?? null;
const gitfutFlipBackBtn = gitfutCard?.querySelector<HTMLButtonElement>(".gitfut-flip-back-btn") ?? null;

const toggleCardFlip = (): void => {
  if (!gitfutCard) return;
  const isFlipped = gitfutCard.classList.toggle("is-flipped");
  gitfutCard.setAttribute("aria-pressed", String(isFlipped));
  gitfutCard.style.transform = "";
};

gitfutExtLink?.addEventListener("click", (event) => {
  event.stopPropagation();
});

gitfutFlipBackBtn?.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleCardFlip();
});

gitfutCard?.addEventListener("click", () => {
  toggleCardFlip();
});

gitfutCard?.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    if (document.activeElement === gitfutExtLink) return;
    event.preventDefault();
    toggleCardFlip();
  }
});

gitfutCard?.addEventListener("pointermove", (event) => {
  if (!gitfutCard || prefersReducedMotion.matches || gitfutCard.classList.contains("is-flipped")) {
    return;
  }
  const rect = gitfutCard.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  const rotateY = (x * 10).toFixed(2);
  const rotateX = (-y * 8).toFixed(2);
  gitfutCard.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

gitfutCard?.addEventListener("pointerleave", () => {
  if (!gitfutCard) return;
  gitfutCard.style.transform = "";
});

/* Copy Email Buttons */
const primaryEmail = document.querySelector<HTMLElement>(".email");
const copyButtons = document.querySelectorAll<HTMLButtonElement>(".copyEmail");

copyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const emailText = primaryEmail?.innerText.trim() || "rajendramadival7@gmail.com";
    navigator.clipboard?.writeText(emailText).catch(() => {});
    button.innerText = "Copied!";
    window.setTimeout(() => {
      button.innerText = "Copy";
    }, 2000);
  });
});

/* Project Category Filter */
const filterButtons = document.querySelectorAll<HTMLButtonElement>(".project-filters .filter-btn");
const projectCards = document.querySelectorAll<HTMLElement>("#projectGrid .proj");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selected = btn.dataset.filter ?? "all";
    filterButtons.forEach((other) => {
      const active = other === btn;
      other.classList.toggle("is-active", active);
      other.setAttribute("aria-selected", String(active));
    });

    projectCards.forEach((card) => {
      const category = card.dataset.category ?? "";
      const visible = selected === "all" || category === selected;
      card.hidden = !visible;
    });
  });
});

/* Project Detail Modal */
const projectModal = document.querySelector<HTMLElement>("#projectModal");
const modalTitle = document.querySelector<HTMLElement>("#modalTitle");
const modalThumb = document.querySelector<HTMLImageElement>("#modalThumb");
const modalTech = document.querySelector<HTMLElement>("#modalTech");
const modalDesc = document.querySelector<HTMLElement>("#modalDesc");
const modalHighlights = document.querySelector<HTMLElement>("#modalHighlights");
const modalRepoLink = document.querySelector<HTMLAnchorElement>("#modalRepoLink");
const modalLiveLink = document.querySelector<HTMLAnchorElement>("#modalLiveLink");
const closeProjectModalBtn = document.querySelector<HTMLButtonElement>("#closeProjectModal");
const closeProjectSecondaryBtn = document.querySelector<HTMLButtonElement>("#modalCloseSecondary");

const closeProjectModal = (): void => {
  if (projectModal) projectModal.hidden = true;
};

document.querySelectorAll<HTMLButtonElement>(".proj-link-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.project ?? "";
    const project = PROJECTS[key];
    if (!project || !projectModal) return;

    if (modalTitle) modalTitle.textContent = project.title;
    if (modalThumb) {
      modalThumb.src = project.thumb;
      modalThumb.alt = `${project.title} preview`;
      modalThumb.hidden = false;
    }
    if (modalTech) modalTech.textContent = project.tech;
    if (modalDesc) modalDesc.textContent = project.description;
    if (modalRepoLink) modalRepoLink.href = project.repoUrl;
    if (modalLiveLink) {
      if (project.liveUrl) {
        modalLiveLink.href = project.liveUrl;
        modalLiveLink.hidden = false;
      } else {
        modalLiveLink.hidden = true;
      }
    }
    if (modalHighlights) {
      modalHighlights.replaceChildren(
        ...project.highlights.map((item) => {
          const li = document.createElement("li");
          li.textContent = item;
          return li;
        }),
      );
    }

    projectModal.hidden = false;
    closeProjectModalBtn?.focus();
  });
});

closeProjectModalBtn?.addEventListener("click", closeProjectModal);
closeProjectSecondaryBtn?.addEventListener("click", closeProjectModal);
projectModal?.addEventListener("click", (event) => {
  if (event.target === projectModal) closeProjectModal();
});

/* Resume Modal with PDF + Structured Tabs */
const resumeModal = document.querySelector<HTMLElement>("#resumeModal");
const openResumeBtn = document.querySelector<HTMLButtonElement>("#openResumeBtn");
const closeResumeModalBtn = document.querySelector<HTMLButtonElement>("#closeResumeModal");
const closeResumeSecondaryBtn = document.querySelector<HTMLButtonElement>("#closeResumeSecondary");
const resumeTabPdf = document.querySelector<HTMLButtonElement>("#resumeTabPdf");
const resumeTabSummary = document.querySelector<HTMLButtonElement>("#resumeTabSummary");
const resumePdfPane = document.querySelector<HTMLElement>("#resumePdfPane");
const resumeSummaryPane = document.querySelector<HTMLElement>("#resumeSummaryPane");

const setResumeTab = (mode: "pdf" | "summary"): void => {
  const showPdf = mode === "pdf";
  if (resumePdfPane) resumePdfPane.hidden = !showPdf;
  if (resumeSummaryPane) resumeSummaryPane.hidden = showPdf;
  resumeTabPdf?.classList.toggle("is-active", showPdf);
  resumeTabPdf?.setAttribute("aria-selected", String(showPdf));
  resumeTabSummary?.classList.toggle("is-active", !showPdf);
  resumeTabSummary?.setAttribute("aria-selected", String(!showPdf));
};

resumeTabPdf?.addEventListener("click", () => setResumeTab("pdf"));
resumeTabSummary?.addEventListener("click", () => setResumeTab("summary"));

const closeResumeModal = (): void => {
  if (resumeModal) resumeModal.hidden = true;
};

openResumeBtn?.addEventListener("click", () => {
  if (!resumeModal) return;
  resumeModal.hidden = false;
  closeResumeModalBtn?.focus();
});

closeResumeModalBtn?.addEventListener("click", closeResumeModal);
closeResumeSecondaryBtn?.addEventListener("click", closeResumeModal);
resumeModal?.addEventListener("click", (event) => {
  if (event.target === resumeModal) closeResumeModal();
});

/* Escape closes active overlays */
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMobileNav();
    closeProjectModal();
    closeResumeModal();
  }
});

/* Working Contact Form backed by POST /api/contact */
const contactForm = document.querySelector<HTMLFormElement>("#contactForm");
const nameInput = document.querySelector<HTMLInputElement>("#namem");
const emailInput = document.querySelector<HTMLInputElement>("#mail");
const subjectInput = document.querySelector<HTMLInputElement>("#subject");
const messageInput = document.querySelector<HTMLTextAreaElement>("#message");
const submitButton = document.querySelector<HTMLButtonElement>("#submit");
const formStatus = document.querySelector<HTMLElement>("#formStatus");

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!formStatus || !submitButton) return;

  const name = nameInput?.value.trim() ?? "";
  const email = emailInput?.value.trim() ?? "";
  const subject = subjectInput?.value.trim() ?? "";
  const message = messageInput?.value.trim() ?? "";

  if (!name || !email || !subject || !message) {
    formStatus.textContent = "Please fill in all fields before sending.";
    formStatus.classList.add("is-error");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    formStatus.textContent = "Please enter a valid email address.";
    formStatus.classList.add("is-error");
    emailInput?.focus();
    return;
  }

  submitButton.disabled = true;
  const originalLabel = submitButton.textContent ?? "Send Message";
  submitButton.textContent = "Sending...";
  formStatus.classList.remove("is-error");
  formStatus.textContent = "";

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, subject, message }),
    });
    const payload = await response.json();

    if (!response.ok || !payload.ok) {
      throw new Error(payload.error || "Unable to send message right now.");
    }

    formStatus.textContent = payload.message || `Thanks ${name}! Your message has been received.`;
    contactForm.reset();
  } catch (err) {
    formStatus.classList.add("is-error");
    formStatus.textContent = err instanceof Error ? err.message : "Something went wrong. Please try again.";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalLabel;
  }
});

/* Back to Top */
const backToTopButton = document.querySelector<HTMLButtonElement>("#backToTop");

backToTopButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion.matches ? "auto" : "smooth" });
});
