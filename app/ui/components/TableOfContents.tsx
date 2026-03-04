"use client";

import React, { useState } from "react";

type TableOfContentsItem = {
  href: string;
  label: string;
  level?: number;
};

type TableOfContentsProps = {
  items: TableOfContentsItem[];
  title?: string;
  showHomeLink?: boolean;
};

const TableOfContents: React.FC<TableOfContentsProps> = ({
  items,
  title = "Contents",
  showHomeLink = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-40 bg-primary-default text-white p-4 rounded-full shadow-lg hover:bg-primary-dark"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="lg:hidden fixed inset-0 top-0 z-30 bg-white pt-20 px-6 overflow-y-auto">
          <h3 className="font-bold text-lg mb-4">{title}</h3>
          <ul className="space-y-2">
            {showHomeLink && (
              <li className="border-b pb-4">
                <a
                  href="/"
                  className="text-primary-default hover:text-primary-dark"
                  onClick={() => setIsOpen(false)}
                >
                  ← Home
                </a>
              </li>
            )}
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-primary-default hover:text-primary-dark"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:block fixed top-6 left-6 w-64 max-h-[calc(100vh-3rem)] overflow-y-auto bg-background-light rounded-lg p-6 z-20">
        <h3 className="font-bold text-lg mb-4">{title}</h3>
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.href}
              style={{ marginLeft: `${(item.level || 1) * 1}rem` }}
            >
              <a
                href={item.href}
                className="text-primary-default hover:text-primary-dark text-sm"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default TableOfContents;
