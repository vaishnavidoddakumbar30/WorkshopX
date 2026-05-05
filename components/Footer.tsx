export default function Footer() {
  return (
    <footer className="w-full py-12 mt-24 border-t border-white/10 bg-black text-center text-gray-400 relative overflow-hidden">

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-purple-500/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">

        {/* Brand */}
        <h2 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
          WorkshopX
        </h2>

        {/* Tagline */}
        <p className="mt-4 text-sm md:text-base text-gray-400">
          Built for futuristic immersive workshop experiences.
        </p>

        {/* Divider */}
        <div className="mt-6 w-20 h-[2px] bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto rounded-full" />

        {/* Bottom text */}
        <p className="mt-6 text-xs md:text-sm text-gray-500">
          © {new Date().getFullYear()} WorkshopX. All rights reserved.
        </p>

      </div>
    </footer>
  );
}