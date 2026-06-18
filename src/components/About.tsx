import { motion } from "framer-motion";

const values = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Faith",
    verse: "Hebrews 11:1",
    desc: "Rooted in the unshakable foundation of God's Word, we stand firm in our faith.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Community",
    verse: "Acts 2:44-47",
    desc: "A loving family united in Christ, where every generation finds belonging.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Service",
    verse: "Mark 10:45",
    desc: "Following Christ's example of humble service to our community and world.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12h2a10 10 0 0020 0h2" />
        <path d="M12 2v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M19.07 4.93l-2.83 2.83" />
      </svg>
    ),
    title: "Light",
    verse: "Matthew 5:14-16",
    desc: "Called to shine the light of Christ, bringing hope to our city and beyond.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/50 to-ink pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 text-gold text-sm tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-gold/40" />
            About Us
            <span className="w-8 h-px bg-gold/40" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-parchment mb-4 leading-tight">
            A Dwelling Place<br />for His Glory
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-parchment/80 leading-relaxed text-base sm:text-lg">
              <span className="text-gold font-semibold">Shekinah Ministries</span> was founded on <span className="text-parchment/90">December 12, 2012</span>, by Pastor G. Vijay Kumar in Guntur, Andhra Pradesh. The word <span className="italic text-parchment/90">Shekinah</span> refers to the manifest glory of God — His divine presence dwelling among His people.
            </p>
            <p className="text-taupe leading-relaxed">
              From humble beginnings as a small gathering, God has grown this ministry into a vibrant community of believers passionate about worship, the Word, and winning souls for the Kingdom. Our doors are open to all who seek the living God.
            </p>
            <p className="text-taupe leading-relaxed">
              Our mission is to make disciples of all nations, baptizing them in the name of the Father, Son, and Holy Spirit. We are committed to raising leaders, strengthening families, and transforming Guntur through the power of the Gospel.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-gold/10 bg-gradient-to-br from-gold/[0.03] to-ink-light/50 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-28 h-28 mx-auto mb-6 rounded-full border border-gold/15 flex items-center justify-center">
                    <svg className="w-14 h-14 text-gold/30" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="12" y="2" width="4" height="24" rx="1" />
                      <rect x="6" y="12" width="16" height="4" rx="1" />
                    </svg>
                  </div>
                  <p className="text-gold/40 text-sm italic">Since 2012</p>
                  <p className="text-taupe-dark/50 text-xs mt-1">Sarada Colony, Guntur</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-ink/80 to-transparent" />
            </div>

            <div className="p-6 rounded-xl border border-gold/10 bg-ink-light/40">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <p className="text-gold font-serif text-lg font-semibold">Pastor G. Vijay Kumar</p>
                  <p className="text-taupe text-xs">Founder & Senior Pastor</p>
                </div>
              </div>
              <p className="text-taupe text-sm leading-relaxed">
                A man of prayer and faith, Pastor Vijay Kumar has dedicated his life to sharing the Gospel. His vision is to see Guntur transformed by the love of Jesus Christ — one soul at a time.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 rounded-xl border border-gold/10 bg-ink-light/30 hover:bg-gold/[0.02] hover:border-gold/20 transition-all duration-500"
            >
              <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                {v.icon}
              </div>
              <h3 className="text-parchment font-semibold text-sm mb-1">{v.title}</h3>
              <p className="text-gold/50 text-[10px] uppercase tracking-wider mb-3">{v.verse}</p>
              <p className="text-taupe text-xs leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
