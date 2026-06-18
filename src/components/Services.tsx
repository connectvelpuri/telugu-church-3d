import { motion } from "framer-motion";

const services = [
  {
    day: "Sunday",
    time: "6:00 — 7:00 AM",
    title: "Morning Worship",
    desc: "Begin your Sunday in the presence of God with early morning praise, prayer, and a devotional message.",
    border: "border-gold/20",
    glow: "shadow-gold/5",
  },
  {
    day: "Sunday",
    time: "8:00 — 10:00 AM",
    title: "Main Worship Service",
    desc: "Our flagship gathering with uplifting worship, powerful Word ministry, fellowship, and the presence of God.",
    border: "border-gold/25",
    glow: "shadow-gold/10",
  },
  {
    day: "Sunday",
    time: "7:00 — 8:30 PM",
    title: "Evening Service",
    desc: "A peaceful evening service for the community — a time to unwind, worship, and encounter God's love.",
    border: "border-amber-500/15",
    glow: "shadow-amber-500/5",
  },
  {
    day: "Wednesday",
    time: "6:00 — 7:30 PM",
    title: "Prayer Meeting",
    desc: "Mid-week intercession. We gather to pray for our families, our city, and our nation with one heart.",
    border: "border-blue-500/15",
    glow: "shadow-blue-500/5",
  },
];

const schedule = [
  { label: "Praise & Worship", time: "6:00 AM" },
  { label: "Main Service", time: "8:00 AM" },
  { label: "Evening Service", time: "7:00 PM" },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink-light/15 to-ink/50 pointer-events-none" />

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
            Worship Times
            <span className="w-8 h-px bg-gold/40" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-parchment mb-4 leading-tight">
            Come, Worship<br />With Us
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {services.map((s, i) => (
            <motion.div
              key={`${s.day}-${s.time}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`group relative p-8 rounded-2xl border ${s.border} bg-ink-light/20 hover:bg-ink-light/40 backdrop-blur-sm transition-all duration-500 shadow-lg ${s.glow}`}
            >
              <div className="absolute top-4 right-6 text-6xl text-gold/[0.04] font-serif select-none pointer-events-none">
                ✝
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-[10px] font-semibold uppercase tracking-widest">
                  {s.day}
                </span>
                <span className="text-gold/60 text-sm font-mono">{s.time}</span>
              </div>
              <h3 className="text-xl text-parchment font-serif font-semibold mb-3">{s.title}</h3>
              <p className="text-taupe text-sm leading-relaxed max-w-lg">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto"
        >
          <div className="p-8 rounded-2xl border border-gold/10 bg-ink-light/40 backdrop-blur-sm">
            <div className="text-center mb-6">
              <p className="text-gold/60 text-xs uppercase tracking-widest mb-1">Sunday Schedule</p>
              <p className="text-parchment font-serif text-xl font-semibold">Join Us This Sunday</p>
            </div>
            <div className="space-y-3">
              {schedule.map((item) => (
                <div
                  key={item.time}
                  className="flex items-center justify-between px-5 py-3.5 rounded-xl bg-gold/[0.03] border border-gold/5 hover:border-gold/15 transition-colors"
                >
                  <span className="text-parchment/80 text-sm font-medium">{item.label}</span>
                  <span className="text-gold text-sm font-mono font-semibold">{item.time}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gold/10 text-center">
              <p className="text-taupe text-xs">Sarada Colony, Guntur — All are welcome</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
