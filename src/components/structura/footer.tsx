import Link from "next/link";
import { Dribbble, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { name: "Dribbble", href: "#", icon: Dribbble },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Twitter", href: "#", icon: Twitter },
  ];

  return (
    <footer id="site-footer" className="bg-black text-white">
      <div className="container mx-auto px-8 py-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="footer-brand text-center md:text-left">
            <Link href="/" className="text-2xl font-bold">
              Structura
            </Link>
          </div>
          <div className="footer-contact text-center md:text-left">
             <p className="text-gray-400">123 Design Lane, Creativity City, 12345</p>
             <a href="mailto:hello@structura.com" className="text-gray-400 hover:text-white transition-colors">hello@structura.com</a>
          </div>
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
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Structura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
