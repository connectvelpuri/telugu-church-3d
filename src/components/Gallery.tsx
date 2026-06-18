import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { id: 1, title: "Baptism Service", color: "from-gold/20 to-amber-900/20" },
  { id: 2, title: "Christmas Celebration", color: "from-red-600/20 to-red-900/20" },
  { id: 3, title: "Youth Gathering", color: "from-emerald-600/20 to-emerald-900/20" },
  { id: 4, title: "Worship Night", color: "from-blue-600/20 to-blue-900/20" },
  { id: 5, title: "Community Outreach", color: "from-purple-600/20 to-purple-900/20" },
  { id: 6, title: "Easter Service", color: "from-yellow-600/20 to-yellow-900/20" },
];

const categories = ["All", "Worship", "Gatherings", "Outreach"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 to-ink pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold text-sm tracking-widest uppercase mb-4">
            Gallery
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-parchment mb-4">
            Our Moments
          </h2>
          <div className="w-12 h-px bg-gold/50 mx-auto mt-6" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                active === cat
                  ? "bg-gold text-ink font-semibold"
                  : "bg-ink-light/50 text-taupe border border-gold/10 hover:border-gold/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onClick={() => setSelectedId(img.id)}
              className={`relative aspect-square rounded-2xl overflow-hidden cursor-pointer group bg-gradient-to-br ${img.color}`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-14 h-14 mx-auto mb-3 rounded-full border border-white/15 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium text-sm">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full"
            >
              <div className={`aspect-video rounded-2xl bg-gradient-to-br ${images.find(i => i.id === selectedId)?.color} flex items-center justify-center border border-gold/15`}>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full border border-white/15 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                  <p className="text-white text-xl font-semibold">{images.find(i => i.id === selectedId)?.title}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedId(null)}
                className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gold text-ink font-bold flex items-center justify-center hover:bg-gold-light transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
