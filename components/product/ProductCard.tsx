/* eslint-disable @next/next/no-img-element */
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useAppDispatch } from "../../redux/hook";
import Link from "next/link";
import CartSVG from "../../shared/CartSVG";
import { IProduct } from "../../utils/type";
interface ProductCardProps {
  product: IProduct
  isInCart: IProduct | undefined
}

const ProductCard = ({ product, isInCart }: ProductCardProps) => {
  const dispatch = useAppDispatch();

  const { image, title, price, category } = product;

  return (
    <div className="flex flex-col" id="product__card">
      <div className="bg-lightGrey1 rounded-2xl p-1 relative flex items-center justify-center w-[250px] cursor-pointer">
        <img
          src={image}
          alt={title}
          className="h-[220px] w-[220px] object-contain"
        />

        <div
          className={`cart-btn absolute top-3 right-0 p-1 text-[28px] bg-yellow-200 rounded-[0.3rem] hover:bg-primaryColor hover:text-white ${
            isInCart && "hidden"
          }`}
          onClick={() => {
            dispatch(addToCart(product));
          }}
        >
          <CartSVG/>
        </div>
      </div>
      <h3 className="text-gray-500 mt-2 text-xs tracking-widest title-font mb-1">
        {category.toUpperCase()}
      </h3>
      <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
      <p className="font-[600] text-lg">${price}</p>
      <button className="btn btn-primary text-white bg-oceanblue p-2 rounded bottom-2 top-2">
        <Link href={`/product/${product.id}`}>See Details</Link>
      </button>
    </div>
  );
};

export default ProductCard;
