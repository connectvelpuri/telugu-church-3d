import { motion } from "framer-motion";

const year = new Date().getFullYear();

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/@shekinahministriesguntur6932",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/pastor_vijay_kumar_shekinah",
  },
  {
    name: "Facebook",
    url: "https://facebook.com/ShekinahMinistriesGuntur",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/10">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-light/20 to-ink pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-6 h-6 text-ink" fill="currentColor">
                  <path d="M16 2L16 30M16 8L28 8M16 16L28 16M16 24L28 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
                  <path d="M16 8L4 8M16 16L4 16M16 24L4 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5"/>
                </svg>
              </div>
              <div>
                <span className="text-gold font-serif font-bold text-lg block leading-tight">Shekinah Ministries</span>
                <span className="text-taupe text-xs tracking-widest uppercase">Guntur</span>
              </div>
            </div>
            <p className="text-taupe text-sm leading-relaxed max-w-xs">
              A dwelling place for His glory. Sharing the love of Christ with Guntur and beyond.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-parchment font-semibold mb-4 text-sm tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-taupe hover:text-gold text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-px bg-gold/40" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-parchment font-semibold mb-4 text-sm tracking-wider uppercase">Follow Us</h3>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-gold/15 flex items-center justify-center text-taupe hover:text-gold hover:border-gold/30 hover:bg-gold/[0.03] transition-all duration-300 text-xs font-semibold"
                >
                  {s.name.charAt(0)}
                </a>
              ))}
            </div>
            <p className="text-taupe text-xs mt-6 leading-relaxed">
              Sunday Services at 6:00 AM · 8:00 AM · 7:00 PM
            </p>
          </motion.div>
        </div>

        <div className="border-t border-gold/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-taupe/50 text-xs text-center sm:text-left">
            &copy; {year} Shekinah Ministries. All rights reserved.
          </p>
          <p className="text-taupe/30 text-[10px] text-center sm:text-right">
            Sarada Colony 32 Lane, ReddyPalem Road, Guntur · Andhra Pradesh
          </p>
        </div>
      </div>
    </footer>
  );
}
