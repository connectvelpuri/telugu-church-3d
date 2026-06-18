import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Address",
    value: "Sarada Colony 32 Lane, ReddyPalem Road",
    value2: "Guntur, Andhra Pradesh - 522002",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 9963242497",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "shekinahministriesguntur@gmail.com",
  },
];

const socialLinks = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/@shekinahministriesguntur6932",
    color: "hover:text-red-400",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://instagram.com/pastor_vijay_kumar_shekinah",
    color: "hover:text-pink-400",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://facebook.com/ShekinahMinistriesGuntur",
    color: "hover:text-blue-400",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "YouTube Music",
    url: "https://music.youtube.com/channel/UCKVK4i7Wj-d0z1-3OSsSEgQ",
    color: "hover:text-green-400",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-ink to-ink-light/30 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-gold text-sm tracking-widest uppercase mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-parchment mb-4">
            Get in Touch
          </h2>
          <div className="w-12 h-px bg-gold/50 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                  key={info.label}
                  className="flex items-start gap-4 p-5 rounded-xl border border-gold/10 bg-ink-light/30"
                >
                  <div className="w-11 h-11 rounded-lg bg-gold/[0.08] flex items-center justify-center text-gold shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-taupe mb-0.5 uppercase tracking-wider">{info.label}</p>
                    <p className="text-parchment font-medium">{info.value}</p>
                    {info.value2 && <p className="text-parchment/60 text-sm">{info.value2}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-xl border border-gold/10 bg-ink-light/30">
              <h3 className="text-parchment font-semibold mb-4">Service Times</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-gold/5">
                  <span className="text-parchment/70">Sunday Morning</span>
                  <span className="text-gold font-medium">6:00 - 7:00 AM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gold/5">
                  <span className="text-parchment/70">Sunday Main Service</span>
                  <span className="text-gold font-medium">8:00 - 10:00 AM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gold/5">
                  <span className="text-parchment/70">Sunday Evening</span>
                  <span className="text-gold font-medium">7:00 - 8:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-parchment/70">Wednesday Prayer</span>
                  <span className="text-gold font-medium">6:00 - 7:30 PM</span>
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
            <div className="p-8 rounded-2xl border border-gold/10 bg-ink-light/40 backdrop-blur-sm">
              <h3 className="text-parchment font-serif text-xl font-semibold mb-6">
                Connect With Us
              </h3>
              <p className="text-taupe text-sm mb-8 leading-relaxed">
                Follow Shekinah Ministries on social media and stay connected with our worship services, events, and daily devotionals.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    className={`flex items-center gap-3 p-4 rounded-xl border border-gold/10 bg-ink-light/30 ${link.color} transition-all duration-300 hover:border-gold/30`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold/[0.08] flex items-center justify-center shrink-0">
                      {link.icon}
                    </div>
                    <span className="text-parchment/80 text-sm font-medium">{link.name}</span>
                  </motion.a>
                ))}
              </div>

              <p className="text-taupe text-xs text-center">
                "For where two or three gather in my name, there am I with them." — Matthew 18:20
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
