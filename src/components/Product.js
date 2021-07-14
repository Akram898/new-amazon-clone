import { useState } from "react";
import { starIcon, StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { ColorSwatchIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, price, description, category, image }) => {
  const dispatch = useDispatch();
  const addItemsToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };

    //Sending the product as an action to the Redux store.. the basket slice
    dispatch(addToBasket(product));
  };

  const [rating, setRating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.floor(Math.random() < 0.5));
  // var colors = ["red", "blue", "green", "yellow"];
  // const selectColor = colors[Math.floor(Math.random() * selectColor.length)];

  // const selectColor = Math.floor(Math.random() * colors.length);
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 shadow-md">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <div className="img-contain flex justify-center items-center object-contain w-200 h-200 overflow-hidden">
        <img
          loading="lazy"
          alt={description}
          src={image}
          width={200}
          height={200}
          className="object-contain w-200 h-200 transform-gpu duration-300 hover:scale-150"
          style={{
            width: "200px !important",
            height: "200px !important",
          }}
        />
      </div>

      <h4 className="flex">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className={"text-xs my-2 line-clamp-2"}>{description}</p>

      <div className="mb-5">
        <Currency quantity={price} currency="USD" />
      </div>
      {/* <div className="colors flex space-x-1">
        <div
          className="rounded-full h-12 w-12"
          style={{ background: { selectColor } }}
        ></div>
        <div
          className="rounded-full h-12 w-12"
          style={{ background: { selectColor } }}
        ></div>
      </div> */}
      <div className="main-has-prime">
        {
          hasPrime && (
            <div className="flex items-center space-x-2 -mt-5">
              <img
                src="https://links.papareact.com/fdw"
                alt="Have Prime"
                loading="lazy"
                className="w-12"
              />
              <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
            </div>
          )
          //   if(hasPrime ===0){
          //     $".main-has-prime".css('display','none')
          //     }
        }
      </div>

      <button onClick={addItemsToBasket} className="mt-auto button">
        Add to Basket
      </button>

      {/* {hasPrime && <p>has prime</p>} */}
    </div>
  );
};

export default Product;
