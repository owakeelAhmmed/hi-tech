import { BsFillCpuFill, BsFillMotherboardFill, BsMemory } from "react-icons/bs";
import Icon1 from "@/assets/Icon/cpu.png";
import Icon2 from "@/assets/Icon/monitor.png";
import Icon3 from "@/assets/Icon/storage.png";
import Image from "next/image";

const CategoricCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-y-14">
      <div className="group card w-72 bg-base-100 shadow-xl transform hover:scale-110 hover:shadow-2xl transition-transform duration-300 ease-in-out">
        <div className="card-body">
          <div className="flex justify-center items-center">
            <BsFillCpuFill className="text-5xl" />
          </div>
          <div className="text-center">
            <h2 className="mt-9 text-xl text-center">CPU / Processor</h2>
          </div>
        </div>
      </div>
      <div className="group card w-72 bg-base-100 shadow-xl transform hover:scale-110 hover:shadow-2xl transition-transform duration-300 ease-in-out">
        <div className="card-body">
          <div className="flex justify-center items-center">
            <BsFillMotherboardFill className="text-5xl" />
          </div>
          <div className="text-center">
            <h2 className="mt-9 text-2xl text-center">Motherboard</h2>
          </div>
        </div>
      </div>
      <div className="group card w-72 bg-base-100 shadow-xl transform hover:scale-110 hover:shadow-2xl transition-transform duration-300 ease-in-out">
        <div className="card-body">
          <div className="flex justify-center items-center">
            <BsMemory className="text-5xl" />
          </div>
          <div className="text-center">
            <h2 className="mt-9 text-xl text-center">RAM</h2>
          </div>
        </div>
      </div>
      <div className="group card w-72 bg-base-100 shadow-xl transform hover:scale-110 hover:shadow-2xl transition-transform duration-300 ease-in-out">
        <div className="card-body">
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
            <h2 className="mt-9 text-xl text-center">Power Supply Unit</h2>
          </div>
        </div>
      </div>
      <div className="group card w-72 bg-base-100 shadow-xl transform hover:scale-110 hover:shadow-2xl transition-transform duration-300 ease-in-out">
        <div className="card-body">
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
            <h2 className="mt-9 text-xl text-center">Storage Device</h2>
          </div>
        </div>
      </div>
      <div className="group card w-72 bg-base-100 shadow-xl transform hover:scale-110 hover:shadow-2xl transition-transform duration-300 ease-in-out">
        <div className="card-body">
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
            <h2 className="mt-9 text-xl text-center">Monitor</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoricCard;
