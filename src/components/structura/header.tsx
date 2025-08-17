"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "About", href: "#about-me" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <header
      id="site-header"
      role="banner"
      className={cn(
        "header fixed top-0 left-0 right-0 z-50 transition-shadow duration-300",
        isScrolled || isOpen ? "bg-background shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-24">
          <div className="header__brand">
            <Link href="/" className="text-2xl font-bold" onClick={closeMenu}>
              Structura
            </Link>
          </div>

          <nav id="site-nav" aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <Button asChild size="lg" className="font-bold">
              <Link href="#contact">Book a call</Link>
            </Button>
          </div>

          <div className="lg:hidden">
            <button
              id="nav-toggle"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              className="p-2"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "lg:hidden absolute top-24 left-0 right-0 h-[calc(100vh-6rem)] bg-background/95 backdrop-blur-xl transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="h-full">
            <ul className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-3xl font-semibold text-foreground hover:text-primary transition-colors"
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="mt-8">
                <Button asChild size="lg" className="font-bold">
                    <Link href="#contact" onClick={closeMenu}>Book a call</Link>
                </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
