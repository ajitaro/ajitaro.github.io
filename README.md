# Ajitaro Portfolio

A modern, high-performance personal portfolio website for Fitriaji Taqiy Robbaanii (Ajitaro), a Software Engineer. Built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- High Performance: Optimized with Vite and built for speed.
- Modern Styling: Responsive design powered by Tailwind CSS.
- Dark Mode: Built-in theme toggle for light and dark modes.
- Rich Animations: Smooth, scroll-based animations utilizing Framer Motion and GSAP.
- Automated CI/CD: Seamless deployment to GitHub Pages via GitHub Actions.

## Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) + [GSAP](https://gsap.com/)

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ajitaro/ajitaro.github.io.git
   cd ajitaro.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Building for Production

Build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

This project uses **GitHub Actions** for automated CI/CD.

### Automated Deployment (Primary)

The primary deployment method is fully automated. Pushing changes to the `main` branch will trigger the `Deploy to GitHub Pages` workflow, which:
1. Installs dependencies and runs linting (`npm run lint`).
2. Executes tests (`npm test`).
3. Builds the production bundle (`npm run build`).
4. Deploys the `dist` directory to the `gh-pages` branch.

### Manual Deployment (Alternative)

If you need to deploy manually from your local machine, you can run:

```bash
npm run deploy
```

This command will:
1. Run `npm run build` to create a production build.
2. Deploy the contents of the `dist` folder directly to the `gh-pages` branch using the `gh-pages` npm package.

### Configuration Details

- **`vite.config.ts`**: Configured with `base: '/'` for correct asset loading on GitHub Pages.
- **`.github/workflows/deploy.yml`**: Contains the automated CI/CD pipeline steps.

## Project Structure

```text
src/
|- components/   # Reusable UI components (Hero, Experience, Skills, etc.)
|- assets/       # Images and static assets
|- data/         # Portfolio content and data files (e.g., experience list, projects)
|- App.tsx       # Main application layout component
|- main.tsx      # Application entry point
```

## Contact

- **LinkedIn**: [ajitaro](https://www.linkedin.com/in/ajitaro)
- **GitHub**: [ajitaro](https://github.com/ajitaro)
- **Email**: ftaqiy@gmail.com
