# Tactical Core

you want a modern, high-end interactive feel (like top-tier developer/cybersecurity portfolios), build with:

Framework: React / Next.js or Astro

Styling: Tailwind CSS (Dark theme with neon accents like green #00FF66, cyan #00E5FF, or red/purple for offensive/defensive themes)

Animations:

Framer Motion (for smooth scroll reveals, hero entrance effects, interactive hover states)

Three.js / React Three Fiber (for interactive 3D background elements, glowing nodes, or matrix/grid backgrounds)

Typed.js or Typewriter Effects (for hacker/terminal typing effects in the hero section)

🛠️ Ready-Made Modern Animated Portfolio Templates

Here are top open-source template repos with rich animations and interactive UI that you can clone, customize, and deploy to Netlify or Vercel:

1. Next.js + Framer Motion (Modern Cyber Aesthetic)

Template Inspiration: Aceternity UI / Shadcn UI modern dark portfolios.

Key Features: Glowing cards, spotlight mouse hover effects, text generate animations, background matrix/grid canvas.

Components to check out:

Aceternity UI Components (Free animated Next.js components like Hero Highlight, Background Beams, Card Hover Effects).

2. 3D Interactive Node/Network Canvas (Three.js)

Features: Animated constellation/node network background (perfect for cybersecurity / network visualization).

Animations: Interactive cursor movement, smooth section transitions, floating 3D tech icons.

3. Terminal / Shell Portfolio (Cybersecurity Vibe)

If you want something deeply rooted in cybersecurity:

Interactive Command Line: Users can type commands like cat projects.txt, help, certs, or click animated buttons if they prefer a standard UI.

Popular Repo: Search GitHub for React Terminal Portfolio or Interactive CLI Portfolio.

Key Animation & Feature Enhancements for Your Site
[Hero Section] └── Dynamic Typing Effect ("Ethical Hacker | AppSec | SOC Analyst") └── Interactive Particle / Cyber Grid Background └── Smooth Scroll Down Indicator [Live Terminal / Quick Bio] └── Interactive command-line widget where recruiters can type 'help' 
[Projects / Write-ups Grid] └── Framer Motion 3D Tilt Cards on mouse hover └── Filter by Category (Red Team, Blue Team, DevSecOps) └── Modal popups with glowing border effects for detailed write-ups 
[Skills & Tooling Matrix] └── Animated Progress/Skill Radar or Floating Tech Badges └── Glow effects on active tools (Burp Suite, Wireshark, Splunk, Python)
 [Certifications Carousel] └── Interactive 3D flip cards displaying verified badge details [Contact Form] └── Cyberpunk-style glowing inputs with animated submission success states

Build a high-end, responsive Cybersecurity Portfolio web application adhering strictly to the "Interactive Warriors Cyber-Tactical System" design system specification provided below.

==================================================
1. DESIGN SYSTEM SPECIFICATIONS (STRICT COMPLIANCE)
==================================================

COLORS & PALETTE:
- Background (Black): #050505 (True Dark foundation)
- Panel / Dark: #0a0a0a
- Card Background (Charcoal): #121212
- Muted / Gray: #1f1f1f
- Primary Accent / Action Color (Cyber Red): #DC2626
- Red Glow: rgba(220, 38, 38, 0.5)
- Text Primary: #e5e5e5
- Border Standard: rgba(255, 255, 255, 0.1)
- Border Subdued: rgba(255, 255, 255, 0.05)

TYPOGRAPHY & FONTS:
- Import Google Fonts: 'Orbitron' and 'Rajdhani'
- Primary Display & Headings: Font 'Orbitron', uppercase, tight tracking (-0.05em to 0.1em). Weight: 700 to 900.
- Body Text: Font 'Rajdhani', 18px, weight 400.
- UI Labels & Buttons: Font 'Orbitron', weight 600, 12px, tracking 0.2em uppercase.
- Monospace Data / Logs: Font 'monospace', 10px.

SHAPES, EDGES & CLIP-PATHS (NO ROUNDED CORNERS):
- Do NOT use standard rounded corners (borderRadius: 0px everywhere except avatars).
- Skew Angle: Use transform skewX(-12deg) or skew(-12deg) for primary buttons and tactical elements.
- Protocol Cards Clip-Path: polygon(0% 0%, 100% 0%, 100% 85%, 95% 100%, 0% 100%)
- Buttons & Cards must have angled/cut corners using CSS clip-paths.

BACKGROUND & HUD LAYERS:
- Background: 40px tactical grid pattern overlay over #050505 background.
- Background HUD Elements: Absolute-positioned HUD spinners, crosshairs, and low-opacity (10%-30%) scanning grids.
- Continuous Scanning Motion: Animated horizontal red laser line cycling down containers (`scan 3s linear infinite`).

Z-INDEX ARCHITECTURE:
- Nav (50), Overlays (40), Content (20), HUD/Grids (10), Background (0).

==================================================
2. PAGE LAYOUT & STRUCTURE
==================================================

1. STICKY NAVIGATION BAR (z-50):
   - Background: rgba(5, 5, 5, 0.8) with backdrop-blur(12px) and bottom border: 1px solid rgba(255, 255, 255, 0.1).
   - Brand Logo: "<WARRIOR.SEC />" in red/white uppercase Orbitron font.
   - Links: [SYSTEMS], [PROTOCOLS], [ARCHIVE], [CREDENTIALS], [TERMINAL].
   - CTA: Skewed (-12deg) button "DEPLOY RESUME" with Cyber Red glow shadow `0 0 20px rgba(220, 38, 38, 0.6)`.

2. HERO SECTION (TACTICAL OVERWATCH):
   - Large stroke/outline background text using -webkit-text-stroke: 1px rgba(255,255,255,0.05) reading "TACTICAL OPERATIONS".
   - Main Header: Bold uppercase Orbitron title with red glowing text shadow.
   - Subtitle: Rajdhani condensed text summarizing capabilities (Penetration Testing, Threat Intelligence, DevSecOps).
   - Interactive Status Indicator: Spinning dashed HUD circle with "SYSTEM ACTIVE" pulsing red indicator.
   - Action Buttons: 
     * Primary: Solid Cyber Red #DC2626, skewed -12deg, red glow shadow.
     * Secondary: Skewed -12deg border-only button.

3. INTERACTIVE CYBER COMMAND TERMINAL:
   - Charcoal #121212 container with low-opacity scanline animation.
   - Interactive prompt (`operator@warrior-node:~$`).
   - Quick command buttons ('help', 'stats', 'whoami', 'clear') that output tactical logs in monospace green/red text.

4. PROTOCOL CARDS (PROJECTS & CASE STUDIES):
   - Utilizes the card clip-path polygon: polygon(0% 0%, 100% 0%, 100% 85%, 95% 100%, 0% 100%).
   - Cards display numeric index in top-right corner ("SYS_01", "SYS_02") in 10px red mono font.
   - Interactive Filters: [ALL], [OFFENSIVE], [DEFENSIVE], [AUTOMATION].
   - On hover: Border turns Cyber Red #DC2626 with intense red ambient glow (`0 0 20px rgba(220, 38, 38, 0.5)`).
   - Includes modal popups detailing: Scope, Threat Vector, Mitigation, and Architecture.

5. PROJECT ARCHIVE LIST (TACTICAL HOVER):
   - Vertical list view of operations with left-border highlighting on hover.
   - Interactive preview panel revealing target details upon hover.

6. HARDENED SKILLS & TOOLING MATRIX:
   - Categorized grids (Red Team, Blue Team, DevSecOps, Scripting).
   - Minimal Lucide icons with thin strokes.
   - Skewed badge chips for tools like Burp Suite, Wireshark, Splunk, Python, Nmap, Docker.

7. CREDENTIALS & CERTIFICATIONS (HUD BADGES):
   - Angled card cutouts showcasing verified badges (e.g., OSCP, Security+, CySA+) with verification status.

8. CONTACT & TRANSMISSION HUB:
   - Form inputs styled with bottom border only (`border-bottom: 1px solid #333`), focusing to solid #DC2626.
   - Monospace PGP Key section with "COPY KEY" button.
   - Submission triggers an interactive "TRANSMITTING ENCRYPTED DATA..." HUD overlay.

Ensure all animations use smooth 300ms cubic-bezier(0.4, 0, 0.2, 1) transitions, accessible high contrast, and full mobile responsiveness.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1b34981e-e0e1-474a-97dd-ff6b1533b62b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
