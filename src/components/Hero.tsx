import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const verses = [
  {
    text: "నేను మీతో ఉన్నాను... భయపడకండి.",
    ref: "యెషయా 41:10",
    en: "I am with you... do not fear.",
  },
  {
    text: "దేవుడు ప్రేమ స్వరూపి.",
    ref: "1 యోహాను 4:8",
    en: "God is love.",
  },
  {
    text: "విశ్వాసమే ఆశించిన వాటికి నిశ్చయత్వము.",
    ref: "హెబ్రీయులు 11:1",
    en: "Faith is the substance of things hoped for.",
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
      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy/80 pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 text-gold text-xs tracking-widest uppercase mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            స్వాగతం · Welcome
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
            సీయోను సంఘం
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-lg sm:text-xl md:text-2xl text-ecru/60 font-light mb-4 max-w-2xl mx-auto"
        >
          వెలుగు · నీతి · శాంతి
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-base text-ecru/40 max-w-xl mx-auto mb-12"
        >
          Light · Righteousness · Peace
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
            className="px-8 py-3.5 bg-gradient-to-r from-gold to-gold-dark text-navy font-semibold rounded-xl shadow-2xl shadow-gold/20 hover:shadow-gold/40 transition-shadow duration-300"
          >
            మరింత తెలుసుకోండి
          </motion.button>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 border border-gold/30 text-gold rounded-xl hover:bg-gold/5 transition-colors duration-300"
          >
            మా సేవలు
          </motion.a>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={verseIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto px-6 py-6 rounded-2xl border border-gold/10 bg-navy/40 backdrop-blur-sm"
          >
            <p className="text-lg sm:text-xl text-ecru/90 font-medium italic leading-relaxed mb-3">
              &ldquo;{verses[verseIdx].text}&rdquo;
            </p>
            <p className="text-sm text-gold/70 font-semibold">
              — {verses[verseIdx].ref}
            </p>
            <p className="text-xs text-ecru/40 mt-1">
              {verses[verseIdx].en}
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
          className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-start justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
