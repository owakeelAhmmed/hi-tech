import Image from "next/image";
import Image1 from "@/assets/Icon/cpu.png";
import Image2 from "@/assets/Icon/motherboard.png";
import Image3 from "@/assets/Icon/monitor.png";
import Image4 from "@/assets/Icon/storage.png";
import Image5 from "@/assets/Icon/pws.png";
import Image6 from "@/assets/Icon/ram.png";
import Link from "next/link";
import { useSelector } from "react-redux";

import Navbar from "@/components/shared/navbar";

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
          <div className="flex justify-items-center-items-center ml-4 mr-4">
            <figure>
              <Image
                style={{
                  width: "50px",
                  height: "50px",
                }}
                src={Image1}
                alt="Shoes"
              />
            </figure>
            <div className="card-body ">
              <div className="flex items-center justify-between">
                <div className="flex justify-around gap-x-2">
                  <h1>CPU:{selectedProducts?.category}</h1>
                  <div className="badge text-white bg-[#e11d48]">Required</div>
                </div>
                <Link href="/pcbuilder/allproduct/cpuPage">
                  <button className="btn btn-sm btn-primary ">Select</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card ml-10 mr-10 mt-6 h-24 border bg-base-100 shadow-xl">
          <div className="flex justify-items-center-items-center ml-4 mr-4">
            <figure>
              <Image
                style={{
                  width: "50px",
                  height: "50px",
                }}
                src={Image2}
                alt="Shoes"
              />
            </figure>
            <div className="card-body ">
              <div className="flex items-center justify-between">
                <div className="flex justify-around gap-x-2">
                  <h1>CPU:{selectedProducts?.category}</h1>
                  <div className="badge text-white bg-[#e11d48]">Required</div>
                </div>
                <Link href="/pcbuilder/allproduct/motherBoardPage">
                  <button className="btn btn-sm btn-primary ">Select</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card ml-10 mr-10 mt-6 h-24 border bg-base-100 shadow-xl">
          <div className="flex justify-items-center-items-center ml-4 mr-4">
            <figure>
              <Image
                style={{
                  width: "50px",
                  height: "50px",
                }}
                src={Image3}
                alt="Shoes"
              />
            </figure>
            <div className="card-body ">
              <div className="flex items-center justify-between">
                <div className="flex justify-around gap-x-2">
                  <h1>CPU:{selectedProducts?.category}</h1>
                  <div className="badge text-white bg-[#e11d48]">Required</div>
                </div>
                <Link href="/pcbuilder/allproduct/monitorPage">
                  <button className="btn btn-sm btn-primary ">Select</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card ml-10 mr-10 mt-6 h-24 border bg-base-100 shadow-xl">
          <div className="flex justify-items-center-items-center ml-4 mr-4">
            <figure>
              <Image
                style={{
                  width: "50px",
                  height: "50px",
                }}
                src={Image4}
                alt="Shoes"
              />
            </figure>
            <div className="card-body ">
              <div className="flex items-center justify-between">
                <div className="flex justify-around gap-x-2">
                  <h1>CPU:{selectedProducts?.category}</h1>
                  <div className="badge text-white bg-[#e11d48]">Required</div>
                </div>
                <Link href="/pcbuilder/allproduct/storagePage">
                  <button className="btn btn-sm btn-primary ">Select</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card ml-10 mr-10 mt-6 h-24 border bg-base-100 shadow-xl">
          <div className="flex justify-items-center-items-center ml-4 mr-4">
            <figure>
              <Image
                style={{
                  width: "50px",
                  height: "50px",
                }}
                src={Image5}
                alt="Shoes"
              />
            </figure>
            <div className="card-body ">
              <div className="flex items-center justify-between">
                <div className="flex justify-around gap-x-2">
                  <h1>CPU:{selectedProducts?.category}</h1>
                  <div className="badge text-white bg-[#e11d48]">Required</div>
                </div>
                <Link href="/pcbuilder/allproduct/powerUnitePage">
                  <button className="btn btn-sm btn-primary ">Select</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card ml-10 mr-10 mt-6 h-24 border bg-base-100 shadow-xl">
          <div className="flex justify-items-center-items-center ml-4 mr-4">
            <figure>
              <Image
                style={{
                  width: "50px",
                  height: "50px",
                }}
                src={Image6}
                alt="Shoes"
              />
            </figure>
            <div className="card-body ">
              <div className="flex items-center justify-between">
                <div className="flex justify-around gap-x-2">
                  <h1>CPU:{selectedProducts?.category}</h1>
                  <div className="badge text-white bg-[#e11d48]">Required</div>
                </div>
                <Link href="/pcbuilder/allproduct/ramPage">
                  <button className="btn btn-sm btn-primary ">Select</button>
                </Link>
              </div>
            </div>
          </div>
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
