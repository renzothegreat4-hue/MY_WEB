import LoadingScreen from '@/components/LoadingScreen';
import BackgroundEffects from '@/components/BackgroundEffects';
import CursorGlow from '@/components/CursorGlow';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import TechJourney from '@/sections/TechJourney';
import Projects from '@/sections/Projects';
import Interests from '@/sections/Interests';
import Favorites from '@/sections/Favorites';
import FunFacts from '@/sections/FunFacts';
import Goals from '@/sections/Goals';
import Contact from '@/sections/Contact';

function App() {
  return (
    <>
      {/* Loading animation on first load */}
      <LoadingScreen />

      {/* Fixed decorative elements */}
      <BackgroundEffects />
      <CursorGlow />
      <ScrollProgress />

      {/* Floating navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <TechJourney />
        <Projects />
        <Interests />
        <Favorites />
        <FunFacts />
        <Goals />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating back-to-top button */}
      <BackToTop />
    </>
  );
}

export default App;
