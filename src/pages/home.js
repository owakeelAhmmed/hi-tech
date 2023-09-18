import CarouselPage from "@/components/shared/carousel";
import Footer from "./footer";
import Navbar from "@/components/shared/navbar";
import FeaturedCategories from "./featuredCategories";

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
