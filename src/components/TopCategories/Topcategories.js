import React, { useEffect, useState } from 'react';
import './Topcategories.css';
import axios from 'axios';
import Loader from '../Loader/Loader';

const Topcategories = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const prevSlide = () => {
    const lastIndex = images.length - 1;
    const resetIndex = currentImageIndex === 0;
    const imgIndex = resetIndex ? lastIndex : currentImageIndex - 1;

    setCurrentImageIndex(imgIndex);
  };

  const nextSlide = () => {
    const lastIndex = images.length - 1;
    const resetIndex = currentImageIndex === lastIndex;
    const index = resetIndex ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(index);
  };

  const index = currentImageIndex;
  let firstFourImage = images.slice(index, index + 4);

  if (firstFourImage.length < 4) {
    firstFourImage = firstFourImage.concat(
      images.slice(0, 4 - firstFourImage.length)
    );
  }

  // const topCategoriesUrl = process.env.REACT_APP_API_URL;
  const topCategoriesUrl = 'http://demo7240682.mockable.io/topcategories';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`${topCategoriesUrl}`);
        setImages(result.data);
      } catch (err) {
        setLoading(true);
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <div className="top-categories__container">
        <h1 className="heading">Top Categories</h1>
        <button type="button" className="btn btn-primary next-prev__btn">
          <span onClick={prevSlide}>
            <i className="fas fa-angle-left arrows-icon"></i>
          </span>
          <span className="vertical-divider">|</span>
          <span onClick={nextSlide}>
            <i className="fas fa-angle-right arrows-icon"></i>
          </span>
        </button>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <button type="button" className="view-all__btn">
            View All
            <span>
              <i className="fas fa-angle-right view-all__icon" />
            </span>
          </button>
          <div className="container">
            <div className="row">
              {firstFourImage.map(image => (
                <div className="col-sm" key={image.id}>
                  <div
                    className="card border-0 shadow image-card"
                    key={image.id}
                  >
                    <img
                      className="card-img-top top-cat__images"
                      src={image.imageUri}
                      alt="img"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Topcategories;
