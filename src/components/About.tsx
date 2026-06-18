import { motion } from "framer-motion";

const values = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Faith",
    desc: "Rooted in the unshakable foundation of God's Word.",
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
    desc: "A loving family united in Christ across all generations.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Service",
    desc: "Serving our community with the love and compassion of Jesus.",
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
    desc: "Shining the light of Christ in our city and beyond.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/60 to-ink pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-gold text-sm tracking-widest uppercase mb-4">
            About Us
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-parchment mb-4">
            A Dwelling Place for His Glory
          </h2>
          <div className="w-12 h-px bg-gold/50 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-parchment/80 leading-relaxed text-base sm:text-lg">
              <span className="text-gold font-semibold">Shekinah Ministries</span> was founded on December 12, 2012, by Pastor G. Vijay Kumar in Guntur, Andhra Pradesh. The word <span className="italic text-parchment/90">Shekinah</span> refers to the manifest glory of God — His divine presence dwelling among His people.
            </p>
            <p className="text-taupe leading-relaxed">
              From humble beginnings, what started as a small gathering has grown into a vibrant community of believers who are passionate about worship, the Word, and winning souls for the Kingdom of God.
            </p>
            <p className="text-taupe leading-relaxed">
              Our mission is to make disciples of all nations, baptizing them in the name of the Father, Son, and Holy Spirit, and teaching them to observe all that Christ has commanded. We are committed to raising leaders, strengthening families, and transforming our city through the power of the Gospel.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-gold/10 bg-gradient-to-br from-gold/[0.03] to-ink-light/50 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full border border-gold/20 flex items-center justify-center">
                    <svg className="w-12 h-12 text-gold/40" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M16 2L16 30M16 8L28 8M16 16L28 16M16 24L28 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M16 8L4 8M16 16L4 16M16 24L4 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
                    </svg>
                  </div>
                  <p className="text-gold/40 text-sm italic">Since 2012</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-ink/80 to-transparent" />
            </div>

            <div className="mt-6 p-6 rounded-xl border border-gold/10 bg-ink-light/40">
              <p className="text-gold font-serif text-lg font-semibold mb-2">Pastor G. Vijay Kumar</p>
              <p className="text-taupe text-sm leading-relaxed">
                A man of prayer and faith, Pastor Vijay Kumar has dedicated his life to sharing the Gospel and building a church that reflects the glory of God. His vision is to see Guntur transformed by the love of Jesus Christ.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 rounded-xl border border-gold/10 bg-ink-light/30 hover:bg-gold/[0.03] transition-all duration-500"
            >
              <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                {v.icon}
              </div>
              <h3 className="text-parchment font-semibold text-sm mb-2">{v.title}</h3>
              <p className="text-taupe text-xs leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
