import { useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Team", href: "#team" },
  { label: "Project", href: "#project" },
  { label: "Wet Lab", href: "#wet-lab" },
  { label: "Dry Lab", href: "#dry-lab" },
  { label: "Engagement", href: "#engagement" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <nav className="mx-auto flex w-full max-w-3xl items-center justify-between">
      <h1 className="text-lg font-bold">Aptagenix</h1>
      <ul className="hidden gap-4 md:flex">
        {navItems.map(({ label, href }, index) => (
          <li key={index}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>

      <div className="relative md:hidden">
        <button onClick={toggle} className="text-2xl hover:cursor-pointer">
          🟰
        </button>
      </div>
    </nav>
  );
}
