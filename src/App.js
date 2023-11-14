import React from 'react';

// import components
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
// import Brands from './components/Brands/Brands';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BackToTopBtn from './components/BackToTopBtn/BackToTopBtn';


const App = () => {
  return <div className='font-sans'>
    <Header/>
    <Hero/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Services/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    <BackToTopBtn/>
  </div>;
};

export default App;
