import React, { useEffect, useState } from 'react';
import './Header.css';

import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import Loader from '../Loader/Loader';
import MegaMenu from '../test/MegaMenu';
const Header = () => {
  const [isLoading, setLoading] = useState(false);
  const [bannerImages, setBannerImages] = useState([]);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const apiUrl = 'http://demo7240682.mockable.io/banner-images';
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`${apiUrl}`);
        setBannerImages(result.data);
        if (bannerImages.length) {
          setLoading(false);
        }
      } catch (err) {
        setLoading(true);
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const [isShown, setIsShown] = useState(false);
  const [inputStyle, setInput] = useState({ display: 'none' });
  const [subStyle, setSubStyle] = useState({
    display: 'none'
  });
  var SubMenuDetailsDiv = [
    'CoreDiv',
    'MultiGymDiv',
    'AerobicMachinesDiv',
    'ExerciseBikesDiv',
    'BumLegsDiv',
    'AccessoriesDiv',
    'BrandsDiv'
  ];
  var MenuDetailsDiv = [
    'HomeKitchenDiv',
    'BeautyFashionDiv',
    'JewelleryDiv',
    'HealthFinessDiv',
    'DIYTechnologyDiv',
    'ToysDiv',
    'ClearanceDiv'
  ];
  var TempList = [];

  function ShowMenu(data) {
    let Id = data;

    const dataId = MenuDetailsDiv.filter(item => item !== Id + 'Div');
    TempList = [];
    TempList = dataId;
    HideMenuDiv(TempList);
    var MainDiv = Id + 'Div';

    if (document.getElementById(MainDiv) != null) {
      setInput({
        display: 'flex'
      });
    }
  }

  function ShowSubMenu(data) {
    var Id = data;
    TempList = [];
    console.log(Id);
    const dataId = SubMenuDetailsDiv.filter(item => item !== Id + 'Div');
    TempList = dataId;
    HideSubMenuDiv(TempList);
    if (document.getElementById(Id + 'Div') != null) {
      document.getElementById(Id + 'Div').style.display = 'flex';
    }
  }

  function HideMenuDiv(TempList) {
    for (var i = 0; i <= TempList.length; i++) {
      if (document.getElementById(TempList[i]) != null) {
        setInput({
          display: 'none'
        });
      }
    }
  }

  function HideSubMenuDiv(TempList) {
    for (var i = 0; i <= TempList.length; i++) {
      if (document.getElementById(TempList[i]) != null) {
        document.getElementById(TempList[i]).style.display = 'none';
      }
    }
  }

  return (
    <>
      <div className="big-container">
        <div className="top-content">
          <div className="text-section">
            <span className="info-text">
              <img
                className="top-bar__icons"
                src={require('../../assets/truck.png')}
                alt="truck"
              />
              Straight to your home
            </span>
            <span className="info-text">
              <img
                className="top-bar__icons"
                src={require('../../assets/phone.png')}
                alt="truck"
              />
              0861000173
            </span>
            <img
              src={require('../../assets/flag.png')}
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
        {/* <div className="menu-container">
        <ul className="menu">
          <li className="menu-links">Home & kitchen</li>
          <li className="menu-links">Beauty & fashion</li>
          <li className="menu-links">Jewellery</li>
          <li className="menu-links">Health & Fitness</li>
          <li className="menu-links">Diy & Technology</li>
          <li className="menu-links">Toys</li>
          <li className="menu-links">clearance</li>
        </ul>
      </div> */}

        {/* <MegaMenu /> */}
        <div className="menu-container">
          <div className="col-md-12 test-container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <nav class="navbar navbar-expand-lg navbar-light">
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse justify-content-center"
                    id="navbarSupportedContent"
                  >
                    <ul className="nav">
                      <li className="nav-item active">
                        <a
                          class="nav-link"
                          href="#"
                          id="HomeKitchen"
                          onMouseOver={e => ShowMenu(e.currentTarget.id)}
                        >
                          HOME & KITCHEN
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          BEAUTY & FASHION
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="#"
                          id="Jewellery"
                          onMouseOver={e => ShowMenu(e.currentTarget.id)}
                        >
                          JEWELLERY
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          id="HealthFiness"
                          href="#"
                          onMouseOver={e => ShowMenu(e.currentTarget.id)}
                          role="button"
                        >
                          HEALTH & FITNESS
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          id="DIYTechnology"
                          onMouseOver={e => ShowMenu(e.currentTarget.id)}
                          href="#"
                        >
                          DIY & TECHNOLOGY
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          TOYS
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="#"
                          id="Clearance"
                          onMouseOver={e => ShowMenu(e.currentTarget.id)}
                        >
                          CLEARANCE
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="col-md-1"></div>
            </div>
            <div
              className="HealthFiness"
              id="HealthFinessDiv"
              style={inputStyle}
            >
              <div class="col-md-12">
                <div class="row" style={{ width: '100%' }}>
                  <div
                    class="col-md-3"
                    style={{ backgroundColor: 'whitesmoke' }}
                  >
                    <div class="list-group">
                      <br />
                      <a
                        class="dropdown-item"
                        onMouseOver={e => ShowSubMenu(e.currentTarget.id)}
                        href="#"
                        id="Core"
                      >
                        Core
                        <span
                          class="fa fa-chevron-right"
                          style={{ marginTop: '2', float: 'right' }}
                        ></span>
                      </a>
                      <a
                        class="dropdown-item"
                        href="#"
                        id="MultiGym"
                        onMouseOver={e => ShowSubMenu(e.currentTarget.id)}
                      >
                        Multi-Gym
                        <span
                          class="fa fa-chevron-right"
                          style={{ marginTop: '2', float: 'right' }}
                        ></span>
                      </a>
                      <a
                        class="dropdown-item"
                        href="#"
                        onMouseOver={e => ShowSubMenu(e.currentTarget.id)}
                        id="AerobicMachines"
                      >
                        Aerobic Machines
                        <span
                          class="fa fa-chevron-right"
                          style={{ marginTop: '2', float: 'right' }}
                        ></span>
                      </a>
                      <a
                        class="dropdown-item"
                        href="#"
                        onMouseOver={e => ShowSubMenu(e.currentTarget.id)}
                        id="ExerciseBikes"
                      >
                        Exercise Bikes
                        <span
                          class="fa fa-chevron-right"
                          style={{ marginTop: '2', float: 'right' }}
                        ></span>
                      </a>
                      <a
                        class="dropdown-item"
                        href="#"
                        onMouseOver={e => ShowSubMenu(e.currentTarget.id)}
                        id="BumLegs"
                      >
                        Bum & Legs
                        <span
                          class="fa fa-chevron-right"
                          style={{ marginTop: '2', float: 'right' }}
                        ></span>
                      </a>
                      <a
                        class="dropdown-item"
                        href="#"
                        onMouseOver={e => ShowSubMenu(e.currentTarget.id)}
                        id="Accessories"
                      >
                        Accessories
                        <span
                          class="fa fa-chevron-right"
                          style={{ marginTop: '2', float: 'right' }}
                        ></span>
                      </a>
                      <a
                        class="dropdown-item"
                        href="#"
                        id="Brands"
                        onMouseOver={e => ShowSubMenu(e.currentTarget.id)}
                      >
                        Brands
                        <span
                          class="fa fa-chevron-right"
                          style={{ marginTop: '2', float: 'right' }}
                        ></span>
                      </a>
                      <br />
                    </div>
                  </div>

                  <div
                    class="col-md-9"
                    style={{ backgroundColor: 'whitesmoke' }}
                  >
                    <div
                      class="row MultiGym"
                      id="MultiGymDiv"
                      style={{ display: 'none' }}
                    >
                      <div class="col-md-3">
                        <div class="container">
                          <br />
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>Bars</h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>Wrist Weight</h5>
                            <h6
                              style={{ fontStyle: 'normal', fontSize: 'small' }}
                            >
                              Magic Minerals
                            </h6>
                            <h6
                              style={{ fontStyle: 'normal', fontSize: 'small' }}
                            >
                              Coverage Concealer
                            </h6>
                            <h6
                              style={{ fontStyle: 'normal', fontSize: 'small' }}
                            >
                              Backstage Beauty Lights
                            </h6>
                            <h6
                              style={{ fontStyle: 'normal', fontSize: 'small' }}
                            >
                              Velform Cover
                            </h6>
                            <h6
                              style={{ fontStyle: 'normal', fontSize: 'small' }}
                            >
                              Coverage Concealer
                            </h6>
                            <h6
                              style={{ fontStyle: 'normal', fontSize: 'small' }}
                            >
                              Backstage Beauty Lights
                            </h6>
                            <h6
                              style={{ fontStyle: 'normal', fontSize: 'small' }}
                            >
                              Velform Cover
                            </h6>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>Home Gyms</h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>Exercise Sets</h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>
                              Home Gym Stations
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="container">
                          <br />
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>Treadmills</h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>
                              Exercise Bikes
                            </h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>
                              Elliptical Trainers
                            </h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>Step Machines</h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>Treadmills</h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>
                              Exercise Bikes
                            </h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>
                              Elliptical Trainers
                            </h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>Step Machines</h5>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="row Core"
                      id="CoreDiv"
                      style={{ display: 'none' }}
                    >
                      <div class="col-md-3">
                        <div class="container">
                          <br />
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>Core</h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>Wrist Weight</h5>
                            <h6
                              style={{ fontStyle: 'normal', fontSize: 'small' }}
                            >
                              Magic Minerals
                            </h6>
                            <h6
                              style={{ fontStyle: 'normal', fontSize: 'small' }}
                            >
                              Coverage Concealer
                            </h6>
                            <h6
                              style={{ fontStyle: 'normal', fontSize: 'small' }}
                            >
                              Backstage Beauty Lights
                            </h6>
                            <h6
                              style={{ fontStyle: 'normal', fontSize: 'small' }}
                            >
                              Velform Cover
                            </h6>
                            <h6
                              style={{ fontStyle: 'normal', fontSize: 'small' }}
                            >
                              Coverage Concealer
                            </h6>
                            <h6
                              style={{ fontStyle: 'normal', fontSize: 'small' }}
                            >
                              Backstage Beauty Lights
                            </h6>
                            <h6
                              style={{ fontStyle: 'normal', fontSize: 'small' }}
                            >
                              Velform Cover
                            </h6>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>Home Gyms</h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>Exercise Sets</h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>
                              Home Gym Stations
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="container">
                          <br />
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>Treadmills</h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>
                              Exercise Bikes
                            </h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>
                              Elliptical Trainers
                            </h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>Step Machines</h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>Treadmills</h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>
                              Exercise Bikes
                            </h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>
                              Elliptical Trainers
                            </h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>Step Machines</h5>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="row AerobicMachines"
                      id="AerobicMachinesDiv"
                      style={{ display: 'none' }}
                    >
                      <div class="col-md-3">
                        <div class="container">
                          <br />
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>
                              Aerobic Machines
                            </h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>Wrist Weight</h5>
                            <h6
                              style={{ fontStyle: 'normal', fontSize: 'small' }}
                            >
                              Magic Minerals
                            </h6>
                            <h6
                              style={{ fontStyle: 'normal', fontSize: 'small' }}
                            >
                              Coverage Concealer
                            </h6>
                            <h6
                              style={{ fontStyle: 'normal', fontSize: 'small' }}
                            >
                              Backstage Beauty Lights
                            </h6>
                            <h6
                              style={{ fontStyle: 'normal', fontSize: 'small' }}
                            >
                              Velform Cover
                            </h6>
                            <h6
                              style={{ fontStyle: 'normal', fontSize: 'small' }}
                            >
                              Coverage Concealer
                            </h6>
                            <h6
                              style={{ fontStyle: 'normal', fontSize: 'small' }}
                            >
                              Backstage Beauty Lights
                            </h6>
                            <h6
                              style={{ fontStyle: 'normal', fontSize: 'small' }}
                            >
                              Velform Cover
                            </h6>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>Home Gyms</h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>Exercise Sets</h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>
                              Home Gym Stations
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="container">
                          <br />
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>Treadmills</h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>
                              Exercise Bikes
                            </h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>
                              Elliptical Trainers
                            </h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>Step Machines</h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>Treadmills</h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>
                              Exercise Bikes
                            </h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>
                              Elliptical Trainers
                            </h5>
                          </div>
                          <div class="form-group">
                            <h5 style={{ fontSize: 'large' }}>Step Machines</h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <br />
                        <div class="form-group">
                          <div class="card" style={{ width: '14rem' }}>
                            <div style={{ height: '12rem' }}>
                              <img
                                class="mh-100  mx-auto d-block img-responsive rounded"
                                style={{ width: '100%' }}
                                src={require('../../assets/Add.png')}
                                alt="Add"
                              />
                            </div>
                            <div
                              class="text-center"
                              style={{ background: '#1d50a3' }}
                            >
                              <a
                                href="#"
                                style={{
                                  color: '#fff',
                                  textTransform: 'uppercase',
                                  fontWeight: 'bold'
                                }}
                              >
                                <h5 class="card-text">Flat 50% OFF</h5>
                                <span>Shop Now</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="card" style={{ width: '14rem' }}>
                            <div style={{ height: '12rem' }}>
                              <img
                                class="mh-100  mx-auto d-block img-responsive rounded"
                                style={{ width: '100%' }}
                                src={require('../../assets/Add.png')}
                                alt="Add"
                              />
                            </div>
                            <div
                              class="text-center"
                              style={{ background: '#1d50a3' }}
                            >
                              <a
                                href="#"
                                style={{
                                  color: '#fff',
                                  textTransform: 'uppercase',
                                  fontWeight: 'bold'
                                }}
                              >
                                <h5 class="card-text">Flat 50% OFF</h5>
                                <span>Shop Now</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <Carousel
            className="banner-carousel"
            id="carouselDiv"
            activeIndex={index}
            onSelect={handleSelect}
            indicators={false}
          >
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
      </div>
    </>
  );
};
export default Header;
