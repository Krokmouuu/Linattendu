import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Gallery />
      <Pricing />
      <Contact />
      <Footer />
      <Toaster position="top-center" theme="dark" />
    </div>
  );
}
