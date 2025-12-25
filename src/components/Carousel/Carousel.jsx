import { useEffect, useState } from "react";
import "./Carousel.css";

// IMPORT YOUR IMAGES HERE
import img1 from "../../assets/Banners/banner1.jpeg";
import img2 from "../../assets/Banners/banner2.jpeg";
import img3 from "../../assets/Banners/banner3.jpeg";
import img4 from "../../assets/Banners/banner4.jpeg";

const images = [img1, img2, img3, img4];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index}`} />
        ))}
      </div>

      {/* Controls */}
      <button className="carousel-btn left" onClick={prevSlide}>
        ❮
      </button>
      <button className="carousel-btn right" onClick={nextSlide}>
        ❯
      </button>

      {/* Dots */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
