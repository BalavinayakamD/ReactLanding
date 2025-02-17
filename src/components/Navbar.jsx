import { useState } from "react";
import Logo from "../assets/Logo.jpg";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="top-0 sticky backdrop-blur py-3 px-2 z-999 border-b border-neutral-700/80 ">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 h-auto">
            <img
              className="h-10 w-10 mr-2 rounded-full"
              src={Logo}
              alt="logo"
            ></img>
            <span className="tracking-tight lg:text-lg">
              All Night Federation
            </span>
          </div>
          <ul className="hidden lg:flex space-x-4 ml-auto">
            {navItems.map((items, index) => (
              <li key={index}>
                <a href={items.href}>{items.label}</a>
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={handleToggle}>{isOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {isOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full flex flex-col items-center justify-center lg:hidden">
            <ul>
              {navItems.map((items, index) => (
                <li key={index}>
                  <a href={items.href}>{items.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
// className="h-112 p-4 sm:p-8 relative overflow-hidden rounded-lg bg-gray-950/[2.5%] after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:inset-ring after:inset-ring-gray-950/5 dark:after:inset-ring-white/10 bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10"
