/* eslint-disable @next/next/no-img-element */
import { addToCart, removeFromCart, removeOne } from "../../redux/features/cart/cartSlice";
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
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold">${product.price.toFixed(2)}</h1>
          <div
            className="py-1 px-2 rounded-lg bg-[red] text-center w-fit text-[14px] text-white hover:opacity-60 transition cursor-pointer"
            onClick={() => dispatch(removeFromCart(product))}
          >
            remove
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;