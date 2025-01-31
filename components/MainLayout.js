import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function MainLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-primary dark:bg-dark-bg">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar className={isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} />
      <main className={`ml-0 transition-margin duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : ''}`}>
        {children}
      </main>
    </div>
  );
}