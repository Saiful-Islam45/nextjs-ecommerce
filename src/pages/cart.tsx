import React, { ReactElement } from "react";
import Layout from "../../components/layout";
import { useAppSelector } from "../../redux/hook";
import { IProduct } from "../../utils/type";
import CartSection from "../../components/cart/CartSection";
import CartSummary from "../../components/cart/CartSummary";

const Cart = () => {
  const cartItems: IProduct[] = useAppSelector((state) => state.cart.products);

  return (
    <div
      id="cart"
      className="flex flex-col flex-wrap sm:flex-row sm:flex-nowrap w-[80%] m-auto mt-[4%] gap-[5%] "
    >
      <CartSection cartItems={cartItems} />

      <CartSummary cartItems={cartItems} />
    </div>
  );
};

Cart.getLayout = function getLayout(page: ReactElement) {
  return <Layout childern={page} title="home" />;
}; 
export default Cart