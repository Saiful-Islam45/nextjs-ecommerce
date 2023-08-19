/* eslint-disable @next/next/no-img-element */

import { useGetProductsQuery } from "../../redux/api/apiSlice";
import Loader from "../../shared/Loader";
import { ALL_CATEGORY, IProduct } from "../../utils/type";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import ProductCard from "./ProductCard";
import Filter from "./Filter";

const Products = () => {
  const { data: products, isLoading }: any = useGetProductsQuery(1);
  const { cart, filter } = useAppSelector((state) => state);
  const cartItems = cart.products;
  const filteredData =
  filter?.category.toLowerCase() === ALL_CATEGORY.toLowerCase()
      ? products
      : products?.filter(
          (product: IProduct) => product?.category.toLowerCase() === filter?.category.toLowerCase()
        );

  if (isLoading) {
    return <Loader size={10} />;
  }

  return (
    <>
      <Filter />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto bg-cyan">
          <div className="flex flex-wrap -m-4">
            {filteredData?.map((product: IProduct) => (
              <div
                className="relative lg:w-1/4 md:w-1/2 p-4 mb-2 w-full bg-white border rounded-md shadow-md hover:shadow-lg transition-shadow "
                key={"item" + product.id}
              >
                <ProductCard
                  key={product.id}
                  product={product}
                  isInCart={cartItems.find((p) => p.id == product.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
