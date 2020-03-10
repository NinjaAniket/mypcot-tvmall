import React from 'react';
import Header from '../components/Header/Header';
import './Homepage.css';
import Topcategories from '../components/TopCategories/Topcategories';

export default function Homepage() {
  return (
    <div>
      <Header />
      <div className="content-section">
        <Topcategories />
      </div>
    </div>
  );
}
