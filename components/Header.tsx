'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 sm:p-6 lg:px-8 bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-lg sm:text-xl font-bold text-gray-900">YourApp</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-4">
        <Link
          href="/login"
          className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
        >
          Sign In
        </Link>
        <Link
          href="/signup"
          className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-indigo-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-600 hover:text-gray-900 p-2 rounded-md transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 md:hidden">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/login"
              className="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="block bg-gradient-to-r from-indigo-600 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-indigo-700 hover:to-cyan-700 transition-all duration-200 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
