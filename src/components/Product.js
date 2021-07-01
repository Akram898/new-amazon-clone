import { useState } from "react";
import { starIcon, StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, price, description, category, image }) => {
  const [rating, setRating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.floor(Math.random() < 0.5));
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <img
        loading="lazy"
        alt={description}
        src={image}
        width={200}
        height={200}
        className="object-contain w-200 h-200"
        style={{ width: "200px !important", height: "200px !important" }}
      />

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
        <Currency quantity={price} currency="GBP" />
      </div>
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

      <button className="mt-auto button">Add to Basket</button>

      {/* {hasPrime && <p>has prime</p>} */}
    </div>
  );
};

export default Product;
