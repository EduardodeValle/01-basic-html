// src/components/NavBar.tsx
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-blue-100 text-white p-4 mb-2">
      <ul className="flex space-x-4">
        <li>
          <Link
            href="/"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            passHref
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/favorites"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            passHref
          >
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
