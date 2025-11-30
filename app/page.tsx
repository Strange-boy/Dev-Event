import Hero from "./components/Hero";
import Features from "./components/Features";
import EventList from "./components/EventList";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white selection:bg-blue-500/30">
      <Hero />
      <Features />
      <EventList />
      <Newsletter />
      <Footer />
    </main>
  );
}