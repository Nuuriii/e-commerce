import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Homepage/Hero';
import JustArrived from '../components/Homepage/JustArrived';
import BrowseRoom from '../components/Homepage/BrowseRoom';
import Clients from '../components/Clients';
import Sitemap from '../components/Sitemap';
import Footer from '../components/Footer';
import useScrollAnchor from '../helpers/hooks/useScrollAnchor';

function Homepage() {
  useScrollAnchor();
  return (
    <>
      <Header theme="white" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}

export default Homepage;
