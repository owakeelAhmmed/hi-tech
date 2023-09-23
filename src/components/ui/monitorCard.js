/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import Image3 from "@/assets/Icon/monitor.png";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/redux/productSlice/productSlice";

const MonitorCard = ({ selectedProducts }) => {
  const dispatch = useDispatch();
  const isProducts = selectedProducts.length > 2;

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart());
  };

  return (
    <div className="flex justify-items-center-items-center ml-4 mr-4">
      <figure>
        {selectedProducts[2] ? (
          <img
            width={80}
            height={80}
            src={selectedProducts[2].image}
            alt="Image"
            className="rounded-xl max-w-none"
          />
        ) : (
          <Image
            style={{
              width: "50px",
              height: "50px",
            }}
            src={Image3}
            alt="Shoes"
          />
        )}
      </figure>
      <div className="card-body ">
        <div className="flex items-center justify-between">
          <div className="flex justify-around gap-x-2">
            <div>
              <div className="badge text-white bg-[#ff2652]">Required</div>
              <h1 className="text-center font-bold">Monitor</h1>
            </div>
            <div>
              <p>{selectedProducts[2]?.title}</p>
              <p>{selectedProducts[2]?.name}</p>
              <p>{selectedProducts[2]?.price}</p>
            </div>
          </div>
          {isProducts ? (
            <button className="text-2xl text-red-500">
              <BsFillTrash3Fill onClick={handleRemoveFromCart} />
            </button>
          ) : (
            <Link href="/pcbuilder/allproduct/monitorPage">
              <button className="btn btn-sm btn-primary ">Select</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MonitorCard;
