
import React from "react";
import logo from "/public/Logo_Dutra_Rodrigues_Simbolo.png";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md p-4 flex items-center justify-between fixed top-0 left-0 z-50">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo Dutra Rodrigues" className="h-10 w-auto" />
        <h1 className="text-xl font-semibold text-gray-800">Dr. Thiago Broggin Dutra Rodrigues</h1>
      </div>
    </header>
  );
};

export default Header;
