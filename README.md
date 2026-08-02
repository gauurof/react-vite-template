# react-vite template

This is a Vite-powered React project with TypeScript and Tailwind CSS designed for building modern applications.

## Project Overview

This template provides a complete development environment for creating applications.

The application features:
- Responsive layout with Tailwind CSS styling
- Type-safe development with TypeScript
- Component-based architecture with React 19
- Modern build tooling with Vite

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start development server:

   ```bash
   pnpm run dev
   ```

3. Build for production:

   ```bash
   pnpm run build
   ```

4. Lint code:

   ```bash
   pnpm run lint
   ```

5. Format code:

   ```bash
   pnpm run format
   ```

6. Check for unused files/dependencies:
   ```bash
   pnpm run knip
   ```

## Tooling

- **Vite**: Next generation frontend tooling
- **React 19**: JavaScript library for building user interfaces
- **TypeScript**: Typed JavaScript at compile time
- **Tailwind CSS**: Utility-first CSS framework
- **oxlint**: Fast TypeScript/JavaScript linter (replacing ESLint)
- **oxc**: Code formatter (replacing Prettier)
- **knip**: Unused files, dependencies and exports checker
- **Vitest**: Testing framework with happy-dom

## Project Structure

- `src/` - Source code directory containing components and logic
- `public/` - Static assets
- `index.html` - Main HTML file
- `src/test/` - Test files for Vitest

## Configuration Notes

The project is configured to work in both WSL and Windows environments with the tools installed globally.

- **oxlint** is available globally (version: $(oxlint --version))
- **knip** is available globally (version: $(knip --version))

## Features Included

This template includes:
- Pre-configured React 19 + TypeScript environment
- Vite build setup with Tailwind CSS styling
- Full testing environment (Vitest with happy-dom)
- Linting and formatting tools (oxlint, oxfmt)
- Dependency management with pnpm
- Comprehensive development workflow