import HelixRibbonHero, { type HelixProject } from "@/components/ui/helix-ribbon-hero";
import thumbGymkhanna from "@/assets/images/thumb_gymkhanna_1794570628206.jpg";
import thumbPaperzero from "@/assets/images/thumb_paperzero_1794570628141.jpg";
import thumbFinflow from "@/assets/images/thumb_finflow_1794570628345.jpg";
import thumbNamma from "@/assets/images/thumb_namma_kannada_1794570628924.jpg";
import thumbPartha from "@/assets/images/thumb_partha_1794570630536.jpg";
import thumbPern from "@/assets/images/thumb_pern_todo_1794570629183.jpg";

const HELIX_PROJECTS: HelixProject[] = [
  { src: thumbGymkhanna, title: "GymKhanna" },
  { src: thumbPaperzero, title: "PaperZero" },
  { src: thumbFinflow, title: "FINFLOW" },
  { src: thumbNamma, title: "Namma Kannada" },
  { src: thumbPartha, title: "Partha" },
  { src: thumbPern, title: "Todo PERN" },
  { src: thumbGymkhanna, title: "AI Coach PWA" },
  { src: thumbPaperzero, title: "College ERP" },
  { src: thumbFinflow, title: "GST OCR" },
  { src: thumbNamma, title: "Kannada Web" },
  { src: thumbPartha, title: "Alumni Network" },
  { src: thumbPern, title: "Full-Stack CRUD" },
];

export function IntroRibbon() {
  return (
    <HelixRibbonHero
      screens={3}
      greeting="Hey, I'm"
      name="Rajendra"
      portrait="/assets/aistudio/IMG20261118130028_c2f2a0b1.jpg"
      portraitAlt="Portrait of Rajendra Maruti Madival"
      projects={HELIX_PROJECTS}
      brand="Rajendra"
      links={[
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ]}
      cta={{ label: "Get in touch", href: "#contact" }}
      count="( 6 projects )"
      bio="Rajendra Madival is a CSE student and web developer building responsive web applications, AI tools, and hackathon products."
      scrollHint="Scroll down"
      autoPlay={false}
    />
  );
}
