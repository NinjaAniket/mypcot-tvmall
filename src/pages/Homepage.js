import React from 'react';
import Header from '../components/Header/Header';
import './Homepage.css';
import Topcategories from '../components/TopCategories/Topcategories';
import NewProduct from '../components/NewProduct/NewProduct';

export default function Homepage() {
  return (
    <div>
      <Header />
      <Topcategories />
      <NewProduct />
    </div>
  );
}
