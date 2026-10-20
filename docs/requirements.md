# Portfolio Redesign Requirements

## 1. Project Overview

**Project:** Personal Portfolio Redesign  
**Owner:** Rajendra Madival  
**Education:** BE Computer Science Engineering, KLS VDIT, Haliyal  
**Expected Graduation:** 2028  
**Current Focus:** Frontend development, full-stack engineering, DSA, and software development internships.

### Primary Goal

Build a distinctive, responsive portfolio that demonstrates my ability to build practical web applications, understand engineering fundamentals, and turn real problems into working software.

Within 10 seconds, a recruiter should understand:
- Who I am and what I am learning.
- What I have built and the problems my projects solve.
- Which technical skills I can demonstrate.
- How to explore my work, view my GitHub, access my resume, and contact me.

### Core Positioning

I am a CSE student developing into a full-stack software engineer. I enjoy building useful applications, learning how systems work, and improving my ability to make sound technical decisions.

The portfolio must demonstrate evidence of my work rather than rely on claims such as "passionate developer" or "future engineer."

## 2. Target Audience

### Primary Audience
- Software engineering internship recruiters.
- Frontend and full-stack engineering managers.
- Software engineers reviewing candidates' projects.
- Hackathon teammates and potential collaborators.

### What They Should Discover
1. My strongest projects and their practical purpose.
2. My actual contribution to each project.
3. The technologies used and the engineering decisions behind them.
4. My GitHub repositories and live deployments.
5. My educational background and current learning direction.
6. A straightforward way to contact me.

## 3. Personal Brand and Design Direction

### Creative Concept: The Illustrated Builder

Create a calm, imaginative visual world that feels personal, crafted, and memorable while maintaining the credibility of a software engineering portfolio.

The design should communicate curiosity, practical building, and an evolving engineering journey.

### Visual Principles
- Illustrated and hand-drawn artwork rather than generic pixel-art assets.
- Editorial layouts with asymmetry and generous whitespace.
- A clear visual hierarchy and concise copy.
- Warm, earthy colors and restrained decorative elements.
- Subtle motion that supports the experience rather than distracting from content.
- A consistent visual language across every section.
- Mobile-first responsiveness and accessible contrast.

### Color Palette

| Purpose | Color | Hex |
|---|---|---|
| Primary background | Warm paper | `#F4F0E6` |
| Secondary accent | Muted sage | `#78866B` |
| Primary text / dark surfaces | Deep forest | `#28382F` |
| Highlight | Terracotta | `#BC795F` |
| Secondary surfaces | Sand | `#D8CBAF` |

Use the palette consistently. Avoid excessive gradients, neon colors, and unnecessary glassmorphism.

### Typography
- A distinctive serif typeface for major headings.
- A clean, highly readable sans-serif for body text and interface elements.
- Comfortable line lengths and clear differences between heading, body, and metadata sizes.

### Inspiration
Use the following as sources of design principles, not as templates to copy:
- `https://mijobello.com/` — distinctive personal visual identity.
- Genshin Impact — atmosphere, environmental storytelling, and a coherent world.
- Marvel — recognizable identity and communicating a story through characters.
- Illustrated editorial design — visual personality with strong content hierarchy.

## 4. Information Architecture

The website should have a clear, focused structure.

### 4.1 Home / Hero
- My name and a concise introduction.
- A clear description of the kind of software I build.
- An illustrated portrait or character.
- Primary action: explore my projects.
- Secondary actions: view resume and contact me.
- Links to GitHub and LinkedIn.

The first screen should feel distinctive without overwhelming visitors with too much information.

### 4.2 Selected Work
Place this immediately after the hero.

Show a small number of meaningful projects instead of an unfiltered list of everything I have built.

Each project should communicate:
- Project name and purpose.
- The real problem it addresses.
- My role and contribution.
- Technology stack.
- Important engineering decisions or challenges.
- Live demo and source code, when available.

### 4.3 Skills and Engineering Approach
Organize skills by practical use rather than displaying an enormous wall of logos.

**Current foundations**
- HTML, CSS, and JavaScript.
- React.
- C++ fundamentals and problem-solving.
- Git and GitHub.

**Developing skills**
- Redux and application state management.
- Backend development with Node.js and Express.
- PostgreSQL and database fundamentals.
- API design and full-stack application architecture.
- Data structures and algorithms.

Only present skills as proficient when I can explain and demonstrate them. Distinguish current foundations from technologies I am actively learning.

### 4.4 About and Education
- BE Computer Science Engineering at KLS VDIT, Haliyal.
- Expected graduation in 2028.
- My journey from frontend projects toward full-stack engineering.
- My interest in solving practical problems through software.
- My approach to learning, debugging, and understanding technical decisions.

Keep this section personal and concise. Avoid generic motivational statements.

### 4.5 Contact
- Professional email.
- LinkedIn.
- GitHub.
- A clear invitation for internship opportunities and collaboration.

Make every contact link functional and easy to find.

