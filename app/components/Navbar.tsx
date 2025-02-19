'use client';

import React, { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import Link from 'next/link';
import { redressed } from '@/app/components/fonts';
import Dropdn from '@/app/components/NavDropdn';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent backdrop-blur-md z-50 fixed top-4 left-0 right-0 mx-auto rounded-lg shadow-lg w-full max-w-screen-xl cursor-pointer">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={`${redressed.className} text-2xl font-extrabold hover:text-cyan-500 text-cyan-700`}
            >
              DOGPET
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="/pages/auth/sign-up/patient"
              className="text-black px-3 py-2 hover:underline rounded-md text-base font-semibold"
            >
              Home
            </Link>
            <Link
              href="/pages/auth/sign-up/care-giver"
              className="text-black px-3 py-2 hover:underline rounded-md text-base font-semibold"
            >
              Category
            </Link>
            <Link
              href="#about"
              className="text-gray-900 px-3 py-2 hover:underline rounded-md text-base font-semibold"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-gray-900 px-3 py-2 hover:underline rounded-md text-base font-semibold"
            >
              Contact
            </Link>
            {/* <Link
              href="/team"
              className="text-gray-900 px-3 py-2 hover:underline rounded-md text-base font-semibold"
            >
              Our Team
            </Link> */}
          </div>

          {/* Desktop Sign In Button */}
          <div className="hidden md:block">
            <Dropdn />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-cyan-700 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-400 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              {!isOpen ? <MdMenu size={30} /> : <RxCross2 size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/pages/auth/sign-up/patient"
            className="text-black hover:underline block px-3 py-2 rounded-md text-base font-medium"
          >
            Find caregiver
          </Link>
          <Link
            href="/pages/auth/sign-up/care-giver"
            className="text-black hover:underline block px-3 py-2 rounded-md text-base font-medium"
          >
            Become caregiver
          </Link>
          <Link
            href="#about"
            className="text-black hover:underline block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-black hover:underline block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
          <div className="block md:hidden">
            <Dropdn />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
