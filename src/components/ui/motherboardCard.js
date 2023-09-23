/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import Image2 from "@/assets/Icon/motherboard.png";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/redux/productSlice/productSlice";

const MotherboardCard = ({ selectedProducts }) => {
  const dispatch = useDispatch();
  const isProducts = selectedProducts.length > 1;

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart());
  };

  return (
    <div className="flex justify-items-center-items-center ml-4 mr-4">
      <figure>
        {selectedProducts[1] ? (
          <img
            width={80}
            height={80}
            src={selectedProducts[1].image}
            alt="Image"
            className="rounded-xl max-w-none"
          />
        ) : (
          <Image
            style={{
              width: "50px",
              height: "50px",
            }}
            src={Image2}
            alt="Shoes"
          />
        )}
      </figure>
      <div className="card-body ">
        <div className="flex items-center justify-between">
          <div className="flex justify-around gap-x-2">
            <div>
              <div className="badge text-white bg-[#ff2652]">Required</div>
              <h1 className="text-center font-bold">Motherboard</h1>
            </div>
            <div>
              <p>{selectedProducts[1]?.title}</p>
              <p>{selectedProducts[1]?.name}</p>
              <p>{selectedProducts[1]?.price}</p>
            </div>
          </div>
          {isProducts ? (
            <button className="text-2xl text-red-500">
              <BsFillTrash3Fill onClick={handleRemoveFromCart} />
            </button>
          ) : (
            <Link href="/pcbuilder/allproduct/motherBoardPage">
              <button className="btn btn-sm btn-primary ">Select</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MotherboardCard;
