import React from 'react';
import './ShoppingExperience.css';
import Button from '../Button/Button';

const ShoppingExperience = () => {
  return (
    <section className="shopping-experience">
      <div className="container ">
        <div className="row">
          <div className="col-6 left-section">
            <h1 className="main-heading">
              Africa's complete
              <p className="color-text">shopping experience </p>
            </h1>
            <p className="available-text">Available on</p>
            <div className="social-images">
              <img
                className="dstv-img"
                src={require('../../assets/dstv.jpeg')}
                alt="dstv"
              />
            </div>
            <div className="social-section">
              <span className="channel-no">Channel 173</span>
              <img
                className="youtube-img"
                src={require('../../assets/youtube.jpeg')}
                alt="dstv"
              />
            </div>
          </div>
          <div className="col-6 right-section">
            <p className="detail-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur neque quo assumenda. Perspiciatis enim accusantium
              odit magni, quis molestiae id aperiam modi
            </p>
            <p className="detail-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis tempore blanditiis voluptatum nam, ad, a labore
              praesentium et inventore quisquam officia alias, aspernatur
              obcaecati sint? Blanditiis velit ipsa reprehenderit
              iusto?Exercitationem accusantium a facilis hic ea quibusdam,
              tenetur labore quis illum impedit veniam aspernatur asperiores,
              ipsum qui ipsam quod saepe blanditiis veritatis tempora voluptatum
              obcaecati praesentium? Consectetur dolor repudiandae architecto.
              ipsum qui ipsam quod saepe blanditiis veritatis tempora voluptatum
              obcaecati praesentium? ipsum qui ipsam quod saepe blanditiis
              oluptatum obcaecati praesentium?
            </p>
            <Button>
              Read More <i className="fas fa-angle-right" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ShoppingExperience;
