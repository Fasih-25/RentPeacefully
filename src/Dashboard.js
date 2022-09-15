import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import FirstSection from './Components/FirstSection';
import SecondSection from './Components/SecondSection';
import ThirdSection from './Components/ThirdSection';
import NavCenter from './Components/NavCenter';

export default function Dashboard() {
  return (
    <div >
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <NavCenter />
      <Footer />
    </div>
  )
}
