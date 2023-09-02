import CarouselPage from "../Shared/carousel";
import Navbar from "../Shared/navbar";
import FeaturedCategories from "./featuredCategories";
import Footer from "./footer";

const Home = () => {
  return (
    <div className="h-[calc(100vh-80px)] max-w-7xl mx-auto">
      <Navbar />
      <CarouselPage />
      <FeaturedCategories />
      <Footer />
    </div>
  );
};

export default Home;
