import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import SpeakerSection from "@/components/SpeakerSection";
import Agenda from "@/components/Agenda";
import RegistrationForm from "@/components/RegistrationForm";
import Features from "@/components/Features";
import GlowOrb from "@/components/GlowOrb";
import Footer from "@/components/Footer";
import WorkshopCard from "@/components/WorkshopCard";
import Leaderboard from "@/components/Leaderboard"

export default function MainPage() {
  return (
    <>
      <GlowOrb />

      <section className="flex flex-col items-center text-center gap-20 w-full max-w-6xl">
        <Hero />
        <Stats />
        <Features />
        <WorkshopCard />
        <Leaderboard />
        <SpeakerSection />
        <Agenda />
        <RegistrationForm />
      </section>

      <Footer />
    </>
  );
}