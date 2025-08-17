import Link from "next/link";
import { Dribbble, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const navLinks = [
    { name: "About", href: "#about-me" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Experience", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "Dribbble", href: "#", icon: Dribbble },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Twitter", href: "#", icon: Twitter },
  ];

  return (
    <footer id="site-footer" className="footer-section bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="footer-brand">
            <Link href="/" className="text-2xl font-bold font-headline">
              Structura
            </Link>
            <p className="text-muted-foreground mt-2">
              Design that inspires.
            </p>
          </div>
          <div className="footer-contact">
            <h3 className="font-semibold mb-2">Contact Info</h3>
            <p className="text-muted-foreground">123 Design Lane<br/>Creativity City, 12345</p>
            <a href="mailto:hello@structura.com" className="text-muted-foreground hover:text-primary transition-colors">hello@structura.com</a>
          </div>
          <div className="footer-nav">
             <h3 className="font-semibold mb-2">Quick Links</h3>
             <ul className="space-y-1">
                {navLinks.map(link => (
                    <li key={link.name}><Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">{link.name}</Link></li>
                ))}
             </ul>
          </div>
           <div className="footer-legal">
             <h3 className="font-semibold mb-2">Legal</h3>
             <ul className="space-y-1">
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Image License Info</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Instructions</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Changelog</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Style Guide</Link></li>
             </ul>
          </div>
        </div>
        <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Structura. All rights reserved.
          </p>
          <div className="footer-social flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                aria-label={`Visit my ${link.name} profile`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
