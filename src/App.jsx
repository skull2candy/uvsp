import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';
import PageLoader from './components/PageLoader';

// Pages
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import FeaturedProject from './pages/FeaturedProject';
import Project from './pages/Project';
import ProjectDetail from './pages/ProjectDetail';
import AboutPage from './pages/AboutPage';
import JournalPage from './pages/JournalPage';
import ArticleDetail from './pages/ArticleDetail';
import LeadsDashboard from './pages/LeadsDashboard.jsx';
import NotFound from './pages/NotFound';
import AreaPage from './pages/AreaPage';

// Area Data
const vasantKunjData = {
  areaName: "Vasant Kunj",
  title: "Luxury Builder Floors in Vasant Kunj | UVSP Buildcon",
  description: "Explore ultra-luxury builder floors in Vasant Kunj. 4BHK premium residences crafted by UVSP Buildcon.",
  heroSubtitle: "Experience the pinnacle of luxury living in South Delhi's most prestigious neighborhood.",
  content: [
    { heading: "Why Choose Vasant Kunj?", text: "Vasant Kunj is synonymous with luxury, offering a perfect blend of lush green surroundings, top-tier international schools, and unparalleled connectivity to the airport and Gurgaon." },
    { heading: "Premium Builder Floors", text: "Our independent floors in Vasant Kunj feature stilt parking, private elevators, and bespoke Italian marble interiors. Each floor is designed to maximize natural light and ventilation while ensuring complete privacy." }
  ]
};

const mehrauliData = {
  areaName: "Mehrauli",
  title: "Premium Independent Floors in Mehrauli | UVSP Buildcon",
  description: "Discover bespoke independent builder floors in Mehrauli. Heritage living meets modern luxury.",
  heroSubtitle: "Where centuries of heritage meet contemporary architectural brilliance.",
  content: [
    { heading: "The Heritage Advantage", text: "Mehrauli offers a unique living experience where historic monuments provide a breathtaking backdrop to modern luxury. It's one of the few places in Delhi where nature and history coexist seamlessly." },
    { heading: "Architectural Excellence", text: "UVSP Buildcon’s projects in Mehrauli are designed to respect the local heritage while offering world-class amenities, smart home automation, and earthquake-resistant structures." }
  ]
};

function AnimatedRoutes() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/journal/:id" element={<ArticleDetail />} />
        <Route path="/project/featured" element={<Navigate to="/property/the-crown" replace />} />
        <Route path="/property/:id" element={<ProjectDetail />} />
        <Route path="/portfolio" element={<Project />} />
        <Route path="/admin/leads" element={<LeadsDashboard />} />
        
        {/* SEO Area Landing Pages */}
        <Route path="/builder-floors-vasant-kunj" element={<AreaPage {...vasantKunjData} />} />
        <Route path="/builder-floors-mehrauli" element={<AreaPage {...mehrauliData} />} />
        
        {/* Catch-all route for technical SEO and 404 safety */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <PageLoader />
        <ScrollProgress />
        <CursorGlow />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
        <WhatsAppFloat />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
