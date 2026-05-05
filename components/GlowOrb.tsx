export default function GlowOrb() {
  return (
    <>
      {/* Top Left Orb */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none animate-pulse" />

      {/* Bottom Right Orb */}
      <div className="fixed bottom-20 right-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full pointer-events-none animate-pulse" />

      {/* Center Soft Glow */}
      <div className="fixed top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 blur-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none" />
    </>
  );
}