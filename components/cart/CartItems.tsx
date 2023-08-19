/* eslint-disable @next/next/no-img-element */
import {
  addToCart,
  removeFromCart,
  removeOne,
} from "../../redux/features/cart/cartSlice";
import { useAppDispatch } from "../../redux/hook";
import { IProduct } from "../../utils/type";

const CartItem = ({ product }: { product: IProduct }) => {
  const dispatch = useAppDispatch();
  const { category, image, title, quantity, id } = product;

  return (
    <div className="flex h-[200px] border-b-[#ddd] border-b-[0.5px] p-5 mt-5 gap-5">
      <div className="bg-lightGrey1 w-[100px] h-[100px] flex justify-center items-center rounded-2xl">
        <img
          src={image}
          alt="img"
          className="w-[80px] h-[80px] object-contain"
        />
      </div>

      <div className="flex flex-[50%] flex-col gap-1">
        <p className="text-[grey] w-[200px]">{category}</p>
        <h1 className="text-textColor font-semibold">{title}</h1>
      </div>
      <div className="actions border-l-[1px] border-lightGrey2 h-[85%] flex flex-col justify-between pl-5">
        <div className="flex rounded-lg border border-[#ddd]">
          <button
            onClick={() => {
              quantity! > 1 && dispatch(removeOne(product));
            }}
            className={`${quantity == 1 ? "opacity-40" : ""}`}
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            onClick={() => {
              dispatch(addToCart(product));
            }}
          >
            +
          </button>
          <div
            className="py-1 px-2  items-center text-center mt-2 w-fit text-[14px] text-white hover:opacity-60 transition cursor-pointer"
            onClick={() => dispatch(removeFromCart(product))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              fill="red"
              viewBox="0 0 448 512"
            >
              <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold">${product.price.toFixed(2)}</h1>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
