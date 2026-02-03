import { useEffect, useState } from 'react';
import { useCounterStore } from '../store/useCounterStore';

const Home = () => {
  const [message, setMessage] = useState('Loading...');
  const { count, increase, decrease, reset } = useCounterStore();

  useEffect(() => {
    setTimeout(() => {
      setMessage('Welcome to Todo List App! 🎉');
    }, 500);
  }, []);

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-2">{message}</h1>
        <p className="text-blue-100">
          A modern Todo application built with React, TypeScript, and Axios
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          State Management Demo (Zustand)
        </h2>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-gray-700 text-lg">Counter:</span>
          <span className="text-4xl font-bold text-blue-600">{count}</span>
        </div>
        <div className="flex gap-3">
          <button
            onClick={increase}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            ➕ Increase
          </button>
          <button
            onClick={decrease}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
          >
            ➖ Decrease
          </button>
          <button
            onClick={reset}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
          >
            🔄 Reset
          </button>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 className="text-xl font-semibold mb-3 text-blue-900">
          🚀 Features
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="mr-2">✅</span>
            <span>
              Create, read, update, and delete todos using Axios API calls
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">✅</span>
            <span>State management with Zustand for global state</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">✅</span>
            <span>Modern UI with Material-UI and Tailwind CSS</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">✅</span>
            <span>TypeScript for type safety</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">✅</span>
            <span>React Router for navigation</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
