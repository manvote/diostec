import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import LoadingSpinner from "./components/LoadingSpinner";
import { LanguageProvider } from "./LanguageContext";

// Lazy load components for faster initial load
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/AboutUs"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
