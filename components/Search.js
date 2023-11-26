import Image from "next/image";
import React from "react";
import starFull from "../src/img/star-full.png";
import starEmpty from "../src/img/star-empty.png";
import starHalfEmpty from "../src/img/star-half-empty.png";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  deliveryDate,
  currentDate,
  currentDay,
  currentMonth,
  day,
  month,
  Months,
} from "@/deliveryDate";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

function Search({ id, search = [{ thumbnail: "" }] }) {
  const price = useSelector((state) => state.product.price);
  const [priceProd, setPrice] = useState(price);

  // console.log(deliveryDate + "here");
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(search.rating);
    const dec = search.rating - rating;
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <Image
            src={starFull}
            className="inline "
            key={i}
            width={20}
            alt="star"
          />
        );
      } else if (dec >= 0.5) {
        stars.push(
          <Image
            src={starHalfEmpty}
            className="inline "
            key={i}
            width={20}
            alt="star"
          />
        );
      } else {
        stars.push(
          <Image
            src={starEmpty}
            className="inline"
            key={i}
            alt="star"
            width={20}
          />
        );
      }
    }
    return stars;
  };
  const priceRound = Math.floor();
  return (
    <div className=" rounded ml-auto shadow-md hover:border-fuchsia-600 border-2 w-[1300px] mr-10">
      <a className="cursor-default" href={`/products/${search?.id}`}>
        <div className=" mx-auto flex   rounded ">
          <a
            target="_blank"
            href={`/products/${search?.id}`}
            rel="noopener noreferrer "
          >
            <div className="px-4 rounded bg-[#efeded] w-fit">
              <div
                id="image"
                className="w-[390px] rounded  h-[240px] bg-cover"
                style={{ backgroundImage: `url(${search.thumbnail})` }}
              ></div>
            </div>
          </a>
          <div className="flex flex-col ml-3 p-1 space-y-2 ">
            <a
              target="_blank"
              href={`/products/${search?.id}`}
              rel="noopener noreferrer "
            >
              <div className="hover:text-orange-500 text-xl font-medium">
                {search.title}
              </div>
            </a>
            <div>{getStars()}</div>
            <span className="mt-2 inline-block ">
              <span className="text-xl font-bold">
                {"₹" +
                  (
                    search.price * 81 -
                    ((search.price * search.discountPercentage) / 100) * 81
                  ).toLocaleString("en-IN", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
              </span>
              <span className="ml-1 text-[#7A7D7C] font-medium">
                <span className="text-xs">M.R.P: </span>
                <span className="text-xs line-through">
                  {" "}
                  {(search.price * 81).toLocaleString("en-IN", {
                    maximumFractionDigits: 0,
                    minimumFractionDigits: 0,
                  })}
                </span>
              </span>
            </span>
            <div className="text-xs font-bold p-1 text-white w-fit bg-[#CF3F38] font-serif">
              {search.discountPercentage + "% off"}
            </div>
            <div className="text-[#3F7607] text-md font-medium">In stock</div>
            <span>
              <span className="text-sm">Free Delivery </span>
              <span className="text-sm font-bold">{deliveryDate}</span>
            </span>
            <div className="flex">
              <ShoppingBagIcon className="w-5 text-gray-400" />
              <span>{search.stock}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Search;
