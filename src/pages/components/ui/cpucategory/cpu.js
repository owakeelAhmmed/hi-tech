import Image from "next/image";

const CpuCategory = ({ allProduct }) => {
  const cpuProducts = allProduct?.filter(
    (product) => product.category === "Computer Processor"
  );

  return (
    <div className="mt-32 ">
      <div className="mb-11">
        <h1 className="text-center text-5xl font-bold">CPU Category</h1>
        <p className="text-center text-2xl">
          Get Your Desired Product from Featured Category!
        </p>
        <div className="justify-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-y-14">
          {cpuProducts?.map((product) => (
            <div className="" key={product.id}>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <Image
                    // src={product.image}
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{product.title}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions">
                    <button className="btn btn-sm text-white bg-[#eb3b5a]">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CpuCategory;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");

  const data = await res.json();

  return {
    props: {
      allProduct: data,
    },
  };
};