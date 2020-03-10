import React, { useEffect, useState } from 'react';
import './Header.css';

import { Carousel } from 'react-bootstrap';
import Loader from '../Loader/Loader';

import axios from 'axios';

const Header = () => {
  const [isLoading, setLoading] = useState(false);
  const [bannerImages, setBannerImages] = useState([]);

  const apiUrl = 'http://demo7240682.mockable.io/banner-images';
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${apiUrl}`);
      setBannerImages(result.data);
    };
    fetchData();

    setTimeout(() => {
      setLoading(true);
    }, 3000);
    if (bannerImages.length >= 0) {
      setLoading(true);
    }
  }, []);

  return (
    <>
      <div className="top-content">
        <div className="text-section">
          <p className="info-text">Straight to your home</p>
          <p className="info-text">8976893385</p>
          <img
            src={require('../../assets/logo.png')}
            alt=""
            className="info-text"
          />
        </div>
      </div>
      <header className="header">
        <img src={require('../../assets/logo.png')} alt="" className="logo" />

        <div className="nav-options">
          <form action="#" className="search">
            <input
              type="text"
              className="search__input"
              placeholder="Search  for products"
            />
            <button className="search__btn">
              <i className="fas fa-search search__icon"></i>
            </button>
          </form>
          <nav className="user">
            <div className="user__icon-box">
              <i className="far fa-heart  user__icon"></i>
              <span className="user__text">Wishlist</span>
              <span className="vertical-line">|</span>
            </div>

            <div className="user__icon-box">
              <i className="fas fa-shopping-cart  user__icon"></i>
              <span className="user__text">My Cart</span>
              <span className="vertical-line">|</span>
            </div>

            <div className="user__icon-box">
              <i className="far fa-user-circle  user__icon"></i>
            </div>
          </nav>
        </div>
      </header>
      <div className="menu-container">
        <ul className="menu">
          <li className="menu-links">Home & kitchen</li>
          <li className="menu-links">Beauty & fashion</li>
          <li className="menu-links">Jewellery</li>
          <li className="menu-links">Health & Fitness</li>
          <li className="menu-links">Diy & Technology</li>
          <li className="menu-links">Toys</li>
          <li className="menu-links">clearance</li>
        </ul>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <Carousel className="banner-carousel">
          {bannerImages.map(images => (
            <Carousel.Item key={images.id}>
              <img
                src={images.imageUri}
                alt={images.imageUri}
                className="carousel-image"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
  );
};
export default Header;
