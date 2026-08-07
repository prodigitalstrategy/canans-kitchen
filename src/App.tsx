import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Story } from "./components/About/Story";
import { Gallery } from "./components/Gallery";
import { Menu } from "./components/Menu/Menu";
import { Drinks } from "./components/Menu/Drinks";
import { MenuItemDetail } from "./components/Menu/MenuItemDetail";
import { Catering } from "./components/Catering/Catering";
import { CateringItemDetail } from "./components/Catering/CateringItemDetail";
import { Blog } from "./components/Blog/Blog";
import { BlogPost } from "./components/Blog/BlogPost";
import { Reviews } from "./components/Reviews/Reviews";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer/Footer";
import { Privacy } from "./pages/Privacy";
import { CateringPage } from "./pages/CateringPage";
import { PageLayout } from "./components/Layout/PageLayout";
import { FloatingCTA } from "./components/CTA/FloatingCTA";
import { ScrollManager } from "./components/ScrollManager";
import { MenuStructuredData } from "./components/MenuStructuredData";
import { useSEO } from "./utils/seo";

function HomePage() {
  useSEO(); // homepage defaults
  return (
    <main id="main-content">
      <MenuStructuredData />
      <Hero />
      <Features />
      <Story />
      <Gallery />
      <Menu />
      <Drinks />
      <Catering />
      <Blog />
      <Reviews />
      <Contact />
    </main>
  );
}

function SkipLink() {
  return (
    <a
      href="#main-content"
      className="skip-link"
    >
      Skip to main content
    </a>
  );
}

export default function App() {
  return (
    <Router>
      <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-cream">
        <ScrollManager />
        <SkipLink />
        <Header />
        <Routes>
          {/* Homepage - Hero extends behind header, no top padding */}
          <Route path="/" element={<HomePage />} />
          
          {/* Sub-pages - need top padding for fixed header */}
          <Route path="/blog/:slug" element={<PageLayout><BlogPost /></PageLayout>} />
          <Route path="/menu/:slug" element={<PageLayout><MenuItemDetail /></PageLayout>} />
          <Route path="/catering" element={<PageLayout><CateringPage /></PageLayout>} />
          <Route path="/catering/:id" element={<PageLayout><CateringItemDetail /></PageLayout>} />
          <Route path="/privacy" element={<PageLayout><Privacy /></PageLayout>} />
        </Routes>
        <Footer />
        <FloatingCTA />
      </div>
      </MotionConfig>
    </Router>
  );
}
