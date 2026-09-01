# React + Vite Template

A modern React starter template powered by **Vite**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

This template provides a fast, opinionated setup with modern tooling for building scalable frontend applications.

---

## ✨ Features

- ⚛️ React 19
- ⚡ Vite for lightning-fast development
- 📝 TypeScript with strict type checking
- 🎨 Tailwind CSS v4
- 🧪 Vitest + happy-dom for unit testing
- 🔍 oxlint for extremely fast linting
- 🎯 oxfmt for formatting
- 🧹 knip for detecting unused files, exports, and dependencies
- 📦 pnpm package manager
- 🚀 Production-ready build configuration

---

## 📦 Prerequisites

Before getting started, install:

- Node.js **22+** (or the project's recommended version)
- pnpm

```bash
npm install -g pnpm
```

---

## 🚀 Getting Started

### Install dependencies

```bash
pnpm install
```

### Start the development server

```bash
pnpm run dev
```

The application will typically be available at:

```
http://localhost:5173
```

### Create a production build

```bash
pnpm run build
```

### Preview the production build

```bash
pnpm run preview
```

---

## 🛠 Available Scripts

| Command | Description |
|----------|-------------|
| `pnpm run dev` | Starts the Vite development server |
| `pnpm run build` | Creates a production build |
| `pnpm run preview` | Serves the production build locally |
| `pnpm run lint` | Runs oxlint |
| `pnpm run format` | Formats the source code using oxfmt |
| `pnpm run test` | Runs the test suite (if configured) |
| `pnpm run knip` | Detects unused files, exports and dependencies |

---

## 📁 Project Structure

```
.
├── public/              # Static assets
├── src/
│   ├── test/            # Vitest setup and tests
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

This template provides a minimal but complete setup. Developers can organize their project structure as needed.

---

## 🧪 Testing

Run the test suite:

```bash
pnpm run test
```

This template uses:

- **Vitest**
- **happy-dom**

---

## 🎨 Styling

The project uses **Tailwind CSS v4**.

Global styles are located in:

```
src/index.css
```

---

## 🔍 Code Quality

This project replaces the traditional ESLint + Prettier setup with the much faster **Oxc** tooling.

### Lint

```bash
pnpm run lint
```

### Format

```bash
pnpm run format
```

### Detect unused code

```bash
pnpm run knip
```

This helps identify:

- Unused files
- Unused exports
- Unused dependencies
- Unused devDependencies

---

## 📦 Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | UI library |
| Vite | Build tool |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Vitest | Unit testing |
| happy-dom | Browser environment for tests |
| oxlint | Linting |
| oxfmt | Code formatting |
| knip | Dead code detection |
| pnpm | Package manager |

---

## 💡 Recommended VS Code Extensions

- ESLint (optional)
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features
- Vitest
- EditorConfig (if using an `.editorconfig`)

---

## 🚀 Build Output

Build the application:

```bash
pnpm run build
```

The optimized production files are generated in:

```
dist/
```

---

## 📄 License

Use this template freely for personal or commercial projects.