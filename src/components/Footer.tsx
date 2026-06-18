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
  { name: "YouTube", url: "https://www.youtube.com/@shekinahministriesguntur6932" },
  { name: "Instagram", url: "https://instagram.com/pastor_vijay_kumar_shekinah" },
  { name: "Facebook", url: "https://facebook.com/ShekinahMinistriesGuntur" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/10">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-light/10 to-ink pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-lg shadow-gold/10">
                <svg viewBox="0 0 28 28" className="w-6 h-6 text-ink" fill="currentColor">
                  <rect x="12" y="2" width="4" height="24" rx="1" />
                  <rect x="6" y="12" width="16" height="4" rx="1" />
                </svg>
              </div>
              <div>
                <span className="text-gold font-serif font-bold text-xl block leading-tight">Shekinah Ministries</span>
                <span className="text-taupe text-[10px] tracking-[0.2em] uppercase">Guntur · Since 2012</span>
              </div>
            </div>
            <p className="text-taupe text-sm leading-relaxed max-w-md">
              A dwelling place for His glory. Sharing the love of Christ with Guntur, Andhra Pradesh, and the world.
            </p>
            <p className="text-taupe-dark text-xs mt-3 italic">
              "My dwelling place will be with them; I will be their God, and they will be my people." — Ezekiel 37:27
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-parchment/80 text-xs tracking-widest uppercase mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-taupe hover:text-gold text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-2 h-px bg-gold/40" />
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
            <h3 className="text-parchment/80 text-xs tracking-widest uppercase mb-4 font-semibold">Follow Us</h3>
            <div className="flex gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-gold/12 flex items-center justify-center text-taupe hover:text-gold hover:border-gold/25 hover:bg-gold/[0.03] transition-all duration-300 text-xs font-semibold"
                >
                  {s.name.charAt(0)}
                </a>
              ))}
            </div>
            <p className="text-taupe-dark text-xs mt-4 leading-relaxed">
              Sunday Services
            </p>
            <p className="text-taupe/60 text-[11px]">
              6:00 AM · 8:00 AM · 7:00 PM
            </p>
          </motion.div>
        </div>

        <div className="section-divider" />
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-taupe-dark/60 text-xs text-center sm:text-left">
            &copy; {year} Shekinah Ministries. All rights reserved.
          </p>
          <p className="text-taupe-dark/40 text-[10px] text-center sm:text-right">
            Sarada Colony, 32 Lane, ReddyPalem Road, Guntur — Andhra Pradesh
          </p>
        </div>
      </div>
    </footer>
  );
}
