import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gold/10">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-light/30 to-navy pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-navy" fill="currentColor">
                  <path d="M12 2L12 22M6 10L18 10M6 16L18 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
              <div>
                <span className="text-gold font-bold text-lg block leading-tight">సీయోను సంఘం</span>
                <span className="text-ecru-dark/40 text-xs tracking-widest uppercase">Zion Church</span>
              </div>
            </div>
            <p className="text-ecru/50 text-sm leading-relaxed">
              వెలుగు, నీతి, శాంతిని వ్యాపింపజేస్తూ, యేసుక్రీస్తు ప్రేమను ప్రకటించే తెలుగు సంఘం.
            </p>
            <p className="text-ecru/30 text-xs mt-2">
              Spreading light, righteousness, and peace through Jesus Christ's love.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-ecru font-semibold mb-4 text-sm tracking-wider uppercase">త్వరిత లింకులు</h3>
            <p className="text-ecru/30 text-[10px] tracking-widest uppercase mb-4">Quick Links</p>
            <ul className="space-y-2">
              {[
                { te: "ముందరి పేజీ", en: "Home", href: "#hero" },
                { te: "మా గురించి", en: "About", href: "#about" },
                { te: "సేవలు", en: "Services", href: "#services" },
                { te: "గ్యాలరీ", en: "Gallery", href: "#gallery" },
                { te: "సంప్రదించండి", en: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-ecru/60 hover:text-gold text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/30" />
                    {link.te}
                    <span className="text-ecru/20 text-[10px]">{link.en}</span>
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
            <h3 className="text-ecru font-semibold mb-4 text-sm tracking-wider uppercase">అనుసరించండి</h3>
            <p className="text-ecru/30 text-[10px] tracking-widest uppercase mb-4">Follow Us</p>
            <div className="flex gap-3">
              {["YT", "FB", "IG", "WA"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 rounded-lg border border-gold/20 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold/40 hover:bg-gold/5 transition-all duration-300 text-xs font-bold"
                >
                  {s}
                </a>
              ))}
            </div>
            <p className="text-ecru/40 text-xs mt-6 leading-relaxed">
              ప్రతి ఆదివారం ఉదయం 8:00 గంటలకు
            </p>
            <p className="text-ecru/20 text-[10px]">
              Every Sunday at 8:00 AM
            </p>
          </motion.div>
        </div>

        <div className="border-t border-gold/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ecru/30 text-xs text-center sm:text-left">
            &copy; {year} సీయోను సంఘం. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.
          </p>
          <p className="text-ecru/20 text-[10px] text-center sm:text-right">
            Zion Church · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
