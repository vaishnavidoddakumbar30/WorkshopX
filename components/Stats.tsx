'use client'

import { motion } from "framer-motion";

export default function Stats() {

  const stats = [
    { title: "500+", subtitle: "Participants" },
    { title: "20+", subtitle: "Speakers" },
    { title: "15", subtitle: "Workshops" },
    { title: "100%", subtitle: "Interactive" },
  ];

  return (
    <section className="py-20 px-6 w-full">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">

        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 border border-cyan-500/20 backdrop-blur-xl hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.2)] transition-all duration-300"
          >

            <h2 className="text-4xl md:text-5xl font-black text-cyan-400">
              {item.title}
            </h2>

            <p className="mt-4 text-gray-300 text-sm md:text-lg">
              {item.subtitle}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
}