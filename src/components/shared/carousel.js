const { default: Image } = require("next/image");
const { Carousel } = require("react-responsive-carousel");
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from "@/assets/images/banner-1.jpg";
import Image2 from "@/assets/images/banner-2.jpg";
import Image3 from "@/assets/images/banner-3.jpg";
import Image4 from "@/assets/images/banner-4.jpg";
import Image5 from "@/assets/images/banner-5.jpg";
import Image6 from "@/assets/images/banner-6.jpg";

const imageStyle = {
  backgroundSize: "cover",
  objectFit: "cover",
  width: "100%",
  height: "600px",
  borderRadius: "15px", // Adjust the border radius as per your preference
};

const CarouselPage = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      interval={4000}
      stopOnHover={false}
      stopOnSlide={5}
    >
      <div>
        <Image src={Image1} alt="image1" style={imageStyle} />
      </div>
      <div>
        <Image src={Image2} alt="image2" style={imageStyle} />
      </div>
      <div>
        <Image src={Image3} alt="image3" style={imageStyle} />
      </div>
      <div>
        <Image src={Image4} alt="image4" style={imageStyle} />
      </div>
      <div>
        <Image src={Image5} alt="image5" style={imageStyle} />
      </div>
      <div>
        <Image src={Image6} alt="image6" style={imageStyle} />
      </div>
    </Carousel>
  );
};

export default CarouselPage;
