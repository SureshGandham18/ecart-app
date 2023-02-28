import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "	https://trak.in/wp-content/uploads/2018/07/Flipkart-Big-Shopping-Days-.jpg"},
  { url: "	https://www.fusioninformatics.com/images/famous-app/flipkart-banner.jpg" },
//   { url: "images/3.jpg" },
//   { url: "images/4.jpg" },
//   { url: "images/5.jpg" },
//   { url: "images/6.jpg" },
//   { url: "images/7.jpg" },
];

const ImageSlider = () => {
  return (
    <div >
        <center>
      <SimpleImageSlider
        width={1000}
        height={400}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        style={{backgroundColor:'white',padding:'10px',position:'static'}}
      />
      </center>
    </div>
  );
}
export default ImageSlider