import { motion } from "framer-motion";

const values = [
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "విశ్వాసం",
    sub: "Faith",
    desc: "దేవుని వాక్కు ఆధారంగా మా విశ్వాసాన్ని నిర్మించుకుంటున్నాము.",
    en: "Building our faith on God's word.",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "కుటుంబం",
    sub: "Family",
    desc: "ఒకరినొకరు ప్రేమించుకునే క్రైస్తవ కుటుంబంగా ఉండటం.",
    en: "Being a loving Christian family.",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "సేవ",
    sub: "Service",
    desc: "సమాజానికి ప్రేమతో సేవ చేయడం మా లక్ష్యం.",
    en: "Serving the community with love.",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12h2a10 10 0 0020 0h2" />
        <path d="M12 2v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M19.07 4.93l-2.83 2.83" />
      </svg>
    ),
    title: "వెలుగు",
    sub: "Light",
    desc: "లోకానికి వెలుగుగా ఉండి యేసును ప్రకటించడం.",
    en: "Being the light of the world.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/80 to-navy pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold text-sm tracking-widest uppercase mb-4">
            మా గురించి · About Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-ecru mb-4">
            దేవుని మహిమ కొరకు
          </h2>
          <p className="text-lg text-ecru/40 font-light">For the glory of God</p>
          <div className="w-16 h-0.5 bg-gold/50 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-ecru/80 leading-relaxed text-base sm:text-lg">
              2020 సంవత్సరంలో స్థాపించబడిన సీయోను సంఘం, యేసుక్రీస్తు సువార్తను ప్రకటించడానికి మరియు సమాజానికి సేవ చేయడానికి అంకితమైన సంఘం.
            </p>
            <p className="text-ecru/60 leading-relaxed">
              మా సంఘంలో ప్రతి ఆదివారం ఆరాధన సమయాలలో దేవుని వాక్కు బోధ, ప్రార్థన, స్తుతి, ఆరాధన ఉంటాయి. పిల్లల నుండి పెద్దల వరకు అందరికీ ఆధ్యాత్మిక ఎదుగుదల కొరకు అవకాశాలు ఉన్నాయి.
            </p>
            <p className="text-ecru/60 leading-relaxed">
              మేము తెలుగు భాషలో ఆరాధన చేస్తాము మరియు దేవుని వాక్కును బోధిస్తాము. మా సంఘం సభ్యులు అన్ని వయసుల వారు మరియు వివిధ నేపథ్యాల నుండి వచ్చిన వారు.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-gold/10 bg-gradient-to-br from-navy-light/50 to-navy/80 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-gold/30 flex items-center justify-center">
                    <svg className="w-10 h-10 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2L12 22M6 10L18 10M6 16L18 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="text-gold/50 text-sm italic">సీయోను సంఘం</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-navy/80 to-transparent" />
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
              className="group relative p-6 rounded-xl border border-gold/10 bg-navy-light/30 hover:bg-gold/5 transition-all duration-500"
            >
              <div className="text-gold mb-3 group-hover:scale-110 transition-transform duration-300">
                {v.icon}
              </div>
              <h3 className="text-ecru font-semibold text-sm mb-1">{v.title}</h3>
              <p className="text-ecru/40 text-[10px] uppercase tracking-wider mb-2">{v.sub}</p>
              <p className="text-ecru/60 text-xs leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
