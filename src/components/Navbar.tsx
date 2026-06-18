import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "ముందరి పేజీ", href: "#hero", en: "Home" },
  { label: "మా గురించి", href: "#about", en: "About" },
  { label: "సేవలు", href: "#services", en: "Services" },
  { label: "గ్యాలరీ", href: "#gallery", en: "Gallery" },
  { label: "సంప్రదించండి", href: "#contact", en: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/90 backdrop-blur-xl shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.a
            href="#hero"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-lg shadow-gold/20">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-navy" fill="currentColor">
                <path d="M12 2L12 22M6 10L18 10M6 16L18 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className="text-gold font-bold text-lg tracking-wide block leading-tight">సీయోను సంఘం</span>
              <span className="text-ecru-dark/60 text-xs tracking-widest uppercase block">Zion Church</span>
            </div>
          </motion.a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
                className="relative px-4 py-2 text-sm text-ecru/80 hover:text-gold transition-colors duration-300 group"
              >
                <span className="block text-xs tracking-wider">{link.label}</span>
                <span className="block text-[10px] text-ecru/40">{link.en}</span>
                <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gold/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="ml-4 px-5 py-2.5 bg-gradient-to-r from-gold to-gold-dark text-navy font-semibold text-sm rounded-lg hover:from-gold-light hover:to-gold transition-all duration-300 shadow-lg shadow-gold/20"
            >
              రండి
            </motion.a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block h-[2px] bg-gold w-full rounded"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-[2px] bg-gold w-4/5 rounded"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block h-[2px] bg-gold w-full rounded"
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy/95 backdrop-blur-xl border-t border-gold/10"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  whileTap={{ scale: 0.98 }}
                  className="block px-4 py-3 rounded-lg hover:bg-gold/5 text-ecru/80 hover:text-gold transition-colors"
                >
                  <span className="block text-sm font-medium">{link.label}</span>
                  <span className="block text-xs text-ecru/40">{link.en}</span>
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block mt-4 px-4 py-3 bg-gradient-to-r from-gold to-gold-dark text-navy font-semibold text-center rounded-lg"
              >
                రండి
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
