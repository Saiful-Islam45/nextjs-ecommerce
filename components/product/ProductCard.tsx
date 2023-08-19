/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { faOpencart } from "@fortawesome/free-brands-svg-icons";
import { useAppDispatch } from "../../redux/hook";
import Link from "next/link";
import CartSVG from "../../shared/CartSVG";

const ProductCard = ({ product, isInCart }) => {
  const dispatch = useAppDispatch();

  const { image, title: name, price, category, desc } = product;

  return (
    <div className="flex flex-col" id="product__card">
      <div className="bg-lightGrey1 rounded-2xl p-1 relative flex items-center justify-center w-[250px] cursor-pointer">
        <img
          src={image}
          alt={name}
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
          <CartSVG />
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </div>
      </div>
      <h3 className="text-gray-500 mt-2 text-xs tracking-widest title-font mb-1">
        {category.toUpperCase()}
      </h3>

      <h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
      <p className="text-[grey] w-[200px]">{desc}</p>

      <p className="font-[600] text-lg">${price}</p>
      <button className="btn btn-primary text-white bg-oceanblue p-2 rounded bottom-2 top-2">
        <Link href={`/product/${product.id}`}>See Details</Link>
      </button>
    </div>
  );
};

export default ProductCard;
