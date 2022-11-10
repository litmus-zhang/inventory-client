import React from "react";

function Header() {
  return (
    <div className="bg-gray-100">
      <header className="flex flex-row justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Contechs</h1>
        <nav className="flex flex-row space-x-4">
          <a href="#" className="text-lg font-semibold">
            Home
          </a>
          <a href="#" className="text-lg font-semibold">
            About
          </a>
          <a href="#" className="text-lg font-semibold">
            Contact
          </a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
