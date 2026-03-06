import React from "react";

type NavItem = {
  href: string;
  label: string;
};

type DesktopNavProps = {
  items: NavItem[];
};

const DesktopNav: React.FC<DesktopNavProps> = ({ items }) => {
  return (
    <nav className="hidden md:flex gap-6 fixed top-0 left-0 right-0 z-50 bg-white px-6 py-4 border-b border-gray-200 justify-end">
      <a
        href="/"
        className="font-semibold text-foreground-default hover:text-primary-default transition-colors"
      >
        Home
      </a>
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="font-semibold text-foreground-default hover:text-primary-default transition-colors"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default DesktopNav;
