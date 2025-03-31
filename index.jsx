const ImageSlider = () => {
  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Slide ${index}`} />
      ))}
    </div>
  );
};
