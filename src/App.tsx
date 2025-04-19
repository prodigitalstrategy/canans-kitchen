import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { SEO } from "./components/SEO";
import { StructuredData } from "./components/StructuredData";
import { Header } from "./components/Header/Header";
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
import { Footer } from "./components/Footer/Footer";
import { MobileOrderBar } from "./components/MobileOrderBar";
import { Privacy } from "./pages/Privacy";
import { CateringPage } from "./pages/CateringPage";
import { PageLayout } from "./components/Layout/PageLayout";

function HomePage() {
  return (
    <>
      <Hero />
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
  return (
    <HelmetProvider>
      <SEO />
      <StructuredData />
      <Router>
        <div className="min-h-screen">
          <Header />
          <div className="pt-20 md:pt-28">
            <PageLayout>
              <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/menu/:slug" element={<MenuItemDetail />} />
              <Route path="/catering" element={<CateringPage />} />
              <Route path="/catering/:id" element={<CateringItemDetail />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
            </PageLayout>
          </div>
          <MobileOrderBar />
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
