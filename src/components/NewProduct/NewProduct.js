import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';
import './NewProduct.css';

const NewProduct = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const prevSlide = () => {
    const lastIndex = images.length - 1;
    const resetIndex = currentImageIndex === 0;
    const imgIndex = resetIndex ? lastIndex : currentImageIndex - 1;
    setCurrentImageIndex(imgIndex);
  };

  const nextSlide = e => {
    e.preventDefault();
    const lastIndex = images.length - 1;
    const resetIndex = currentImageIndex === lastIndex;
    const index = resetIndex ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(index);
  };

  const index = currentImageIndex;
  let firstFourImage = images.slice(index, index + 3);

  if (firstFourImage.length < 3) {
    firstFourImage = firstFourImage.concat(
      images.slice(0, 3 - firstFourImage.length)
    );
  }

  // const topCategoriesUrl = process.env.REACT_APP_API_URL;
  const topCategoriesUrl = 'https://demo7240682.mockable.io/topcategories';

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
    <div className="new-products__wrapper">
      <div className="new-products__actions">
        <div className="next-prev__btn-new-prod">
          <span onClick={prevSlide}>
            <i className="fas fa-angle-left arrows-icon" />
          </span>
          <span className="vertical-divider__new-prod">|</span>
          <span onClick={nextSlide}>
            <i className="fas fa-angle-right arrows-icon" />
          </span>
        </div>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="container new-products__container">
            <div className="row">
              {firstFourImage.map(image => (
                <div className="col-sm" key={image.id}>
                  <div className="card border-0 shadow" key={image.id}>
                    <img
                      className="card-img-top"
                      src={image.imageUri}
                      alt="img"
                    />
                  </div>
                  <p className="prod-name">{image.info}</p>
                  <p className="quantity-text">{image.quantity}</p>
                  <span className="price-text">&#8364; {image.price}</span>

                  <span className="del-price">
                    <strike>&#8364; 99.99</strike>
                  </span>
                </div>
              ))}

              <div className="col-sm">
                <div className="card border-0 shadow new-prod__image-card">
                  <span className="new-prod__text">New Products</span>
                  <img
                    className="card-img-top new-prod__image"
                    src="https://images.pexels.com/photos/1277939/pexels-photo-1277939.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default NewProduct;
