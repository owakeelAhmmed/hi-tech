import Image from "next/image";
import Link from "next/link";
import Image5 from "@/assets/Icon/pws.png";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/redux/productSlice/productSlice";

const PowerCard = ({ selectedProducts }) => {
  const dispatch = useDispatch();
  const isProducts = selectedProducts.length > 4;

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart());
  };
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
          {isProducts ? (
            <button className="text-2xl text-red-500">
              <BsFillTrash3Fill onClick={handleRemoveFromCart} />
            </button>
          ) : (
            <Link href="/pcbuilder/allproduct/powerUnitePage">
              <button className="btn btn-sm btn-primary ">Select</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PowerCard;
