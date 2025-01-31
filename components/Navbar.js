import { useState } from 'react';

export default function Navbar({ toggleSidebar }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-secondary dark:bg-dark-sidebar p-4 flex justify-between items-center">
      <button id="sidebar-toggle" className="text-white" onClick={toggleSidebar}>
        &#9776;
      </button>
      <h1 className="text-white text-xl font-bold">Visualization of Algorithms</h1>
      <button id="theme-toggle" className="text-white" onClick={toggleDarkMode}>
        <img src="/night-mode.png" alt="Toggle Theme" id="night" className="h-12 w-12" />
      </button>
    </nav>
  );
}