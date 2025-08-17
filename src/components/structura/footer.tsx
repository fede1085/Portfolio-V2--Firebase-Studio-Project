import Link from "next/link";
import { Dribbble, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { name: "Dribbble", href: "#", icon: Dribbble },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Twitter", href: "#", icon: Twitter },
  ];
  
  const navLinks = [
      { name: "About", href: "#about-me" },
      { name: "Services", href: "#services" },
      { name: "Projects", href: "#projects" },
      { name: "Blog", href: "#blog" },
      { name: "Experience", href: "#resume" },
      { name: "Contact", href: "#contact" },
      { name: "Image License Info", href: "#" },
      { name: "Instructions", href: "#" },
      { name: "Changelog", href: "#" },
      { name: "Style Guide", href: "#" },
  ];

  return (
    <footer id="site-footer" className="bg-black text-white">
      <div className="container mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="footer-brand md:col-span-5">
            <Link href="/" className="text-2xl font-bold mb-4 block">
              Structura
            </Link>
             <p className="text-gray-400 mb-2">123 Design Lane, Creativity City, 12345</p>
             <a href="mailto:hello@structura.com" className="text-gray-400 hover:text-white transition-colors">hello@structura.com</a>
          </div>

          <nav className="footer-nav md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                </Link>
            ))}
          </nav>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="footer-social flex items-center gap-4">
                {socialLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    aria-label={`Visit my ${link.name} profile`}
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    <link.icon className="w-6 h-6" />
                </a>
                ))}
            </div>
            <div className="text-center text-sm text-gray-500">
                <p>
                    &copy; {new Date().getFullYear()} Structura. All rights reserved. Powered by Webflow.
                </p>
            </div>
        </div>
      </div>
    </footer>
  );
}
