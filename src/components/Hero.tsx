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
  {
    text: "The Lord bless you and keep you; the Lord make His face shine upon you.",
    ref: "Numbers 6:24-25",
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
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/90 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-burgundy/[0.02] via-transparent to-burgundy/[0.02] pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gold/15 bg-gold/[0.04] text-gold text-xs tracking-widest uppercase mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-taupe/60 mx-1">✝</span>
            Established 2012 · Guntur
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold leading-[1.1] mb-6"
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
          className="text-lg sm:text-xl text-taupe font-light max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          A dwelling place for His glory — walking in the light of His presence, 
          sharing the love of Christ with Guntur and beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex items-center justify-center gap-4 text-taupe/50 text-sm mb-12"
        >
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gold/60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            <span>Guntur, Andhra Pradesh</span>
          </span>
          <span className="text-gold/30">|</span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gold/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>Sun 6AM · 8AM · 7PM</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
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
            className="px-8 py-3.5 border border-gold/25 text-gold rounded-xl hover:bg-gold/[0.04] transition-colors duration-300"
          >
            Worship Times
          </motion.a>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={verseIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto px-8 py-7 rounded-2xl border border-gold/10 bg-ink-light/60 backdrop-blur-sm"
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl text-gold/30 font-serif leading-none">"</span>
              <div>
                <p className="text-lg sm:text-xl text-parchment/85 font-serif italic leading-relaxed mb-3">
                  {verses[verseIdx].text}
                </p>
                <p className="text-sm text-gold/70 font-semibold">
                  — {verses[verseIdx].ref}
                </p>
              </div>
              <span className="text-3xl text-gold/30 font-serif leading-none self-end">"</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="scroll-indicator w-6 h-10 rounded-full border border-gold/20 flex items-start justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
        </div>
      </motion.div>
    </section>
  );
}
