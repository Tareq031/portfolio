# Tarequl Islam — Developer Portfolio

A responsive personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Lucide icons.

## Run locally

1. Install Node.js (LTS).
2. Extract this project and open the folder in VS Code.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open http://localhost:3000

## Personalize before publishing

Edit `data/portfolio.ts`:
- Replace the sample email, GitHub, and LinkedIn links.
- Add your real university name, academic session, and expected graduation year.
- Update project repository and live-demo links.
- Add your actual resume as `public/resume.pdf`.

The portfolio intentionally uses editable sample details where your exact information was not available. Do not publish until those placeholders are updated.

## Build

```bash
npm run build
npm start
```

## Folder structure

```text
tarequl-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── SectionHeading.tsx
│   └── Skills.tsx
├── data/
│   └── portfolio.ts
├── public/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```
