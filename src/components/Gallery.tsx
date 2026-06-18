import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { id: 1, te: "సంఘం బాప్టిజం", en: "Church Baptism", color: "from-amber-600/30 to-amber-900/30" },
  { id: 2, te: "క్రిస్మస్ వేడుక", en: "Christmas Celebration", color: "from-red-600/30 to-red-900/30" },
  { id: 3, te: "యువత సమావేశం", en: "Youth Gathering", color: "from-emerald-600/30 to-emerald-900/30" },
  { id: 4, te: "వివాహ వేడుక", en: "Wedding Ceremony", color: "from-pink-600/30 to-pink-900/30" },
  { id: 5, te: "సంఘం సహాయ కార్యక్రమం", en: "Community Service", color: "from-blue-600/30 to-blue-900/30" },
  { id: 6, te: "ఈస్టర్ వేడుక", en: "Easter Celebration", color: "from-yellow-600/30 to-yellow-900/30" },
];

const categories = ["అన్నీ", "వేడుకలు", "సమావేశాలు", "సేవ"];

export default function Gallery() {
  const [active, setActive] = useState("అన్నీ");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filtered = active === "అన్నీ" ? images : images;

  return (
    <section id="gallery" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-gold text-sm tracking-widest uppercase mb-4">
            గ్యాలరీ · Gallery
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-ecru mb-4">
            మా క్షణాలు
          </h2>
          <p className="text-lg text-ecru/40 font-light">Our Moments</p>
          <div className="w-16 h-0.5 bg-gold/50 mx-auto mt-6" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                active === cat
                  ? "bg-gold text-navy font-semibold"
                  : "bg-navy-light/50 text-ecru/60 border border-gold/10 hover:border-gold/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((img, i) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onClick={() => setSelectedId(img.id)}
              className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer group bg-gradient-to-br ${img.color}`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full border-2 border-white/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="text-white font-medium text-sm">{img.te}</p>
                  <p className="text-white/50 text-xs">{img.en}</p>
                </div>
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
              <div className={`aspect-video rounded-2xl bg-gradient-to-br ${images.find(i => i.id === selectedId)?.color} flex items-center justify-center border border-gold/20`}>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-white/20 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                  <p className="text-white text-xl font-semibold">{images.find(i => i.id === selectedId)?.te}</p>
                  <p className="text-white/50">{images.find(i => i.id === selectedId)?.en}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedId(null)}
                className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gold text-navy font-bold flex items-center justify-center hover:bg-gold-light transition-colors"
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
