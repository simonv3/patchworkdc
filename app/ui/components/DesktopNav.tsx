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
    <nav className="hidden md:flex gap-6 mb-6 border-b pb-4 justify-end">
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
