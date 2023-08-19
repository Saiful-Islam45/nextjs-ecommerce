import React from "react";
import { IProduct } from "../../utils/type";
import { emptyCart } from "../../redux/features/cart/cartSlice";
import { useAppDispatch } from "../../redux/hook";
import { useRouter } from "next/router";

const CartSummary = ({ cartItems = [] }: { cartItems: IProduct[] }) => {
  const dispatch = useAppDispatch();
  const router= useRouter()
  return (
    <div
      className={`summary flex flex-col flex-[30%] bg-white rounded-xl xl p-5 h-fit shadow-lg my-5 lg:my-0 ${
        cartItems.length == 0 ? "hidden" : ""
      }`}
    >
      <h1 className="font-medium text-lg sm:text-xl">Order Summary</h1>

      <div className="border-b-[#ddd] border-b-[0.5px] py-2">Items</div>

      <div className="py-5 border-b-[#ddd] border-b-[0.5px]">
        {cartItems.map((product) => (
          <div key={product.id} className="flex justify-between mb-2">
            <div className="flex flex-col">
              <h1>{product.title}</h1>
              <p className="text-[grey] text-xs w-fit">{product.category}</p>
            </div>
            <h1 className="text-[#004] ">
              {product.quantity} x ${product.price}
            </h1>
          </div>
        ))}
      </div>

      <div className="py-5 mb-5 border-b-[#ddd] border-b-[0.5px]">
        <h1>From:</h1>
        <p className="text-[grey] mb-3">Badda, Dhaka, Bangladesh</p>
        <h1>To:</h1>
        <p className="text-[grey]">Badda, Dhaka, Bangladesh</p>
      </div>

      <div>
        <div className="flex justify-between">
          <p className="text-[grey] mb-3">Total Item(s)</p>
          <p className="text-[#004] mb-3">
            ${cartItems?.reduce((acc, a) => acc + a.price * a.quantity!, 0)}
          </p>
        </div>

        <div className="flex justify-between">
          <p className="text-[grey] mb-3">Fees</p>
          <p className="text-[#004] mb-3">$20.00</p>
        </div>
      </div>

      <div className="flex justify-between font-semibold text-[18px] px-1">
        <p className="">Total</p>
        <p className="">
          ${(cartItems?.reduce((acc, a) => acc + a.price * a.quantity!, 0) + 20).toFixed(2)}
        </p>
      </div>

      <div className="flex justify-between gap-2 mt-5">
        <button
          onClick={() => dispatch(emptyCart())}
          className="rounded-lg outline-none border border-[#ddd] py-1 px-5 flex-[50%] bg-yellow-400"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            dispatch(emptyCart())
            
            setTimeout(() => {
              alert("Your Product Purchase Done. Thank You!!!")
              router.push('/')
            },1000);

          }}
          className="rounded-lg outline-none border border-[#ddd] py-1 px-5 flex-[50%] bg-oceanblue solid"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
