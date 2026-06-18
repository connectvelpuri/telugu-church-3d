import { motion } from "framer-motion";

const services = [
  {
    day: "ఆదివారం",
    en: "Sunday",
    time: "ఉదయం 8:00 - 10:00",
    timeEn: "8:00 AM - 10:00 AM",
    title: "ప్రధాన ఆరాధన",
    subtitle: "Main Worship",
    desc: "ప్రతి ఆదివారం మేము కలిసి దేవుని ఆరాధన చేస్తాము. స్తుతి, వాక్కు బోధ, ప్రార్థనతో కూడిన ఆరాధన సమయం.",
    descEn: "Every Sunday we gather for worship with praise, sermon, and prayer.",
    color: "from-gold/20 to-gold/5",
    border: "border-gold/20",
    icon: "✝",
  },
  {
    day: "బుధవారం",
    en: "Wednesday",
    time: "సాయంత్రం 6:00 - 7:30",
    timeEn: "6:00 PM - 7:30 PM",
    title: "ప్రార్థన సభ",
    subtitle: "Prayer Meeting",
    desc: "వారం మధ్యలో మేము కలిసి ప్రార్థన చేస్తాము. మా అవసరాలను దేవుని సముఖంలో పెట్టడానికి ఈ సమయం.",
    descEn: "Mid-week prayer meeting to bring our needs before God.",
    color: "from-blue-500/10 to-blue-500/5",
    border: "border-blue-500/20",
    icon: "🕊",
  },
  {
    day: "శనివారం",
    en: "Saturday",
    time: "ఉదయం 9:00 - 10:30",
    timeEn: "9:00 AM - 10:30 AM",
    title: "యువత సమావేశం",
    subtitle: "Youth Meeting",
    desc: "యువత కోసం ప్రత్యేక సమావేశం. లోతైన వాక్కు అధ్యయనం, చర్చ, స్నేహం.",
    descEn: "Special youth gathering with in-depth Bible study and fellowship.",
    color: "from-emerald-500/10 to-emerald-500/5",
    border: "border-emerald-500/20",
    icon: "🔥",
  },
  {
    day: "శుక్రవారం",
    en: "Friday",
    time: "సాయంత్రం 6:00 - 7:30",
    timeEn: "6:00 PM - 7:30 PM",
    title: "బైబిల్ అధ్యయనం",
    subtitle: "Bible Study",
    desc: "లోతైన బైబిల్ అధ్యయనం ద్వారా దేవుని వాక్కును అర్థం చేసుకోవడం.",
    descEn: "Deep Bible study to understand God's word better.",
    color: "from-purple-500/10 to-purple-500/5",
    border: "border-purple-500/20",
    icon: "📖",
  },
];

const schedule = [
  { time: "8:00 - 8:30", te: "స్తుతి ఆరాధన", en: "Praise & Worship" },
  { time: "8:30 - 9:00", te: "ప్రార్థన", en: "Prayer" },
  { time: "9:00 - 9:45", te: "వాక్కు బోధ", en: "Sermon" },
  { time: "9:45 - 10:00", te: "దానాలు & ఆశీర్వచన", en: "Offering & Benediction" },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy-light/30 to-navy/80 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold text-sm tracking-widest uppercase mb-4">
            మా సేవలు · Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-ecru mb-4">
            ఆరాధన సమయాలు
          </h2>
          <p className="text-lg text-ecru/40 font-light">Worship Times</p>
          <div className="w-16 h-0.5 bg-gold/50 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {services.map((s, i) => (
            <motion.div
              key={s.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative p-6 rounded-xl border ${s.border} bg-gradient-to-br ${s.color} backdrop-blur-sm overflow-hidden`}
            >
              <div className="absolute top-0 right-0 text-6xl opacity-5 select-none pointer-events-none">
                {s.icon}
              </div>
              <div className="text-xs text-gold/60 uppercase tracking-widest mb-1">{s.day}</div>
              <div className="text-[10px] text-ecru/30 mb-3">{s.en}</div>
              <div className="text-sm text-ecru/50 font-light mb-1">{s.time}</div>
              <div className="text-[10px] text-ecru/20 mb-4">{s.timeEn}</div>
              <h3 className="text-lg text-ecru font-semibold mb-1">{s.title}</h3>
              <p className="text-xs text-gold/50 mb-2">{s.subtitle}</p>
              <p className="text-sm text-ecru/60 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto p-6 rounded-xl border border-gold/10 bg-navy-light/40 backdrop-blur-sm"
        >
          <h3 className="text-center text-ecru font-semibold mb-4">
            ఆదివారం ఆరాధన విధానం
          </h3>
          <p className="text-center text-ecru/40 text-xs mb-6">Sunday Service Order</p>
          <div className="space-y-3">
            {schedule.map((item, _i) => (
              <div
                key={item.time}
                className="flex items-center justify-between px-3 py-2 rounded-lg bg-gold/5 border border-gold/5"
              >
                <div>
                  <span className="text-ecru/70 text-sm">{item.te}</span>
                  <span className="text-ecru/30 text-xs block">{item.en}</span>
                </div>
                <span className="text-gold/60 text-sm font-mono">{item.time}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
