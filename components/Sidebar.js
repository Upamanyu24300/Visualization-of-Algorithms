export default function Sidebar({ className }) {
  return (
    <aside className={`w-64 bg-sidebar dark:bg-dark-sidebar text-secondary dark:text-dark-text h-screen fixed transform transition-transform duration-300 ease-in-out ${className}`}>
      <ul className="p-4">
        <li className="mb-4">
          <a href="/" className="hover:text-gray-300" onClick={() => showHome()}>
            Home
          </a>
        </li>
        <li className="mb-4">
          <a href="#animations" className="hover:text-gray-300">
            Animations
          </a>
        </li>
        <li className="mb-4">
          <a href="#theory" className="hover:text-gray-300">
            Theory
          </a>
        </li>
        <li className="mb-4">
          <a href="#contact" className="hover:text-gray-300">
            Contact Us
          </a>
        </li>
        <li className="mb-4">
          <a href="#credits" className="hover:text-gray-300">
            Credits
          </a>
        </li>
      </ul>
    </aside>
  );
}