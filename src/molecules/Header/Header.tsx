import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col gap-3 text-teal-400">
      <div className="font-bold text-2xl p-10">ReizTech-Project</div>
      <nav className="flex flex-row justify-between font-semibold">
        <div className="flex gap-4">
          <button className="border-2 rounded-xl border-teal-400 px-3">
            Lithuania
          </button>
          <button className="border-2 rounded-xl border-teal-400 px-3">
            Oceania
          </button>
        </div>
        <button className="border-2 rounded-xl border-teal-400 p-0.5 px-3">
          A-Z
        </button>
      </nav>
    </header>
  );
};

export default Header;
