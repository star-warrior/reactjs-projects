import { useEffect } from "react";
import "./index.css";
import { useState } from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";

function ImageSlider({ url, limit }) {
  const [images, SetImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const totalSlides = images.length;

  function handleNextSlide() {
    setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
  }

  function handlePreviousSlide() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  async function fetchImages(geturl) {
    try {
      setLoading(true);
      const response = await fetch(`${geturl}limit=${limit}&page=1`);
      const data = await response.json();

      if (data) {
        SetImage(data);
        setLoading(false);
      }
    } catch (e) {
      setError(e.meassage);
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      {/* <h1>Slider</h1> */}
      <BsArrowLeftCircleFill
        onClick={() => handlePreviousSlide()}
        className="arrow-left"
      />
      <div className="slider-container">
        {images && images.length
          ? images.map((image) => (
              <img
                className={
                  image.id - 1 === currentSlide
                    ? "current-image"
                    : "current-image hide-current-image"
                }
                key={image.id}
                src={image.download_url}
                alt={image.alt}
              />
            ))
          : null}
        <span className="image-buttons">
          {images && images.length
            ? images.map((image) => (
                <button
                  className={
                    image.id - 1 === currentSlide ? "current-indi" : ""
                  }
                  key={image.id}
                  onClick={() => setCurrentSlide(image.id - 1)}
                ></button>
              ))
            : null}
        </span>
      </div>
      <BsArrowRightCircleFill
        onClick={() => handleNextSlide()}
        className="arrow-right"
      />
    </div>
  );
}

export default ImageSlider;
