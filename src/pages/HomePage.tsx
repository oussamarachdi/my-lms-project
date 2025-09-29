import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import Editions from "../components/home/Editions";
import WhyAttend from "../components/home/WhyAttend";
import FAQ from "../components/home/FAQ";
import BottomCTA from "../components/home/BottomCTA";


export default function Home() {
    return (
      <div className="min-h-screen bg-white text-gray-900 flex flex-col">
        <Header />
          <main className="flex-1">
          <Hero />
          <Editions />
          <WhyAttend />
          <FAQ />
          <BottomCTA />
          </main>
        <Footer />
      </div>
);
}