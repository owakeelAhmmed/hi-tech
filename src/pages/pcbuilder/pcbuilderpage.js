import { useSelector } from "react-redux";
import Navbar from "@/components/shared/navbar";
import CpuCard from "@/components/ui/cpuCard";
import MotherboardCard from "@/components/ui/motherboardCard";
import MonitorCard from "@/components/ui/monitorCard";
import PowerCard from "@/components/ui/powerCard";
import RamCard from "@/components/ui/ramCard";
import CardStorage from "@/components/ui/cardStorage";
import { BsFillTrash3Fill } from "react-icons/bs";

const PcBuilderPage = () => {
  const selectedProducts = useSelector(
    (state) => state.products.selectedProducts
  );

  const isCompleteBuild = selectedProducts.length < 5;

  return (
    <div className="h-[calc(100vh-80px)] max-w-7xl mx-auto">
      <Navbar />
      <div className=" mb-10  grid grid-cols-1 md:grid-cols-1 border  md:lg:m-24">
        <div className="card ml-10 mr-10 mt-6 h-24 border bg-base-100 shadow-xl">
          <CpuCard selectedProducts={selectedProducts} />
        </div>
        <div className="card ml-10 mr-10 mt-6 h-24 border bg-base-100 shadow-xl">
          <MotherboardCard selectedProducts={selectedProducts} />
        </div>
        <div className="card ml-10 mr-10 mt-6 h-24 border bg-base-100 shadow-xl">
          <MonitorCard selectedProducts={selectedProducts} />
        </div>
        <div className="card ml-10 mr-10 mt-6 h-24 border bg-base-100 shadow-xl">
          <CardStorage selectedProducts={selectedProducts} />
        </div>
        <div className="card ml-10 mr-10 mt-6 h-24 border bg-base-100 shadow-xl">
          <PowerCard selectedProducts={selectedProducts} />
        </div>
        <div className="card ml-10 mr-10 mt-6 h-24 border bg-base-100 shadow-xl">
          <RamCard selectedProducts={selectedProducts} />
        </div>
        <div className=" flex justify-end mr-10 mt-8">
          <h1 className="text-blue-600 font-bold text-2xl">Total: 0</h1>
        </div>
        <div className="flex justify-center items-center mb-20">
          <button
            className={`btn btn-sm btn-primary ${
              isCompleteBuild ? "btn-disabled" : ""
            }`}
            disabled={isCompleteBuild}
          >
            Complete Build
          </button>
        </div>
        0{" "}
      </div>
    </div>
  );
};

export default PcBuilderPage;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");

  const data = await res.json();

  return {
    props: {
      allProduct: data,
    },
  };
};
