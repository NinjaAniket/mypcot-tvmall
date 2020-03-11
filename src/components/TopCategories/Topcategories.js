import React, { useEffect, useState } from 'react';
import './Topcategories.css';
import axios from 'axios';

const Topcategories = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [images, setImages] = useState([
    // 'https://via.placeholder.com/200x150?text=first',
    // 'https://via.placeholder.com/200x150?text=second',
    // 'https://via.placeholder.com/200x150?text=third',
    // 'https://via.placeholder.com/200x150?text=fourth',
    // 'https://via.placeholder.com/200x150?text=fifth',
    // 'https://via.placeholder.com/200x150?text=sixth',
    // 'https://via.placeholder.com/200x150?text=seventh',
    // 'https://via.placeholder.com/200x150?text=eighth',
    // 'https://via.placeholder.com/200x150?text=ninth',
    // 'https://via.placeholder.com/200x150?text=tenth'
  ]);

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

      <button type="button" className="view-all__btn">
        View All
        <span>
          <i className="fas fa-angle-right view-all__icon" />
        </span>
      </button>

      <div className="container">
        <div className="row">
          {firstFourImage.map(image => (
            <div className="col-sm">
              <div className="card border-0 shadow image-card" key={image.id}>
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
    </div>
  );
};
export default Topcategories;
