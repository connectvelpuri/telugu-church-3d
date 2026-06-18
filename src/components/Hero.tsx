import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const verses = [
  {
    text: "The Lord is my shepherd; I shall not want.",
    ref: "Psalm 23:1",
  },
  {
    text: "For God so loved the world, that He gave His only begotten Son.",
    ref: "John 3:16",
  },
  {
    text: "I can do all things through Christ who strengthens me.",
    ref: "Philippians 4:13",
  },
  {
    text: "Be still, and know that I am God.",
    ref: "Psalm 46:10",
  },
];

export default function Hero() {
  const [verseIdx, setVerseIdx] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => {
      setVerseIdx((prev) => (prev + 1) % verses.length);
    }, 5000);
    return () => clearInterval(iv);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-ink/90 pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/15 bg-gold/5 text-gold text-xs tracking-widest uppercase mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Established 2012 · Guntur
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-6"
        >
          <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
            Shekinah
          </span>
          <br />
          <span className="text-parchment">Ministries</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-lg sm:text-xl text-taupe font-light max-w-xl mx-auto mb-12"
        >
          Walking in the light of His presence, sharing the love of Christ with Guntur and beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            onClick={scrollToAbout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 bg-gradient-to-r from-gold to-gold-dark text-ink font-semibold rounded-xl shadow-2xl shadow-gold/15 hover:shadow-gold/30 transition-shadow duration-300"
          >
            Learn More
          </motion.button>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 border border-gold/25 text-gold rounded-xl hover:bg-gold/5 transition-colors duration-300"
          >
            Our Services
          </motion.a>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={verseIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto px-6 py-6 rounded-2xl border border-gold/10 bg-ink-light/60 backdrop-blur-sm"
          >
            <p className="text-lg sm:text-xl text-parchment/90 font-serif italic leading-relaxed mb-3">
              &ldquo;{verses[verseIdx].text}&rdquo;
            </p>
            <p className="text-sm text-gold/70 font-semibold">
              — {verses[verseIdx].ref}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gold/25 flex items-start justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
