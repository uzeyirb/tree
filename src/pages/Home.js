import React from 'react';

//import Cards from '../components/Cards';
import Cards from '../components/Cards/Cards';
import MainSection from '../components/Section/MainSection';
import Footer from '../components/UI/Footer';

function Home() {
  return (
    <>
      <MainSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
