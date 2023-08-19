/* eslint-disable @next/next/no-img-element */

import { useGetProductsQuery } from "../../redux/api/apiSlice";
import Loader from "../../shared/Loader";
import { IProduct } from "../../utils/type";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import ProductCard from "./ProductCard";

const Products = () => {
  const { data: products, isLoading }: any = useGetProductsQuery(1);
  const cartItems = useAppSelector((state) => state.cart.products);

  if (isLoading) {
    return <Loader size={10} />;
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto bg-cyan">
        <div className="flex flex-wrap -m-4">
          {products?.map((product: IProduct) => (
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
  );
};

export default Products;
