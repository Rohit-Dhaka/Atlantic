import React,{useEffect} from "react";
import './App.css';
import './assets/css/root.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ApprovalsSection from './components/ApprovalsSection';
import BlogsSection from './components/BlogsSection';
import HeroSection from './components/HeroSection';
import LubricantsSection from './components/LubricantsSection';
import NumberSection from './components/NumberSection';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  

  
  return (
   <div>
    <HeroSection/>
    <LubricantsSection />
    <ApprovalsSection/>
    <NumberSection/>
    <BlogsSection/>
    
   </div>
  );
}

export default App;
