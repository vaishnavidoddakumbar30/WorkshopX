export default function WorkshopCard() {
  return (
    <section className="py-24 px-6 w-full">

      <div className="max-w-5xl mx-auto">

        <div className="relative rounded-[40px] overflow-hidden border border-cyan-500/20 bg-white/5 backdrop-blur-2xl p-10 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,255,255,0.2)] transition-all duration-500">

          {/* Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none" />

          <div className="relative z-10 text-center">

            {/* Tag */}
            <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 text-sm">
              Featured Workshop
            </span>

            {/* Title */}
            <h2 className="mt-6 text-3xl md:text-5xl font-black">
              AI + Cyber Security Summit
            </h2>

            {/* Description */}
            <p className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Join futuristic workshops focused on AI engineering,
              cloud computing, cyber security and immersive innovation experiences.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">

              <span className="px-4 py-2 rounded-full bg-pink-500/20 text-pink-400 text-sm">
                AI
              </span>

              <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 text-sm">
                Cloud
              </span>

              <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm">
                Security
              </span>

            </div>

            {/* CTA */}
            <a
              href="#register"
              className="inline-block mt-10 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-bold hover:scale-105 transition-all duration-300"
            >
              Join Now 🚀
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}