import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const HeadshotsSection = () => {
  const [fullScreen, setFullScreen] = useState(false);

  function handleClick() {
    if (fullScreen === false) {
      document.getElementById('headshots-section').requestFullscreen();
      setFullScreen(!fullScreen);
    } else {
      document.exitFullscreen();
      setFullScreen(!fullScreen);
    }
  }

  return (
    <section
        id="headshots-section"
        className="headshots-section">
        <span 
        id="headshots" 
        className="jump-link"></span>
        {fullScreen &&
          <span 
          className="exitFullScreen"
          onClick={handleClick}
          >X</span>}
        <Carousel id="carousel">
          <Carousel.Item>
          <img
              className={fullScreen ? 
              "d-block minimize" : "d-block"}
              src="/Kamaal_01.jpg"
              alt="First slide"
              onClick={handleClick}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={fullScreen ? 
              "d-block minimize" : "d-block"}
              src="/Kamaal_02.jpg"
              alt="Second slide"
              onClick={handleClick}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={fullScreen ? 
              "d-block minimize" : "d-block"}
              src="/Kamaal_03.jpg"
              alt="Third slide"
              onClick={handleClick}
            />
          </Carousel.Item>
          <Carousel.Item>
          <img
              className={fullScreen ? 
              "d-block minimize" : "d-block"}
              src="/Kamaal_04.jpg"
              alt="First slide"
              onClick={handleClick}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={fullScreen ? 
              "d-block minimize" : "d-block"}
              src="/Kamaal_05.jpg"
              alt="Second slide"
              onClick={handleClick}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={fullScreen ? 
              "d-block minimize" : "d-block"}
              src="/Kamaal_06.jpg"
              alt="Third slide"
              onClick={handleClick}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={fullScreen ? 
              "d-block minimize" : "d-block"}
              src="/Kamaal_07.jpg"
              alt="Third slide"
              onClick={handleClick}
            />
          </Carousel.Item>
        </Carousel>
      </section>
  );
}

export default HeadshotsSection;