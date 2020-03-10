import React, { useEffect, useState } from 'react';
import './Header.css';
import { Form, FormControl, Carousel } from 'react-bootstrap';
const Header = () => {
  const [isLoading, setLoading] = useState(false);
  const [bannerImages, setBannerImages] = useState([]);

  const apiUrl = 'http://demo7240682.mockable.io/hardtrek';
  useEffect(() => {
    fetch(`${apiUrl}`)
      .then(res => res.json())
      .then(response => {
        // console.log(response.map(item => item.imageUri));
        let data = response.map(item => item.imageUri);
        setBannerImages(data);
        console.log(bannerImages);
      });
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
      <Carousel className="banner-carousel">
        <Carousel.Item>
          <img
            src="https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="First slide"
            className="carousel-image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Third slide"
            className="carousel-image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default Header;
