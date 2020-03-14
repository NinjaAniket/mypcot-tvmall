import React, { useState } from 'react';
import './MegaMenu.css';

export default function MegaMenu() {
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
    <div class="col-md-12">
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
        </div>
        <div className="col-md-1"></div>
      </div>
      <div class="HealthFiness" id="HealthFinessDiv" style={inputStyle}>
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-3" style={{ backgroundColor: 'whitesmoke' }}>
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

            <div class="col-md-9" style={{ backgroundColor: 'whitesmoke' }}>
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

              <div class="row Core" id="CoreDiv" style={{ display: 'none' }}>
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

              <div
                class="row AerobicMachines"
                id="AerobicMachinesDiv"
                style={{ display: 'none' }}
              >
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
  );
}
