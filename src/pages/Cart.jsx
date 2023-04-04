import React from 'react';
import Header from '../components/Header';
import Breadcrumb from '../smartcomponent/Breadcrumb/Index';
import ShoppingCart from '../components/Cart/ShoppingCart';
import ShippingDetails from '../components/Cart/ShippingDetails';
// import BrowseRoom from '../components/Homepage/BrowseRoom';
// import Clients from '../components/Clients';
import Sitemap from '../components/Sitemap';
import Footer from '../components/Footer';

function Homepage() {
  return (
    <>
      <Header />
      <Breadcrumb
        list={[
          { url: '/', name: 'Home' },
          { url: '/cart', name: 'Shopping Cart' },
        ]}
      />

      <section class="md:py-16">
        <div class="container mx-auto px-4">
          <div class="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>
      <Sitemap />
      <Footer />
    </>
  );
}

export default Homepage;
