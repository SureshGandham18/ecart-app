import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://i.pinimg.com/736x/b6/89/96/b68996b0aeb13339740f961ada455a77.jpg" },
  { url: "https://d1alm8p94swy6o.cloudfront.net/wp-content/uploads/2018/01/28122705/slider-img.png"},
  { url: "https://www.abitcorp.com/images/bg-banner-service-ecommerce2.jpg" },
  
  { url: "https://ritikkachhot.b-cdn.net/wp-content/uploads/2022/02/695-removebg-preview.png" },
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
        style={{backgroundColor:'white',padding:'',position:'relative',display:'block',objectFit:'cover',borderRadius:"10px"}}
      />
      </center>
    </div>
  );
}
export default ImageSlider