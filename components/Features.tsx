import {
  Cpu,
  ShieldCheck,
  Ticket,
  Sparkles,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Cpu,
      title: "Future Technologies",
      description: "Explore AI, Cloud, Robotics and modern innovations.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Registration",
      description: "Advanced registration and QR verification system.",
    },
    {
      icon: Ticket,
      title: "Digital Event Pass",
      description: "Get futuristic QR-powered downloadable passes.",
    },
    {
      icon: Sparkles,
      title: "Immersive Experience",
      description: "Modern UI, live interactions and premium visuals.",
    },
  ];

  return (
    <section className="py-24 px-6 w-full">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
          Why Attend?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl flex flex-col items-center text-center hover:scale-105 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] transition-all duration-500"
              >

                <Icon className="w-12 h-12 text-cyan-400" />

                <h3 className="mt-6 text-xl md:text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-400 text-sm md:text-base">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}