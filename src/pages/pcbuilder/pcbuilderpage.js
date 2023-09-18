import Image from "next/image";
import Image1 from "@/assets/Icon/cpu.png";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "@/components/shared/navbar";

const PcBuilderPage = () => {
  const selectedProducts = useSelector(
    (state) => state.products.selectedProducts
  );

  return (
    <div className="h-[calc(100vh-80px)] max-w-7xl mx-auto">
      <Navbar />
      <div className="h-[100vh] grid grid-cols-1 md:grid-cols-1 border  md:lg:m-24">
        <div className="card m-10 h-24 border bg-base-100 shadow-xl">
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
                  <button className="btn btn-sm btn-secondary bg-[#e11d48]">
                    Select
                  </button>
                </Link>
              </div>
            </div>
          </div>
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
