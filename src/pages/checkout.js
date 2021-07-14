import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/client";

const Checkout = ({ id, title, price, description, category, image }) => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const [session] = useSession();

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-screen-xl mx-auto">
        {/* left Side */}
        <div className="left-top-dev flex-grow shadow-sm m-5 md:mb-0">
          <Image
            src={"https://links.papareact.com/ikj"}
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0 ? "Basket is Empty" : "Shopping Basket"}
            </h1>

            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div>
          {items.length > 0 && (
            <div className="flex flex-col bg-white p-10 shadow-md h-auto sticky top-20">
              <h2 className="whitespace-nowrap">
                Subtoatal ({items.length} items):{" "}
                <span className="font-bold">
                  <Currency quantity={total} currency="USD" />
                </span>
              </h2>
              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "sign in to checkout" : "Proceed to Checkout"}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
