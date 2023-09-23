/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/shared/navbar";
import Link from "next/link";

const RamCategory = ({ allProduct }) => {
  const cpuProducts = allProduct?.filter(
    (product) => product.category === "RAM"
  );

  return (
    <div className="h-[calc(100vh-80px)] max-w-7xl mx-auto">
      <Navbar />
      <div className="mt-32 ">
        <div className="mb-11">
          <h1 className="text-center text-5xl font-bold">RAM Category</h1>
          <p className="text-center text-2xl">
            Get Your Desired Product from Featured Category!
          </p>
          <div className="justify-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-y-14">
            {cpuProducts?.map((product) => (
              <div className="" key={product.id}>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      width={200}
                      height={200}
                      src={product.image}
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{product.title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                      <button className="btn btn-sm btn-primary">
                        <Link href={`/detail/${product.id}`}>More Details</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RamCategory;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");

  const data = await res.json();

  return {
    props: {
      allProduct: data.data,
    },
  };
};
