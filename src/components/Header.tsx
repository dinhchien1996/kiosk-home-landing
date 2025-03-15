"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeCustomizer } from './ThemeCustomizer';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Trang chủ" },
    { href: "/ve-chung-toi", label: "Về chúng tôi" },
    { href: "/dich-vu", label: "Dịch vụ" },
    { href: "/chinh-sach-bao-mat", label: "Chính sách" },
    { href: "/lien-he", label: "Liên hệ" },
  ];

  return (
    <header className="w-full py-4 border-b backdrop-blur-sm bg-background/80 sticky top-0 z-50">
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image
              src="https://chuyendoisovn.info/wp-content/uploads/2024/05/Logo-tran-W.png"
              alt="FPT.SmartKiosk Logo"
              width={96}
              height={40}
              priority
              className="dark:invert"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || 
                           (link.href !== "/" && pathname.startsWith(link.href));
            
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative group flex flex-col items-center",
                  isActive ? "text-primary" : "text-foreground hover:text-primary"
                )}
              >
                <span className="transition-colors">{link.label}</span>
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <ThemeCustomizer />

          <Button asChild variant="primary" className="hidden md:flex">
            <Link href="tel:02873007373">Liên hệ ngay</Link>
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[73px] bg-background border-b shadow-lg z-40">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || 
                             (link.href !== "/" && pathname.startsWith(link.href));
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "py-2 transition-colors block relative pl-6",
                    isActive ? "text-primary font-medium" : "text-foreground hover:text-primary"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full" />
                  )}
                  <span>{link.label}</span>
                </Link>
              );
            })}
            <Button asChild variant="primary" className="w-full mt-2">
              <Link href="tel:02873007373" onClick={() => setIsMenuOpen(false)}>
                Liên hệ ngay
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
