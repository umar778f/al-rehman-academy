'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Our Services', href: '#services' },
    { name: "FAQ's", href: '#faq' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white py-3 shadow-sm border-b border-[#E2E8F0]' : 'bg-[#c8dbd0] py-5 border-b border-[#c8dbd0]'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#2563EB] rounded flex items-center justify-center text-white font-bold text-xl">
            A
          </div>
          <span className="text-xl md:text-2xl font-semibold tracking-tight text-[#0F172A]">
            AL REHMAN ACADEMY
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#64748B]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#2563EB] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a
            href="https://wa.me/923154485676?text=Hello%20AL%20REHMAN%20ACADEMY%2C%20I%20want%20to%20book%20a%20tutor"
            target="_blank"
            rel="noreferrer noopener"
            className="px-6 py-2.5 bg-[#C06B6B] hover:bg-[#A85A5A] text-white rounded-lg text-sm font-bold tracking-wide transition-colors"
          >
            BOOK A TUTOR
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-[#1E293B]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 flex flex-col items-center gap-6 border-t border-[#E2E8F0]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#64748B] font-medium hover:text-[#2563EB]"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/923154485676?text=Hello%20AL%20REHMAN%20ACADEMY%2C%20I%20want%20to%20book%20a%20tutor"
            target="_blank"
            rel="noreferrer noopener"
            className="bg-[#C06B6B] hover:bg-[#A85A5A] text-white px-8 py-3 rounded-lg text-sm font-bold tracking-wide mt-2 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            BOOK A TUTOR
          </a>
        </div>
      )}
    </header>
  );
}
