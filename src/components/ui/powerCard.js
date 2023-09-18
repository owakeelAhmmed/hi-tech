import Image from "next/image";
import Link from "next/link";
import Image5 from "@/assets/Icon/pws.png";

const PowerCard = ({ selectedProducts }) => {
  return (
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
            <div>
              <div className="badge text-white bg-[#ff2652]">Required</div>
              <h1 className="text-center font-bold">Power Supply Unit</h1>
            </div>
            <div>
              <p>{selectedProducts[4]?.title}</p>
              <p>{selectedProducts[4]?.name}</p>
            </div>
          </div>
          <Link href="/pcbuilder/allproduct/powerUnitePage">
            <button className="btn btn-sm btn-primary ">Select</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PowerCard;
