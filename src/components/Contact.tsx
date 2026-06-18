import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    te: "చిరునామా",
    en: "Address",
    value: "హైదరాబాద్, తెలంగాణ",
    valueEn: "Hyderabad, Telangana",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    te: "ఫోన్",
    en: "Phone",
    value: "+91 98765 43210",
    valueEn: "+91 98765 43210",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    te: "ఇమెయిల్",
    en: "Email",
    value: "info@zionchurch.org",
    valueEn: "info@zionchurch.org",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-navy to-navy-light/50 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold text-sm tracking-widest uppercase mb-4">
            సంప్రదించండి · Contact Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-ecru mb-4">
            మాతో కనెక్ట్ అవ్వండి
          </h2>
          <p className="text-lg text-ecru/40 font-light">Connect With Us</p>
          <div className="w-16 h-0.5 bg-gold/50 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div
                  key={info.te}
                  className="flex items-start gap-4 p-4 rounded-xl border border-gold/10 bg-navy-light/30"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-ecru/50 mb-0.5">
                      {info.te}
                      <span className="text-ecru/20 ml-2 text-xs">{info.en}</span>
                    </p>
                    <p className="text-ecru font-medium">{info.value}</p>
                    <p className="text-ecru/40 text-xs">{info.valueEn}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-xl border border-gold/10 bg-navy-light/30">
              <h3 className="text-ecru font-semibold mb-4">సందర్శన సమయాలు</h3>
              <p className="text-ecru/40 text-xs mb-4">Visiting Hours</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-ecru/70">సోమవారం - శుక్రవారం</span>
                  <span className="text-gold/60">ఉదయం 9:00 - సాయంత్రం 6:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ecru/70">శనివారం</span>
                  <span className="text-gold/60">ఉదయం 9:00 - మధ్యాహ్నం 1:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ecru/70">ఆదివారం</span>
                  <span className="text-gold/60">ఉదయం 7:00 - మధ్యాహ్నం 12:00</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4 p-6 rounded-xl border border-gold/10 bg-navy-light/30 backdrop-blur-sm"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-ecru/60 text-xs mb-1.5 tracking-wider uppercase">పేరు</label>
                  <span className="text-ecru/20 text-[10px] block mb-1">Name</span>
                  <input
                    type="text"
                    placeholder="మీ పేరు"
                    className="w-full px-4 py-2.5 bg-navy/60 border border-gold/10 rounded-lg text-ecru placeholder-ecru/20 focus:border-gold/40 focus:outline-none transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-ecru/60 text-xs mb-1.5 tracking-wider uppercase">ఇమెయిల్</label>
                  <span className="text-ecru/20 text-[10px] block mb-1">Email</span>
                  <input
                    type="email"
                    placeholder="మీ ఇమెయిల్"
                    className="w-full px-4 py-2.5 bg-navy/60 border border-gold/10 rounded-lg text-ecru placeholder-ecru/20 focus:border-gold/40 focus:outline-none transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-ecru/60 text-xs mb-1.5 tracking-wider uppercase">విషయం</label>
                <span className="text-ecru/20 text-[10px] block mb-1">Subject</span>
                <input
                  type="text"
                  placeholder="మీ సందేశం యొక్క విషయం"
                  className="w-full px-4 py-2.5 bg-navy/60 border border-gold/10 rounded-lg text-ecru placeholder-ecru/20 focus:border-gold/40 focus:outline-none transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-ecru/60 text-xs mb-1.5 tracking-wider uppercase">సందేశం</label>
                <span className="text-ecru/20 text-[10px] block mb-1">Message</span>
                <textarea
                  rows={4}
                  placeholder="మీ సందేశం ఇక్కడ వ్రాయండి..."
                  className="w-full px-4 py-2.5 bg-navy/60 border border-gold/10 rounded-lg text-ecru placeholder-ecru/20 focus:border-gold/40 focus:outline-none transition-colors text-sm resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-gold to-gold-dark text-navy font-semibold rounded-lg hover:from-gold-light hover:to-gold transition-all duration-300 shadow-lg shadow-gold/20"
              >
                సందేశం పంపండి
              </motion.button>

              <p className="text-center text-ecru/20 text-xs">
                Send Message
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
