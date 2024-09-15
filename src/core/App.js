import { useEffect, useState } from 'react';
import { Footer } from '../features/homepage/Footer';
import { Gallery } from '../features/homepage/Gallery';
import { Headers } from '../features/homepage/Headers';
import { Hero } from '../features/homepage/Hero';
import { Navigations } from '../features/homepage/Navigations';
import { Seo } from '../features/homepage/Seo';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState("osobowe");

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 5);
  
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navigations />
      <Hero />
      <Headers activeTab={activeTab} setActiveTab={setActiveTab} />
      <Gallery activeTab={activeTab} />
      <Seo />
      <Footer />
    </>
  )
};

export default App;