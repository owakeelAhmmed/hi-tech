import { BsFillCpuFill, BsFillMotherboardFill } from "react-icons/bs";
import CategoricCard from "../Shared/categorieCard";

const FeaturedCategories = () => {
  return (
    <div className="mt-32 ">
      <div className="mb-11">
        <h1 className="text-center text-4xl">Featured Category</h1>
        <p className="text-center text-2xl">
          Get Your Desired Product from Featured Category!
        </p>
      </div>
      <CategoricCard />
    </div>
  );
};

export default FeaturedCategories;
