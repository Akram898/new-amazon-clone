import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

const CheckoutProduct = ({
  id,
  title,
  price,
  description,
  rating,
  category,
  image,
  hasPrime,
}) => {
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

  const removeItemFromBasket = () => {
    //remove item from redux
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <div className="grid grid-cols-5">
        <img
          src={image}
          height={200}
          width={200}
          objectFit="contain"
          className="object-contain w-200 h-200"
          style={{
            width: "200px !important",
            height: "200px !important",
          }}
        />

        <div className="col-span-3 mx-5">
          <p>{title}</p>
          <div className="flex">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarIcon className="h-5 text-yellow-500" />
              ))}
          </div>
          <p className="text-xs my-2 line-clamp-3">{description}</p>
          <Currency quantity={price} currency="USD" />
          {
            hasPrime && (
              <div className="flex items-center space-x-2">
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

        {/*Rigth Area*/}

        <div className="flex flex-col space-y-2 my-auto justify-self-end">
          <button className="button" onClick={addItemsToBasket}>
            Add to Basket
          </button>
          <button className="button" onClick={removeItemFromBasket}>
            Remove from Basket
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CheckoutProduct;
