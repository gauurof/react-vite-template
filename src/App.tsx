import "./index.css";

export const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Template Project</h1>
          <p className="text-lg text-gray-700 mb-6">
            This is a template project for rapid prototyping of modern web applications. It provides
            a complete development environment built with Vite, React 19, TypeScript and Tailwind
            CSS.
          </p>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Tooling</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Vite: Next generation frontend tooling</li>
              <li>React 19: JavaScript library for building user interfaces</li>
              <li>TypeScript: Typed JavaScript at compile time</li>
              <li>Tailwind CSS: Utility-first CSS framework</li>
              <li>oxlint: Fast TypeScript/JavaScript linter (replacing ESLint)</li>
              <li>oxc: Code formatter (replacing Prettier)</li>
              <li>knip: Unused files, dependencies and exports checker</li>
              <li>Vitest: Testing framework with happy-dom</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};
