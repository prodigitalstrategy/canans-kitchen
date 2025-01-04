import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Story } from "./components/About/Story";
import { Gallery } from "./components/Gallery";
import { Menu } from "./components/Menu/Menu";
import { Catering } from "./components/Catering/Catering";
import { Blog } from "./components/Blog/Blog";
import { BlogPost } from "./components/Blog/BlogPost";
import { Reviews } from "./components/Reviews/Reviews";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer/Footer";

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
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog fullWidth />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
