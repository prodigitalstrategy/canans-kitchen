import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import { SEO } from "./components/SEO";
import { StructuredData } from "./components/StructuredData";
import { Header } from "./components/Header/Header";
import { useOrderModal } from "./components/Menu/OrderModalWrapper";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Story } from "./components/About/Story";
import { Gallery } from "./components/Gallery";
import { Menu } from "./components/Menu/Menu";
import { MenuItemDetail } from "./components/Menu/MenuItemDetail";
import { Catering } from "./components/Catering/Catering";
import { CateringItemDetail } from "./components/Catering/CateringItemDetail";
import { Blog } from "./components/Blog/Blog";
import { BlogPost } from "./components/Blog/BlogPost";
import { Reviews } from "./components/Reviews/Reviews";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer/Footer";
import { MobileOrderBar } from "./components/MobileOrderBar";
import { Privacy } from "./pages/Privacy";
import { CateringPage } from "./pages/CateringPage";
import { PageLayout } from "./components/Layout/PageLayout";

import React, { useRef, useEffect, useState } from "react";

function HomePage({ heroRef }: { heroRef: React.RefObject<HTMLDivElement> }) {
  return (
    <>
      <div ref={heroRef} id="hero-observe">
        <Hero />
      </div>
      <Features />
      <Story />
      <Gallery />
      <Menu />
      <Catering />
      <Blog />
      <Reviews />
      <Contact />
    </>
  );
}

export default function App() {
  const { openModal, modal } = useOrderModal();
  const heroRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const [showOrderBar, setShowOrderBar] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isMobile = () => window.innerWidth < 768;
    if (!isMobile()) {
      setShowOrderBar(false);
      setFooterVisible(false);
      return;
    }
    const hero = heroRef.current;
    const footer = footerRef.current;
    if (!hero || !footer) return;
    let heroOut = false;
    let footerIn = false;
    const update = () => setShowOrderBar(heroOut && !footerIn);
    const heroObserver = new window.IntersectionObserver(
      ([entry]) => {
        heroOut = !entry.isIntersecting;
        update();
      },
      { threshold: 0.1 }
    );
    const footerObserver = new window.IntersectionObserver(
      ([entry]) => {
        footerIn = entry.isIntersecting;
        setFooterVisible(footerIn);
        update();
      },
      { threshold: 0.1 }
    );
    heroObserver.observe(hero);
    footerObserver.observe(footer);
    return () => {
      heroObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  return (
    <HelmetProvider>
      <SEO />
      <StructuredData />
      <Router>
        <ScrollToTop />
        <div className="min-h-screen">
          <Header openOrderModal={openModal} />
          <div className="pt-20 md:pt-28">
            <PageLayout>
              <Routes>
                <Route path="/" element={<HomePage heroRef={heroRef} />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/menu/:slug" element={<MenuItemDetail />} />
                <Route path="/catering" element={<CateringPage />} />
                <Route path="/catering/:id" element={<CateringItemDetail />} />
                <Route path="/privacy" element={<Privacy />} />
              </Routes>
              {modal}
            </PageLayout>
            <MobileOrderBar openOrderModal={openModal} show={showOrderBar} />
          </div>
          <Footer ref={footerRef} />
        </div>
      </Router>
    </HelmetProvider>
  );
}
