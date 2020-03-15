import React, { useEffect, useState } from 'react';
import './Header.css';

import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import Loader from '../Loader/Loader';

const Header = () => {
  const [isLoading, setLoading] = useState(false);
  const [bannerImages, setBannerImages] = useState([]);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const apiUrl = 'https://demo7240682.mockable.io/banner-images';

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

  const [inputStyle, setInput] = useState({ display: 'none' });

  let SubMenuDetailsDiv = [
    'CoreDiv',
    'MultiGymDiv',
    'AerobicMachinesDiv',
    'ExerciseBikesDiv',
    'BumLegsDiv',
    'AccessoriesDiv',
    'BrandsDiv'
  ];
  let MenuDetailsDiv = [
    'HomeKitchenDiv',
    'BeautyFashionDiv',
    'JewelleryDiv',
    'HealthFinessDiv',
    'DIYTechnologyDiv',
    'ToysDiv',
    'ClearanceDiv'
  ];
  let TempList = [];

  function ShowMenu(data) {
    let Id = data;

    const dataId = MenuDetailsDiv.filter(item => item !== Id + 'Div');
    TempList = [];
    TempList = dataId;
    HideMenuDiv(TempList);
    let MainDiv = Id + 'Div';

    if (document.getElementById(MainDiv) != null) {
      setInput({
        display: 'flex'
      });
    }
  }

  function ShowSubMenu(data) {
    let Id = data;
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
    for (let i = 0; i <= TempList.length; i++) {
      if (document.getElementById(TempList[i]) != null) {
        setInput({
          display: 'none'
        });
      }
    }
  }

  function HideSubMenuDiv(TempList) {
    for (let i = 0; i <= TempList.length; i++) {
      if (document.getElementById(TempList[i]) != null) {
        document.getElementById(TempList[i]).style.display = 'none';
      }
    }
  }

  return (
    <>
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

      {/* <MegaMenu /> */}

      <div className="menu-container">
        <div className="col-md-12 test-container">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <nav className="navbar navbar-expand-lg navbar-light">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse justify-content-center"
                  id="navbarSupportedContent"
                >
                  <ul className="nav">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/#"
                        id="HomeKitchen"
                        onMouseOver={e => ShowMenu(e.currentTarget.id)}
                      >
                        HOME & KITCHEN
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/#">
                        BEAUTY & FASHION
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/#"
                        id="Jewellery"
                        onMouseOver={e => ShowMenu(e.currentTarget.id)}
                      >
                        JEWELLERY
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="HealthFiness"
                        href="/#"
                        onMouseOver={e => ShowMenu(e.currentTarget.id)}
                        role="button"
                      >
                        HEALTH & FITNESS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="DIYTechnology"
                        onMouseOver={e => ShowMenu(e.currentTarget.id)}
                        href="/#"
                      >
                        DIY & TECHNOLOGY
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/#">
                        TOYS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/#"
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
          <div className="HealthFiness" id="HealthFinessDiv" style={inputStyle}>
            <div className="col-md-12">
              <div className="row" style={{ width: '100%' }}>
                <div
                  className="col-md-3"
                  style={{ backgroundColor: 'whitesmoke' }}
                >
                  <div className="list-group">
                    <br />
                    <a
                      className="dropdown-item"
                      onMouseOver={e => ShowSubMenu(e.currentTarget.id)}
                      href="/#"
                      id="Core"
                    >
                      Core
                      <span
                        className="fa fa-chevron-right"
                        style={{ marginTop: '2', float: 'right' }}
                      ></span>
                    </a>
                    <a
                      className="dropdown-item"
                      href="/#"
                      id="MultiGym"
                      onMouseOver={e => ShowSubMenu(e.currentTarget.id)}
                    >
                      Multi-Gym
                      <span
                        className="fa fa-chevron-right"
                        style={{ marginTop: '2', float: 'right' }}
                      ></span>
                    </a>
                    <a
                      className="dropdown-item"
                      href="/#"
                      onMouseOver={e => ShowSubMenu(e.currentTarget.id)}
                      id="AerobicMachines"
                    >
                      Aerobic Machines
                      <span
                        className="fa fa-chevron-right"
                        style={{ marginTop: '2', float: 'right' }}
                      ></span>
                    </a>
                    <a
                      className="dropdown-item"
                      href="/#"
                      onMouseOver={e => ShowSubMenu(e.currentTarget.id)}
                      id="ExerciseBikes"
                    >
                      Exercise Bikes
                      <span
                        className="fa fa-chevron-right"
                        style={{ marginTop: '2', float: 'right' }}
                      ></span>
                    </a>
                    <a
                      className="dropdown-item"
                      href="/#"
                      onMouseOver={e => ShowSubMenu(e.currentTarget.id)}
                      id="BumLegs"
                    >
                      Bum & Legs
                      <span
                        className="fa fa-chevron-right"
                        style={{ marginTop: '2', float: 'right' }}
                      ></span>
                    </a>
                    <a
                      className="dropdown-item"
                      href="/#"
                      onMouseOver={e => ShowSubMenu(e.currentTarget.id)}
                      id="Accessories"
                    >
                      Accessories
                      <span
                        className="fa fa-chevron-right"
                        style={{ marginTop: '2', float: 'right' }}
                      ></span>
                    </a>
                    <a
                      className="dropdown-item"
                      href="/#"
                      id="Brands"
                      onMouseOver={e => ShowSubMenu(e.currentTarget.id)}
                    >
                      Brands
                      <span
                        className="fa fa-chevron-right"
                        style={{ marginTop: '2', float: 'right' }}
                      ></span>
                    </a>
                    <br />
                  </div>
                </div>

                <div
                  className="col-md-9"
                  style={{ backgroundColor: 'whitesmoke' }}
                >
                  <div
                    className="row MultiGym"
                    id="MultiGymDiv"
                    style={{ display: 'none' }}
                  >
                    <div className="col-md-3">
                      <div className="container">
                        <br />
                        <div className="form-group">
                          <h5 className="font-large">Bars</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Wrist Weight</h5>
                          <h6 className="font-normal">Magic Minerals</h6>
                          <h6 className="font-normal">Coverage Concealer</h6>
                          <h6 className="font-normal">
                            Backstage Beauty Lights
                          </h6>
                          <h6 className="font-normal">Velform Cover</h6>
                          <h6 className="font-normal">Coverage Concealer</h6>
                          <h6 className="font-normal">
                            Backstage Beauty Lights
                          </h6>
                          <h6 className="font-normal">Velform Cover</h6>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Home Gyms</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Exercise Sets</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Home Gym Stations</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="container">
                        <br />
                        <div className="form-group">
                          <h5 className="font-large">Treadmills</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Exercise Bikes</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Elliptical Trainers</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Step Machines</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Treadmills</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Exercise Bikes</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Elliptical Trainers</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Step Machines</h5>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="row Core"
                    id="CoreDiv"
                    style={{ display: 'none' }}
                  >
                    <div className="col-md-3">
                      <div className="container">
                        <br />
                        <div className="form-group">
                          <h5 className="font-large">Core</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Wrist Weight</h5>
                          <h6 className="font-normal">Magic Minerals</h6>
                          <h6 className="font-normal">Coverage Concealer</h6>
                          <h6 className="font-normal">
                            Backstage Beauty Lights
                          </h6>
                          <h6 className="font-normal">Velform Cover</h6>
                          <h6 className="font-normal">Coverage Concealer</h6>
                          <h6 className="font-normal">
                            Backstage Beauty Lights
                          </h6>
                          <h6 className="font-normal">Velform Cover</h6>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Home Gyms</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Exercise Sets</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Home Gym Stations</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="container">
                        <br />
                        <div className="form-group">
                          <h5 className="font-large">Treadmills</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Exercise Bikes</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Elliptical Trainers</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Step Machines</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Treadmills</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Exercise Bikes</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Elliptical Trainers</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Step Machines</h5>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="row AerobicMachines"
                    id="AerobicMachinesDiv"
                    style={{ display: 'none' }}
                  >
                    <div className="col-md-3">
                      <div className="container">
                        <br />
                        <div className="form-group">
                          <h5 className="font-large">Aerobic Machines</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Wrist Weight</h5>
                          <h6 className="font-normal">Magic Minerals</h6>
                          <h6 className="font-normal">Coverage Concealer</h6>
                          <h6 className="font-normal">
                            Backstage Beauty Lights
                          </h6>
                          <h6 className="font-normal">Velform Cover</h6>
                          <h6 className="font-normal">Coverage Concealer</h6>
                          <h6 className="font-normal">
                            Backstage Beauty Lights
                          </h6>
                          <h6 className="font-normal">Velform Cover</h6>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Home Gyms</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Exercise Sets</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Home Gym Stations</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="container">
                        <br />
                        <div className="form-group">
                          <h5 className="font-large">Treadmills</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Exercise Bikes</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Elliptical Trainers</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Step Machines</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Treadmills</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Exercise Bikes</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Elliptical Trainers</h5>
                        </div>
                        <div className="form-group">
                          <h5 className="font-large">Step Machines</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <br />
                      <div className="form-group">
                        <div className="card" style={{ width: '14rem' }}>
                          <div style={{ height: '12rem' }}>
                            <img
                              className="mh-100  mx-auto d-block img-responsive rounded"
                              style={{ width: '100%' }}
                              src={require('../../assets/Add.png')}
                              alt="Add"
                            />
                          </div>
                          <div
                            className="text-center"
                            style={{ background: '#1d50a3' }}
                          >
                            <a
                              href="/#"
                              style={{
                                color: '#fff',
                                textTransform: 'uppercase',
                                fontWeight: 'bold'
                              }}
                            >
                              <h5 className="card-text">Flat 50% OFF</h5>
                              <span>Shop Now</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="card" style={{ width: '14rem' }}>
                          <div style={{ height: '12rem' }}>
                            <img
                              className="mh-100  mx-auto d-block img-responsive rounded"
                              style={{ width: '100%' }}
                              src={require('../../assets/Add.png')}
                              alt="Add"
                            />
                          </div>
                          <div
                            className="text-center"
                            style={{ background: '#1d50a3' }}
                          >
                            <a
                              href="/#"
                              style={{
                                color: '#fff',
                                textTransform: 'uppercase',
                                fontWeight: 'bold'
                              }}
                            >
                              <h5 className="card-text">Flat 50% OFF</h5>
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
