import React, { useState } from 'react';

export default function Test() {
  const [isShown, setIsShown] = useState(false);

  console.log(isShown);
  return (
    <div class="col-md-12">
      <nav class="navbar navbar-expand-lg navbar-light bg-info">
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

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                HOME & KITCHEN
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                BEAUTY & FASHION
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                JEWELLERY
              </a>
            </li>
            <li
              class="nav-item"
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              <a class="nav-link" id="HealthFiness" href="#" role="button">
                HEALTH & FITNESS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                DIY & TECHNOLOGY
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                TOYS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                CLEARANCE
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="HealthFiness" style={{ display: 'none' }}>
        <div class="col-md-12">
          <div class="row">
            {isShown ? (
              <div class="col-md-2" style={{ backgroundColor: 'whitesmoke' }}>
                <div class="list-group">
                  <br />
                  <a class="dropdown-item" href="#" id="Core">
                    Core
                    <span
                      class="fa fa-chevron-right"
                      style={{ marginTop: '2', float: 'right' }}
                    ></span>
                  </a>
                  <a class="dropdown-item" href="#" id="MultiGym">
                    Multi-Gym
                    <span
                      class="fa fa-chevron-right"
                      style={{ marginTop: '2', float: 'right' }}
                    ></span>
                  </a>
                  <a class="dropdown-item" href="#" id="AerobicMachines">
                    Aerobic Machines
                    <span
                      class="fa fa-chevron-right"
                      style={{ marginTop: '2', float: 'right' }}
                    ></span>
                  </a>
                  <a class="dropdown-item" href="#">
                    Exercise Bikes
                    <span
                      class="fa fa-chevron-right"
                      style={{ marginTop: '2', float: 'right' }}
                    ></span>
                  </a>
                  <a class="dropdown-item" href="#">
                    Bum & Legs
                    <span
                      class="fa fa-chevron-right"
                      style={{ marginTop: '2', float: 'right' }}
                    ></span>
                  </a>
                  <a class="dropdown-item" href="#">
                    Accessories
                    <span
                      class="fa fa-chevron-right"
                      style={{ marginTop: '2', float: 'right' }}
                    ></span>
                  </a>
                  <a class="dropdown-item" href="#">
                    Brands
                    <span
                      class="fa fa-chevron-right"
                      style={{ marginTop: '2', float: 'right' }}
                    ></span>
                  </a>
                </div>
              </div>
            ) : (
              ''
            )}

            <div class="col-md-10" style={{ backgroundColor: 'whitesmoke' }}>
              <div class="row MultiGym" style={{ display: 'none' }}>
                <div class="col-md-3">
                  <div class="container">
                    <br />
                    <div class="form-group">
                      <h5 style={{ fontSize: 'large' }}>Bars</h5>
                    </div>
                    <div class="form-group">
                      <h5 style={{ fontSize: 'large' }}>Wrist Weight</h5>
                      <h6 style={{ fontStyle: 'normal', fontSize: 'small' }}>
                        Magic Minerals
                      </h6>
                      <h6 style={{ fontStyle: 'normal', fontSize: 'small' }}>
                        Coverage Concealer
                      </h6>
                      <h6 style={{ fontStyle: 'normal', fontSize: 'small' }}>
                        Backstage Beauty Lights
                      </h6>
                      <h6 style={{ fontStyle: 'normal', fontSize: 'small' }}>
                        Velform Cover
                      </h6>
                      <h6 style={{ fontStyle: 'normal', fontSize: 'small' }}>
                        Coverage Concealer
                      </h6>
                      <h6 style={{ fontStyle: 'normal', fontSize: 'small' }}>
                        Backstage Beauty Lights
                      </h6>
                      <h6 style={{ fontStyle: 'normal', fontSize: 'small' }}>
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
                      <h5 style={{ fontSize: 'large' }}>Home Gym Stations</h5>
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
                      <h5 style={{ fontSize: 'large' }}>Exercise Bikes</h5>
                    </div>
                    <div class="form-group">
                      <h5 style={{ fontSize: 'large' }}>Elliptical Trainers</h5>
                    </div>
                    <div class="form-group">
                      <h5 style={{ fontSize: 'large' }}>Step Machines</h5>
                    </div>
                    <div class="form-group">
                      <h5 style={{ fontSize: 'large' }}>Treadmills</h5>
                    </div>
                    <div class="form-group">
                      <h5 style={{ fontSize: 'large' }}>Exercise Bikes</h5>
                    </div>
                    <div class="form-group">
                      <h5 style={{ fontSize: 'large' }}>Elliptical Trainers</h5>
                    </div>
                    <div class="form-group">
                      <h5 style={{ fontSize: 'large' }}>Step Machines</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row Core" style={{ display: 'none' }}>
                <div class="col-md-3">
                  <div class="container">
                    <br />
                    <div class="form-group">
                      <h5 style={{ fontSize: 'large' }}>Core</h5>
                    </div>
                    <div class="form-group">
                      <h5 style={{ fontSize: 'large' }}>Wrist Weight</h5>
                      <h6 style={{ fontStyle: 'normal', fontSize: 'small' }}>
                        Magic Minerals
                      </h6>
                      <h6 style={{ fontStyle: 'normal', fontSize: 'small' }}>
                        Coverage Concealer
                      </h6>
                      <h6 style={{ fontStyle: 'normal', fontSize: 'small' }}>
                        Backstage Beauty Lights
                      </h6>
                      <h6 style={{ fontStyle: 'normal', fontSize: 'small' }}>
                        Velform Cover
                      </h6>
                      <h6 style={{ fontStyle: 'normal', fontSize: 'small' }}>
                        Coverage Concealer
                      </h6>
                      <h6 style={{ fontStyle: 'normal', fontSize: 'small' }}>
                        Backstage Beauty Lights
                      </h6>
                      <h6 style={{ fontStyle: 'normal', fontSize: 'small' }}>
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
                      <h5 style={{ fontSize: 'large' }}>Home Gym Stations</h5>
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
                      <h5 style={{ fontSize: 'large' }}>Exercise Bikes</h5>
                    </div>
                    <div class="form-group">
                      <h5 style={{ fontSize: 'large' }}>Elliptical Trainers</h5>
                    </div>
                    <div class="form-group">
                      <h5 style={{ fontSize: 'large' }}>Step Machines</h5>
                    </div>
                    <div class="form-group">
                      <h5 style={{ fontSize: 'large' }}>Treadmills</h5>
                    </div>
                    <div class="form-group">
                      <h5 style={{ fontSize: 'large' }}>Exercise Bikes</h5>
                    </div>
                    <div class="form-group">
                      <h5 style={{ fontSize: 'large' }}>Elliptical Trainers</h5>
                    </div>
                    <div class="form-group">
                      <h5 style={{ fontSize: 'large' }}>Step Machines</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row AerobicMachines" style={{ display: 'none' }}>
                <div class="col-md-3">
                  <div class="container">
                    <br />
                    <div class="form-group">
                      <h5 style={{ fontSize: 'large' }}>Aerobic Machines</h5>
                    </div>
                    <div class="form-group">
                      <h5 style={{ fontSize: 'large' }}>Wrist Weight</h5>
                      <h6 style={{ fontStyle: 'normal', fontSize: 'small' }}>
                        Magic Minerals
                      </h6>
                      <h6 style={{ fontStyle: 'normal', fontSize: 'small' }}>
                        Coverage Concealer
                      </h6>
                      <h6 style={{ fontStyle: 'normal', fontSize: 'small' }}>
                        Backstage Beauty Lights
                      </h6>
                      <h6 style={{ fontStyle: 'normal', fontSize: 'small' }}>
                        Velform Cover
                      </h6>
                      <h6 style={{ fontStyle: 'normal', fontSize: 'small' }}>
                        Coverage Concealer
                      </h6>
                      <h6 style={{ fontStyle: 'normal', fontSize: 'small' }}>
                        Backstage Beauty Lights
                      </h6>
                      <h6 style={{ fontStyle: 'normal', fontSize: 'small' }}>
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
                      <h5 style={{ fontSize: 'large' }}>Home Gym Stations</h5>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="container">
                    <br />
                    <div class="form-group">
                      <h5 style={{ fontSize: 'large' }}>Treadmills</h5>
                    </div>
                    <div class="form-group">
                      <h5 style={{ fontSize: 'large' }}>Exercise Bikes</h5>
                    </div>
                    <div class="form-group">
                      <h5 style={{ fontSize: 'large' }}>Elliptical Trainers</h5>
                    </div>
                    <div class="form-group">
                      <h5 style={{ fontSize: 'large' }}>Step Machines</h5>
                    </div>
                    <div class="form-group">
                      <h5 style={{ fontSize: 'large' }}>Treadmills</h5>
                    </div>
                    <div class="form-group">
                      <h5 style={{ fontSize: 'large' }}>Exercise Bikes</h5>
                    </div>
                    <div class="form-group">
                      <h5 style={{ fontSize: 'large' }}>Elliptical Trainers</h5>
                    </div>
                    <div class="form-group">
                      <h5 style={{ fontSize: 'large' }}>Step Machines</h5>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <br />
                  <div class="card" style={{ width: '10rem', height: '50%' }}>
                    <img
                      class="card-img-top img-responsive"
                      src="../Images/Adds1.png"
                    />
                    <div class="text-center">
                      <a href="#">
                        <h5 class="card-text">Flat 50% OFF</h5>
                        <span>Shop Now</span>
                      </a>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
