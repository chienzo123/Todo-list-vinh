const About = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          About This Project
        </h1>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              📖 Overview
            </h2>
            <p className="leading-relaxed">
              This is a modern Todo List application built with React,
              TypeScript, and various modern web technologies. It demonstrates
              best practices in front-end development including API integration,
              state management, and responsive design.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              🛠️ Tech Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">
                  Core Technologies
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>React 19</li>
                  <li>TypeScript</li>
                  <li>Vite</li>
                  <li>React Router</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-900 mb-2">
                  UI & Styling
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Material-UI (MUI)</li>
                  <li>Tailwind CSS</li>
                  <li>Emotion (CSS-in-JS)</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-2">
                  State & API
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Zustand (State Management)</li>
                  <li>Axios (HTTP Client)</li>
                  <li>JSONPlaceholder API</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h3 className="font-semibold text-orange-900 mb-2">
                  Dev Tools
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>ESLint</li>
                  <li>Prettier</li>
                  <li>TypeScript ESLint</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              ✨ Features
            </h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Full CRUD operations for todos with Axios</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Global state management with Zustand</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Type-safe development with TypeScript</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Responsive design with Tailwind CSS and Material-UI</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Code quality with ESLint and Prettier</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>
                  Fast development with Vite and Hot Module Replacement
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              👨‍💻 Developer
            </h2>
            <p className="leading-relaxed">
              Built with ❤️ as a demonstration of modern React development
              practices.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
