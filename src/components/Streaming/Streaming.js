import React, { useRef } from 'react';
import './Streaming.css';

import Video from '../../assets/video.mp4';

const Streaming = () => {
  const videoRef = useRef();

  const playVideo = () => {
    videoRef.current.play();
  };
  return (
    <div className="streaming-wrapper">
      <h1 className="live-heading">Live Streaming</h1>
      <div className=" streaming-container">
        <div className="card main-video">
          <video
            className="video-content"
            ref={videoRef}
            src={Video}
            controls={false}
            autoPlay={false}
          />
          <span className="play-btn" onClick={playVideo}>
            <img src={require('../../assets/play.png')} alt="play" />
          </span>
          <span className="live-btn" onClick={playVideo}>
            <img src={require('../../assets/live1.png')} alt="play" />
          </span>
        </div>
        <div style={{ width: '20%' }}>
          <div className="card sub-video">
            <video
              className="sub-video__content"
              src={Video}
              controls={false}
              autoPlay={false}
            />
            <span className="play-btn__sub-menu" onClick={playVideo}>
              <img src={require('../../assets/play.png')} alt="play" />
            </span>
          </div>
          <div className="card sub-video">
            <video
              className="sub-video__content"
              src={Video}
              controls={false}
              autoPlay={false}
            />
            <span className="play-btn__sub-menu" onClick={playVideo}>
              <img src={require('../../assets/play.png')} alt="play" />
            </span>
          </div>
          <div className="card sub-video">
            <video
              src={Video}
              className="sub-video__content"
              controls={false}
              autoPlay={false}
            />
            <span className="play-btn__sub-menu" onClick={playVideo}>
              <img src={require('../../assets/play.png')} alt="play" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Streaming;
