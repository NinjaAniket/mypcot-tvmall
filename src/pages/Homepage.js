import React from 'react';
import Header from '../components/Header/Header';
import './Homepage.css';
import Topcategories from '../components/TopCategories/Topcategories';
import NewProduct from '../components/NewProduct/NewProduct';
import TodaysDeal from '../components/TodaysDeal/TodaysDeal';
import Streaming from '../components/Streaming/Streaming';
import ShoppingExperience from '../components/ShoppingExperience/ShoppingExperience';
import Footer from '../components/Footer/Footer';
import Test from '../components/test/Test';

export default function Homepage() {
  return (
    <div>
      <Header />
      <Topcategories />
      <NewProduct />
      <Streaming />
      <TodaysDeal />
      <ShoppingExperience />
      <Footer />
    </div>
  );
}
