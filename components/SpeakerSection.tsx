import Image from "next/image";

export default function SpeakerSection() {
  const speakers = [
    {
      name: "Alex Carter",
      role: "AI Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      name: "Sophia Lee",
      role: "Cloud Architect",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      name: "Daniel Kim",
      role: "Cyber Security Expert",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    },
  ];

  return (
    <section id="speakers" className="py-24 px-6 w-full">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
          Featured Speakers
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] transition-all duration-500"
            >

              {/* Image */}
              <div className="relative w-full h-72">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold">
                  {speaker.name}
                </h3>

                <p className="text-cyan-400 mt-2 text-sm md:text-base">
                  {speaker.role}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}