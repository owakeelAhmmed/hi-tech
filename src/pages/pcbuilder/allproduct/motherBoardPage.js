/* eslint-disable react-hooks/rules-of-hooks */
import Image1 from "@/assets/Icon/cpu.png";
import Navbar from "@/components/shared/navbar";
import { addToProduct } from "@/redux/productSlice/productSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const MotherBoardPage = ({ allProduct }) => {
  const cpuProducts = allProduct?.filter(
    (product) => product.category === "Motherboard"
  );

  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToCart = (product) => {
    dispatch(addToProduct(product));
    router.push("/pcbuilder/pcbuilderpage");
  };

  return (
    <div className="h-[calc(100vh-80px)] max-w-7xl mx-auto">
      <Navbar />
      <div>
        {cpuProducts.map((product) => (
          <div
            key={product.id}
            className="m-10 w-1200 h-200 flex justify-between items-center border p-4 bg-base-100 shadow-xl"
          >
            <div className="w-50 h-200 rounded-full bg-cover bg-center">
              <Image
                style={{
                  width: "50px",
                  height: "50px",
                }}
                src={Image1}
                alt="Shoes"
              />
            </div>
            <div className="flex-grow w-600 p-4">
              <h1 className="text-xl font-semibold">{product.name}</h1>
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-gray-700">{product.detail}</p>
              <p className="text-gray-700">{product.price}</p>
              <p className="text-gray-700">{product.status}</p>
              <p className="text-gray-700">{product.rating}</p>
            </div>
            <button
              class="w-24 h-10 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none transition duration-300"
              onClick={() => handleAddToCart(product)}
            >
              ADD
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MotherBoardPage;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");

  const data = await res.json();

  return {
    props: {
      allProduct: data,
    },
  };
};
