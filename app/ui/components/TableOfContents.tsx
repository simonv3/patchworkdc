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
        className="fixed bottom-6 right-6 z-40 bg-primary-default text-white p-4 rounded-full shadow-lg hover:bg-primary-dark"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="fixed inset-0 top-0 z-30 bg-white pt-20 px-6 overflow-y-auto">
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
    </>
  );
};

export default TableOfContents;
