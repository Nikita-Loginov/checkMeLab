import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import Header from './pages/Header';
import Hero from './pages/Hero';
import Technology from './pages/Technology';
import ForWho from './pages/ForWho';
import PersonalPlans from './pages/PersonalPlans';
import Services from './pages/Services';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import VIPProducts from './pages/VIPProducts';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import ContactModal from './pages/ContactModal';
import Policy from './pages/Policy';

function App() {
  return (
    <Router>
      <ModalProvider>
        <div className="App min-h-screen bg-light">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Technology />
                <ForWho />
                <PersonalPlans />
                <Services />
                <HowItWorks />
                <Pricing />
                <VIPProducts />
                <Contact />
              </>
            } />
            <Route path="/policy" element={<Policy />} />
          </Routes>
          <Footer />
          <ContactModal />
        </div>
      </ModalProvider>
    </Router>
  );
}

export default App;
