export default function Agenda() {
  const agenda = [
    { time: "09:00 AM", title: "Opening Ceremony" },
    { time: "10:00 AM", title: "AI & Future Tech" },
    { time: "12:00 PM", title: "Cyber Security Workshop" },
    { time: "02:00 PM", title: "Cloud Computing Session" },
  ];

  return (
    <section id="agenda" className="py-24 px-6 w-full">
      <div className="max-w-5xl mx-auto">
        
        <h2 className="text-4xl md:text-5xl font-black text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Workshop Agenda
        </h2>

        <div className="mt-16 space-y-6">
          {agenda.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-white/5 border border-purple-500/20 backdrop-blur-xl flex flex-col md:flex-row md:items-center md:justify-between gap-3 hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-xl md:text-2xl font-bold text-cyan-400">
                {item.time}
              </h3>

              <p className="text-base md:text-lg text-gray-300">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}