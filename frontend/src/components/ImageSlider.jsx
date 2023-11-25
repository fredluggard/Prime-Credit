import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { baseUrl } from "./config";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
function ImageSlider() {
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={"/src/assets/images/carousel-1.jpg"} />
        </div>
        <div>
          <img src={"/src/assets/images/carousel-2.jpg"} />
        </div>
        <div>
          <img src={"/src/assets/images/carousel-3.jpg"} />
        </div>
        <div>
          <img src={"/src/assets/images/carousel-4.jpg"} />
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
