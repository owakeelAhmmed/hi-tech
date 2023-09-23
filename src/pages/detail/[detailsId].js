/* eslint-disable @next/next/no-img-element */

import Navbar from "@/components/shared/navbar";

const DetailPage = ({ productDetail }) => {
  const statusClass = productDetail?.status ? "text-green-600" : "text-red-600";
  return (
    <div className="h-[calc(100vh-80px)] max-w-7xl mx-auto">
      <Navbar />
      <div className="bg-base-200">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <div className="">
              <img
                width={300}
                height={300}
                src={productDetail.image}
                alt="Shoes"
              />
            </div>
            <div>
              <div className="card w-[600px] bg-gray-50 text-black">
                <div className="card-body">
                  <h2 className="card-title">{productDetail.name}</h2>
                  <h2 className="card-title">{productDetail.title}</h2>
                  <p>{productDetail.category}</p>
                  <p>{productDetail.detail}</p>
                  <p>price: {productDetail.price}</p>
                  <p>
                    Availability:{" "}
                    <span className={statusClass}>
                      {productDetail?.status ? "In Stock" : "Out of Stock"}
                    </span>
                  </p>
                  <p>{productDetail.rating}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/details");
  const products = await res.json();
  console.log(products);

  const paths = products.map((detail) => ({
    params: { detailsId: detail._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `http://localhost:3000/api/products/${params.detailsId}`
  );
  const products = await res.json();

  return {
    props: {
      productDetail: products.data,
    },
  };
};
