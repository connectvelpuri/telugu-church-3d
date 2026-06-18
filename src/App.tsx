import { useEffect, useRef, Suspense, lazy } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const ChurchScene = lazy(() => import("./components/ChurchScene"));

function App() {
  const { scrollYProgress } = useScroll();
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = document.querySelector('title');
    if (el) el.textContent = "సీయోను సంఘం | Zion Church";
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-screen bg-navy overflow-hidden">
      <motion.div
        className="fixed inset-0 z-0"
        style={{ opacity: bgOpacity }}
      >
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center bg-navy">
            <div className="text-gold text-lg font-semibold animate-pulse">
              దేవుని మహిమ...
            </div>
          </div>
        }>
          <ChurchScene />
        </Suspense>
      </motion.div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
