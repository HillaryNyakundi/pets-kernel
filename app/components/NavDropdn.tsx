import React, { useState, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';

export default function Dropdn() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleParentMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleParentMouseLeave = (e: React.MouseEvent) => {
    setTimeout(() => {
      if (containerRef.current && e.relatedTarget instanceof Node) {
        if (!containerRef.current.contains(e.relatedTarget)) {
          setDropdownVisible(false);
        }
      } else {
        // Fallback to closing if we can't determine the target
        setDropdownVisible(false);
      }
    }, 5000);
  };

  return (
    <div
      ref={containerRef}
      className="relative flex items-center space-x-2 cursor-pointer group"
      onMouseEnter={handleParentMouseEnter}
      onMouseLeave={handleParentMouseLeave}
    >
      <span className="text-cyan-700 hover:text-cyan-500 font-semibold">Sign in</span>
      <FaChevronDown
        className={`w-5 h-5 text-cyan-700 hover:text-cyan-500 transform transition-transform duration-300 ${
          dropdownVisible ? 'rotate-180' : 'rotate-0'
        }`}
      />
      {dropdownVisible && (
        <div className="absolute top-full mt-2 right-0 bg-slate-100 text-gray-500 rounded shadow-lg transition-opacity duration-300 z-10">
          <div className="flex flex-col gap-2 w-36 py-3 px-5">
            <Link
              href="/pages/auth/sign-in/patient"
              className="cursor-pointer text-black text-base font-semibold hover:underline"
            >
              pet vendor
            </Link>
            <hr className="border-t border-cyan-700" />
            <Link
              href="/pages/auth/sign-in/care-giver"
              className="cursor-pointer text-black text-base font-semibold hover:underline"
            >
              pet buyer
            </Link>
            <hr className="border-t border-cyan-700" />
            <Link
              href="/pages/auth/sign-in/care-giver"
              className="cursor-pointer text-black text-base font-semibold hover:underline"
            >
              lost & found
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