### 4.6 Resume
Provide a visible resume link or button. The resume should be accessible without requiring recruiters to search through the website.

## 5. Projects to Showcase

### 5.1 Gymkhana — Primary Project
**Role:** Practical application builder.

A deployed web application developed around needs I identified while working at a gym.

This project should demonstrate:
- Identifying a real user problem.
- Translating requirements into useful features.
- Building and deploying a working application.
- Iterating based on practical needs.
- Understanding the code and being able to explain the implementation.

**Live application:** `https://gym-khanna.vercel.app/`

The redesign of my portfolio should present this project prominently. Before publishing detailed technical claims, verify the actual implementation and distinguish my own work from AI-assisted work.

### 5.2 Personal Portfolio
**Role:** Frontend developer.

My existing portfolio is a starting point for this redesign. The new version should demonstrate improved visual design, responsive implementation, component structure, accessibility, and maintainability.

**Current live website:** `https://rajendra-madival.vercel.app/`

### 5.3 Additional Projects
Review and select projects such as:
- Amazon UI clone.
- Currency Converter.
- Rock Paper Scissors.
- Calculator.
- Other projects that demonstrate meaningful technical learning.

Do not give every project equal prominence. Select projects based on implementation quality, usefulness, originality, and what I can confidently explain.

## 6. Technical Direction

### Planned Stack
- **Library:** React.
- **Build tool:** Vite.
- **Styling:** Tailwind CSS.
- **Version control:** Git and GitHub.
- **Deployment:** Vercel, after review and testing.

Confirm the existing repository structure and dependencies before installing packages or modifying files.

### Code Quality
- Build reusable React components where they improve clarity.
- Keep components focused on understandable responsibilities.
- Use meaningful names for variables, functions, components, and files.
- Avoid unnecessary dependencies and overengineering.
- Keep responsive styles consistent.
- Use semantic HTML and accessible interactive elements.
- Handle loading, empty, and error states wherever relevant.
- Keep secrets and private credentials out of the repository.
- Document setup and development commands in the README.

## 7. Learning and Implementation Rules

This project is also a learning exercise. The objective is not merely to produce a visually impressive result.

- Understand the purpose of every important component and dependency.
- Explain unfamiliar concepts before relying on them.
- Prefer small, verifiable implementation steps.
- Attempt the solution myself before receiving complete code when appropriate.
- Use hints, debugging questions, and code review to build independence.
- Test edge cases rather than assuming the happy path is sufficient.
- Use AI as a mentor and reviewer, not as a substitute for understanding.
- Do not claim I independently implemented code that I cannot explain.

## 8. Git and Repository Safety

The existing portfolio must remain recoverable throughout the redesign.

- Existing repository: `https://github.com/Rajendra7250/Portfolio.git`
- Working directory: `E:\Portfolio\Portfolio`
- Existing production branch: `main`
- Redesign branch: `redesign/react-portfolio`

Rules:
1. Perform redesign work on `redesign/react-portfolio`.
2. Do not overwrite or delete the original HTML/CSS implementation without a deliberate, reviewed decision.
3. Inspect `git status` before staging or committing changes.
4. Stage specific files where practical instead of blindly staging everything.
5. Review diffs before committing.
6. Use clear, meaningful commit messages.
7. Keep the remote repository synchronized carefully.
8. Do not merge into `main` or deploy the redesign until it has been reviewed and tested.

## 9. Responsive Design and Accessibility

The portfolio must work across:
- Mobile phones.
- Tablets.
- Laptop screens.
- Large desktop displays.

Verify:
- No horizontal overflow.
- Navigation works at every viewport size.
- Text remains readable.
- Project cards resize appropriately.
- Illustrations scale without obscuring content.
- Interactive elements have visible focus states.
- Links and buttons have clear labels.
- Color contrast is sufficient.
- Motion is restrained and respects reduced-motion preferences.

## 10. Performance and Reliability

- Avoid unnecessarily large image assets.
- Optimize illustrations and other media.
- Minimize layout shifts.
- Avoid unnecessary animations and expensive rendering.
- Test navigation, external links, and interactive features.
- Check browser console errors.
- Verify the production build before deployment.

## 11. Definition of Done

The redesign is complete when:

- [ ] The design consistently follows the illustrated visual direction.
- [ ] The hero explains my identity and value clearly.
- [ ] Selected projects appear immediately after the hero.
- [ ] Every project has accurate descriptions and working links.
- [ ] Skills reflect what I can actually demonstrate.
- [ ] About, education, resume, and contact information are accurate.
- [ ] The website works on mobile, tablet, and desktop.
- [ ] Accessibility and basic performance checks are complete.
- [ ] The code is understandable and maintainable.
- [ ] The Git history preserves the original implementation.
- [ ] The production build passes.
- [ ] The final version has been reviewed before deployment.

## 12. Guiding Principle

**Build a portfolio that proves I can turn ideas into working software—and explain how I did it.**

Visual design earns attention. Real projects establish credibility. Clear engineering explanations build trust.