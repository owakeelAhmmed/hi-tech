import { BsFillCpuFill, BsFillMotherboardFill, BsMemory } from "react-icons/bs";
import Icon1 from "@/assets/Icon/cpu.png";
import Icon2 from "@/assets/Icon/monitor.png";
import Icon3 from "@/assets/Icon/storage.png";
import Icon4 from "@/assets/Icon/motherboard.png";
import Icon5 from "@/assets/Icon/pws.png";
import Icon6 from "@/assets/Icon/ram.png";
import Image from "next/image";
import Link from "next/link";
import { useGetProductsQuery } from "@/redux/api/api";

const CategoricCard = ({ allProduct }) => {
  // const { data, isLoading, isError, error } = useGetProductsQuery();

  const productCards = allProduct?.filter(
    (product) => product.category === "Computer Processor"
  );

  return (
    <div className="justify-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-y-14">
      <div className="group border  card w-72 bg-base-100 shadow-xl transform hover:scale-110 hover:shadow-2xl transition-transform duration-300 ease-in-out">
        <div className="card-body cursor-pointer select-none ">
          <Link href="/cpucategory/cpu">
            <div className="flex justify-center items-center">
              <Image
                className=""
                src={Icon1}
                alt="image1"
                style={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </div>
            <div className="text-center">
              <h2 className="mt-9 text-xl text-center">CPU / Processor</h2>
            </div>
          </Link>
        </div>
      </div>
      <div className="group border card w-72 bg-base-100 shadow-xl transform hover:scale-110 hover:shadow-2xl transition-transform duration-300 ease-in-out">
        <div className="card-body cursor-pointer select-none">
          <Link href="/motherboardcategory/motherboard">
            <div className="flex justify-center items-center">
              <Image
                className=""
                src={Icon4}
                alt="image1"
                style={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </div>
            <div className="text-center">
              <h2 className="mt-9 text-2xl text-center">Motherboard</h2>
            </div>
          </Link>
        </div>
      </div>
      <div className="group border card w-72 bg-base-100 shadow-xl transform hover:scale-110 hover:shadow-2xl transition-transform duration-300 ease-in-out">
        <div className="card-body cursor-pointer select-none">
          <Link href="/ramcategory/ramCategory">
            <div className="flex justify-center items-center">
              <Image
                className=""
                src={Icon6}
                alt="image1"
                style={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </div>
            <div className="text-center">
              <h2 className="mt-9 text-xl text-center">RAM</h2>
            </div>
          </Link>
        </div>
      </div>
      <div className="group border card w-72 bg-base-100 shadow-xl transform hover:scale-110 hover:shadow-2xl transition-transform duration-300 ease-in-out">
        <div className="card-body cursor-pointer select-none">
          <Link href="/powerUniteCategory/powerUniteCard">
            <div className="flex justify-center items-center">
              <Image
                className=""
                src={Icon5}
                alt="image1"
                style={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </div>
            <div className="text-center">
              <h2 className="mt-9 text-xl text-center">Power Supply Unit</h2>
            </div>
          </Link>
        </div>
      </div>
      <div className="group border card w-72 bg-base-100 shadow-xl transform hover:scale-110 hover:shadow-2xl transition-transform duration-300 ease-in-out">
        <div className="card-body cursor-pointer select-none">
          <Link href="/monitorCategory/monitorCard">
            <div className="flex justify-center items-center">
              <Image
                className=""
                src={Icon2}
                alt="image2"
                style={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </div>
            <div className="text-center">
              <h2 className="mt-9 text-xl text-center">Monitor</h2>
            </div>
          </Link>
        </div>
      </div>
      <div className="group border card w-72 bg-base-100 shadow-xl transform hover:scale-110 hover:shadow-2xl transition-transform duration-300 ease-in-out">
        <div className="card-body cursor-pointer select-none">
          <Link href="/storageCategory/storageCard">
            <div className="flex justify-center items-center">
              <Image
                className=""
                src={Icon3}
                alt="image3"
                style={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </div>
            <div className="text-center">
              <h2 className="mt-9 text-xl text-center">Storage Device</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoricCard;
