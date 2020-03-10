import React, { useEffect } from 'react';
import './Topcategories.css';
export default function Topcategories() {
  return (
    <div className="wrapper">
      <div className="top-categories__container">
        <h1 className="heading">Top Categories</h1>
        <button type="button" className="btn btn-primary next-prev__btn">
          <span onClick={() => console.log('left')}>
            <i className="fas fa-angle-left arrows-icon"></i>
          </span>
          <span className="vertical-divider">|</span>
          <span onClick={() => console.log('right')}>
            <i className="fas fa-angle-right arrows-icon"></i>
          </span>
        </button>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card">
              <img
                className="card-img-top"
                src={require('../../assets/logo.png')}
                alt="img"
              />
            </div>
          </div>
          <div className="col-sm">
            <div className="card">
              <img
                className="card-img-top"
                src={require('../../assets/logo.png')}
                alt="img"
              />
            </div>
          </div>
          <div className="col-sm">
            <div className="card">
              <img
                className="card-img-top"
                src={require('../../assets/logo.png')}
                alt="img"
              />
            </div>
          </div>
          <div className="col-sm">
            <div className="card">
              <img
                className="card-img-top"
                src={require('../../assets/logo.png')}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
