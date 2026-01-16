# Ajitaro Portfolio

A modern, high-performance personal portfolio website for Fitriaji Taqiy Robbaanii (Ajitaro), a Software Engineer. Built with React, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

-   **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/) + [GSAP](https://gsap.com/)

## Getting Started

### Prerequisites

-   Node.js (LTS recommended)
-   npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/ajitaro/ajitaro.github.io.git
    cd ajitaro.github.io
    ```

2.  Install dependencies:
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

This project is configured to deploy to **GitHub Pages**.

To deploy the latest version:

```bash
npm run deploy
```

This command will:
1.  Run `npm run build` to create a production build.
2.  Deploy the contents of the `dist` folder to the `gh-pages` branch.

### Configuration Details

-   **`vite.config.ts`**: Configured with `base: '/'` for correct asset loading on GitHub Pages.
-   **`package.json`**:
    -   `homepage`: Set to `https://ajitaro.github.io/`.
    -   `deploy`: Script execution command `gh-pages -d dist`.

## Project Structure

```
src/
├── components/   # Reusable UI components
├── assets/       # Images and static assets
├── data/         # Data files (e.g., project lists, experience)
├── App.tsx       # Main application component
└── main.tsx      # Entry point
```
