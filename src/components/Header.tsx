'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', path: '/' },
    { name: '技术文档', path: '/docs' },
    { name: '创新产品', path: '/product' },
    { name: '专业服务', path: '/service' },
    { name: '联系我们', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass-effect py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
              <span className="text-white font-black text-xl">H</span>
            </div>
            <span className={`text-2xl font-black tracking-tighter ${scrolled ? 'text-secondary' : 'text-secondary'}`}>
              HAIREY
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-bold tracking-wide uppercase transition-colors hover:text-primary ${
                  pathname === link.path ? 'text-primary' : 'text-secondary/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-6 border-l border-slate-200 pl-10">
              <button className="text-secondary/70 hover:text-primary transition-colors">
                <Globe size={20} />
              </button>
              <Link 
                href="/contact" 
                className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-secondary transition-all shadow-lg shadow-primary/20"
              >
                获取方案
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-secondary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-black ${
                    pathname === link.path ? 'text-primary' : 'text-secondary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="bg-primary text-white text-center py-4 rounded-xl font-bold"
              >
                立即联系
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
