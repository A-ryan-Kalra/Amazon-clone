import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ProductsInformation } from "../data";
import { AnotherInfo } from "../data";
import starFull from "../src/img/star-full.png";
import starEmpty from "../src/img/star-empty.png";
import starHalfEmpty from "../src/img/star-half-empty.png";
import Image from "next/image";
import locationDart from "../src/img/location.svg";
import { LockClosedIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { setProductInfo } from "@/features/channelSlice";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { arr } from "@/features/channelSlice";
import ProductCategory from "./Search";
import {
  deliveryDate,
  currentDate,
  currentDay,
  currentMonth,
  day,
  month,
  Months,
} from "@/deliveryDate";
import Button from "@/pages/checkout";

function ProductDetails({ products }) {
  // const [image, setImage] = useState(products?.images || [])[0];
  const [image, setImage] = useState(products?.images[0]);
  const [ram, setRam] = useState(ProductsInformation.ram[1]);
  const [storage, setStorage] = useState(ProductsInformation.storage[0]);
  const [back, setBack] = useState(AnotherInfo);
  const [radiobtn, setRadiobtn] = useState(false);
  const [radiobtn1, setradiobtn1] = useState(true);
  const collection = useSelector((state) => state.product.collection);
  const dispatch = useDispatch();
  const router = useRouter();
  const [withExchange, withoutExchange] = useState();
  var mrp = products.price * 81 + (ram != "4 GB" ? specsPriceDetails(1) : 0);
  var priceProd = price(1);
  // console.log(quant);
  const setChannel = () => {
    dispatch(
      setProductInfo({
        id: products.id,
        stock: products.stock,
        productsName: products,
        quantity: 1,
        ram:
          products.category === "smartphones" || products.category === "laptops"
            ? ram
            : undefined,
        storage:
          products.category === "smartphones" || products.category === "laptops"
            ? storage
            : undefined,
        price: priceProd,
      })
    );
    router.push("/cart/");
  };
  let x = Math.random() * 10;

  const setRadio = () => {
    if (radiobtn) {
      setRadiobtn(false);
      setradiobtn1(true);
    }
  };
  const setRadio1 = () => {
    if (radiobtn1) {
      setradiobtn1(false);
      setRadiobtn(true);
    }
  };

  const getStars = () => {
    const stars = [];

    const rating = Math.floor(products.rating);

    const dec = products.rating - rating;

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

  useEffect(() => {
    if (ram === "4 GB") {
      setStorage(ProductsInformation.storage[0]);
    }
  }, [ram]);
  function specsPriceDetails() {
    switch (true) {
      case ram === "4 GB" && storage === "128 GB":
        return 0;
      case ram === "8 GB" && storage === "128 GB":
        return 3000;
        break;
      case ram === "8 GB" && storage === "256 GB":
        return 6000;
        break;
      case ram === "8 GB" && storage === "512 GB":
        return 9200;
        break;
      case ram === "16 GB" && storage === "128 GB":
        return 5100;
        break;
      case ram === "16 GB" && storage === "256 GB":
        return 8200;
        break;
      case ram === "16 GB" && storage === "512 GB":
        return 11200;
        break;
      default:
        0;
    }
  }
  function price() {
    switch (true) {
      case ram === "4 GB" && storage === "128 GB":
        return (
          products.price * 81 -
          ((products.price * products.discountPercentage) / 100) * 81
        );
        break;
      case ram === "8 GB" && storage === "128 GB":
        return (
          products.price * 81 -
          ((products.price * products.discountPercentage) / 100) * 81 +
          (3000 - (3000 * products.discountPercentage) / 100)
        );
        break;
      case ram === "8 GB" && storage === "256 GB":
        return (
          products.price * 81 -
          ((products.price * products.discountPercentage) / 100) * 81 +
          (6000 - (6000 * products.discountPercentage) / 100)
        );
        break;
      case ram === "8 GB" && storage === "512 GB":
        return (
          products.price * 81 -
          ((products.price * products.discountPercentage) / 100) * 81 +
          (9200 - (9200 * products.discountPercentage) / 100)
        );
        break;
      case ram === "16 GB" && storage === "128 GB":
        return (
          products.price * 81 -
          ((products.price * products.discountPercentage) / 100) * 81 +
          (5100 - (5100 * products.discountPercentage) / 100)
        );
        break;
      case ram === "16 GB" && storage === "256 GB":
        return (
          products.price * 81 -
          ((products.price * products.discountPercentage) / 100) * 81 +
          (8200 - (8200 * products.discountPercentage) / 100)
        );
        break;
      case ram === "16 GB" && storage === "512 GB":
        return (
          products.price * 81 -
          ((products.price * products.discountPercentage) / 100) * 81 +
          (11200 - (11200 * products.discountPercentage) / 100)
        );
        break;
      default:
        0;
    }
  }

  return (
    <div className="  before:absolute  before:inset-0 before:bg-white before:z-[-10] mt-10 mx-auto mb-[122px] w-[1550px]   ">
      <div className="relative flex   w-fit top-10  ">
        <div className=" w-fit flex">
          <div className="flex   flex-col space-y-5 ml-5 transition ease-in duration-200 mt-10">
            {products &&
              products?.images?.map((product, index) => (
                <button
                  key={index}
                  id={product.id}
                  className="h-fit   hover:shadow-[#b530c9] transition ease-in duration-200 shadow hover:shadow-md active:scale-90  shadow-current cursor-pointer object-cover  w-[68px] border-2 hover:border-[#d488e0]  focus:border-[#d488e0]  focus:border-[3px]  "
                  onClick={() => setImage(product)}
                >
                  <img
                    src={product}
                    alt="product"
                    className="object-cover w-[78px]"
                  />
                </button>
              ))}
          </div>

          <div className="p-5 ml-4 bg-white ">
            <img
              src={image}
              className=" h-[437px] w-[600px] object-contain  "
              alt=""
            />
          </div>
        </div>
        <div className=" flex-col flex left-3 relative ">
          <div className="w-fit">
            {products.category === "smartphones" && (
              <p className="text-xl font-bold">
                {products.title +
                  ` (${ram}/` +
                  (ram === "4 GB" ? "128 GB)" : `${storage})`)}
              </p>
            )}
            {products.category === "laptops" && (
              <p className="text-xl font-bold">
                {products.title +
                  ` (${ram}/` +
                  (ram === "4 GB" ? "128 GB)" : `${storage})`)}
              </p>
            )}
            {products.category !== "smartphones" &&
              products.category !== "laptops" && (
                <p className="text-xl font-bold">{products.title}</p>
              )}
            <a
              rel="nofollow"
              className="text-sm font-medium groupOrange text-[#2F7284]"
              href=""
            >{`Visit the ${products.brand} Store`}</a>

            <div className=" flex text-[14px] mr-1 font-medium cursor-default">
              {products.rating}
              <div className="-mt-[2px] ml-1 cursor-pointer">{getStars()}</div>
            </div>
          </div>
          <hr className="border-[1px]   border-gray-300 " />
          <div className="flex-col flex space-y-3">
            <p className="text-xl mt-2 font-medium">
              <span className="mr-2 text-md text-red-500 font-serif">{`${products.discountPercentage}%`}</span>
              {"₹" +
                price(1).toLocaleString("en-IN", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
            </p>
            <span className="text-xs text-[#565959]">
              <span>M.R.P. : </span>
              <span className="line-through">
                {"₹" +
                  (
                    products.price * 81 +
                    (ram != "4 GB" ? specsPriceDetails(1) : 0)
                  ).toLocaleString("en-IN", {})}
              </span>
            </span>
            <p className="text-sm font-medium">Inclusive of all taxes</p>

            <div className="items-center  relative cursor-default group bottom-1 whitespace-nowrap w-fit   flex">
              <img src="/img/cart.svg" className="inline  w-5 h-10" alt="" />
              <span>{products.stock}</span>
              <span className="absolute shadow-md  hidden  top-8 left-8 bg-[#f9f9f9] group-hover:inline border-2 p-1 transition delay-0 group-hover:delay-75 cursor-default text-xs">{`${products.stock} left in stock`}</span>
            </div>

            <span className=" w-[440px]">{products.description}</span>
            <hr className="border-[1px]   border-gray-300" />
          </div>
          <div className="mt-2">
            <ul className="flex space-x-3">
              <li className=" flex-col flex items-center   ">
                <img
                  className="w-[50px] cursor-pointer object-cover h-[40px]"
                  src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png"
                  alt="img"
                />
                <span className="text-xs text-[#459ca5] font-medium mt-2 cursor-default">
                  Free Delivery
                </span>
              </li>
              <li className=" flex-col flex items-center justify-center  ">
                <img
                  className="w-[50px]  cursor-pointer object-cover h-[40px]"
                  src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"
                  alt="img"
                />
                <span className="text-xs w-20 text-center  text-[#459ca5] font-medium mt-2 cursor-default">
                  7 days Replacement
                </span>
              </li>
              <li className=" flex-col flex items-center   ">
                <img
                  className="w-[50px] cursor-pointer object-cover h-[40px]"
                  src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png"
                  alt="img"
                />
                <span className="text-xs w-20 text-center text-[#459ca5] font-medium mt-2 cursor-default">
                  1 Year Warranty
                </span>
              </li>
              <li className=" flex-col flex items-center   ">
                <img
                  className="w-[50px] cursor-pointer object-cover h-[40px]"
                  src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB617044271_.png"
                  alt="img"
                />
                <span className="text-xs w-20 text-center text-[#459ca5] font-medium mt-2 cursor-default">
                  Top Brand
                </span>
              </li>
              <li className=" flex-col flex items-center   ">
                <img
                  className="w-[50px] cursor-pointer object-cover h-[40px]"
                  src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/Secure-payment._CB650126890_.png"
                  alt="img"
                />
                <span className="text-xs w-20 text-center text-[#459ca5] font-medium mt-2 cursor-default">
                  Secure Transaction
                </span>
              </li>
            </ul>
            <hr className="border-[1px] mt-2 border-gray-300    " />
          </div>
          {(products.category === "laptops" ||
            products.category === "smartphones") && (
            <div className="flex-col flex mt-2">
              <div className="text-sm text-gray-600">
                Size:{" "}
                <span className="text-black font-medium">
                  {`${ram}/` + (ram === "4 GB" ? "128 GB" : `${storage}`)}
                </span>
              </div>

              <div className="space-x-2 mt-5">
                {ProductsInformation.ram.map((index1, index) => (
                  <button
                    key={index}
                    className="border-2 p-2 text-sm  hover:border-orange-500 focus:border-orange-500 "
                    onClick={() => setRam(index1)}
                  >
                    {index1}
                  </button>
                ))}
              </div>

              <div className="space-x-2 mt-5">
                {back.map((index1, index) => (
                  <button
                    key={index}
                    className={`border-2  p-2 text-sm disabled:cursor-not-allowed disabled:bg-slate-400 hover:border-orange-500 focus:border-orange-500 `}
                    disabled={ram === "4 GB" ? true : false}
                    onClick={() => setStorage(index1.ssd)}
                  >
                    {index1.ssd}
                  </button>
                ))}
              </div>
              <hr className="border-[1px] mt-3 border-gray-300  " />
            </div>
          )}
          <div>
            <table className="  w-[400px] justify-between  mt-1  items-center ">
              <tfoot>
                <tr className="items-center   ">
                  <td className="font-bold font-mono">Brand</td>
                  <td className=" font-mono font-medium left-3">
                    {products.brand}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div
          className={`noExchange ${
            !radiobtn1 &&
            (products.category === "smartphones" ||
              products.category === "laptops")
              ? "hide"
              : ""
          } border-[2px]  flex-col flex  bg-white  border-gray-300/80 shadow-lg h-fit w-[270px] rounded-b-2xl   rounded-t-2xl ml-10`}
        >
          <div
            className={`exchange ${
              radiobtn &&
              (products.category === "smartphones" ||
                products.category === "laptops")
                ? "selected"
                : ""
            }   flex-col rounded-t-xl flex p-2 hover:bg-gray-200  group
          bg-gray-200/60 `}
            onClick={setRadio1}
          >
            <span
              className={`relative w-ful flex p-1 px-2 items-center group-hover:cursor-pointer 
            justify-between`}
            >
              <span className="text-sm font-bold">With Exchange</span>
              <form className="absolute right-1 top-1">
                <input
                  type="radio"
                  checked={radiobtn}
                  onChange={(e) => {}}
                  className=" scale-75
                   hover:appearance-none cursor-pointer checked:appearance-none
                     m-0 font-medium   w-[1.5rem] h-[1.5rem] checked:border-[#45726d] hover:border-[#45726d] checked:border-[0.4em] checked:ring-4 border-[0.3em] rounded-[50%] ring-blue-300 border-current  
                "
                />
              </form>
            </span>
            <p className="text-sm p-1 px-2 -mt-1 cursor-pointer text-[#B33320] font-medium ">
              Up to ₹
              {Math.floor(
                products.price * 81 +
                  (ram != "4 GB" ? specsPriceDetails(1) : 0) -
                  ((products.price * (products.discountPercentage + 30)) /
                    100) *
                    81
              ).toLocaleString("en-IN", {})}
              {" off"}
            </p>

            {(products.category === "smartphones" ||
              products.category === "laptops") &&
              radiobtn && (
                <div className="mt-3   rounded-xl  p-1 ">
                  <span className="flex mx-auto shadow-sm   hover:bg-blue-100/40 items-center justify-between p-1 border-2 cursor-pointer font-medium rounded-md w-[230px]">
                    <span className="   p-1 px-2 leading-3 r text-[12px] ">
                      Choose {products.category} to exchange
                    </span>
                    <ChevronRightIcon className="w-3" />
                  </span>
                  <span className="inline-block mt-3 text-[13px] ml-2 text-[#2E7384] font-medium">
                    How does Exchange work?
                  </span>
                </div>
              )}
          </div>

          <div className={`${radiobtn1 ? "" : "showBg"}`}>
            <div className="">
              <div
                className="flex-col flex p-2  cursor-pointer  backdrop: "
                onClick={setRadio}
              >
                <span className="relative w-ful flex p-1 px-2 items-center  justify-between">
                  <span className="text-sm font-bold">Without Exchange</span>
                  <form className="absolute right-1 top-1">
                    <input
                      type="radio"
                      checked={radiobtn1}
                      onChange={(e) => {}}
                      className=" scale-75
                   hover:appearance-none cursor-pointer checked:appearance-none
                     m-0 font-medium   w-[1.5rem] h-[1.5rem] checked:border-[#45726d] hover:border-[#45726d]  border-[#45726d] checked:border-[0.4em] checked:ring-4 border-[0.3em] rounded-[50%] ring-blue-300 border-current  
                "
                    />
                  </form>
                </span>{" "}
                <div className="flex -mt-1 items-center">
                  <p className=" text-[#B33320] font-medium text-sm p-1 px-2">
                    {"₹" +
                      price(1).toLocaleString("en-IN", {
                        maximumFractionDigits: 0,
                        minimumFractionDigits: 0,
                      })}
                  </p>
                  <p className="text-sm p-1  -ml-2  text-gray-500 font-medium line-through">
                    ₹
                    {(
                      products.price * 81 +
                      (ram != "4 GB" ? specsPriceDetails(1) : 0)
                    ).toLocaleString("en-IN", {})}
                  </p>
                </div>
              </div>
            </div>
            <div className={`${radiobtn ? "hidden" : ""} `}>
              <span className="p-2 flex-col flex   -mt-3">
                <div className="flex items-center">
                  <span className="groupOrange p-1 px-2 text-[#2F7284] text-[0.8rem] font-medium">
                    FREE delivery
                  </span>
                  <span className="text-[0.8rem] -ml-1 font-bold">
                    {deliveryDate}.
                  </span>
                </div>
                <p className="p-2 -mt-3 text-[0.8rem] groupOrange font-medium text-[#2F7284] cursor-pointer">
                  Details
                </p>
              </span>
              <div className="mx-4  ">
                <span className="  h-36 w-40 ">
                  <span className=" text-sm ">
                    Or fastest delivery
                    <span className="font-bold">
                      {" "}
                      Tomorrow{` ${currentDate + 1} ${Months[currentMonth]}`}.
                    </span>{" "}
                    Order within
                    <span className="text-[#3b6b08]"> 7 hrs 6mins.</span>
                    <p className=" text-[0.8rem] groupOrange font-medium text-[#2F7284] cursor-pointer">
                      Details
                    </p>
                  </span>
                </span>
              </div>
              <div className="w-fit ml-3 m-3 flex justify-center cursor-pointer items-center">
                <Image src={locationDart} width={18} height={10} alt="" />
                <p className="text-xs text-[#2F7284] ml-1 font-medium groupOrange">
                  Select delivery location
                </p>
              </div>
              <div className=" leading-3 mx-5">
                <p className="text-lg text-[#3F7706] font-medium">In stock</p>
                <span className="text-[0.9rem]  ">
                  Sold by <span></span>{" "}
                  <a
                    rel="nofollow"
                    className="text-sm font-medium groupOrange text-[#2F7284]"
                    href=""
                  >{`Visit the ${products.brand} Store Ltd`}</a>{" "}
                  and{" "}
                  <span className="text-sm font-medium groupOrange text-[#2F7284]">
                    Fullfiled by Shopify.
                  </span>
                </span>
              </div>
              <div className="mb-4">
                <div className="flex-col flex space-y-2 mt-2">
                  <button
                    className="mx-4 rounded-full cursor-pointer text-[0.8rem] pt-2 focus:ring-[3px] focus:ring-offset-1 text-center shadow-md  bg-[#FED826] hover:opacity-80 p-1"
                    onClick={setChannel}
                  >
                    Add to Cart
                  </button>

                  <Button
                    className={
                      "mx-4 pt-2  cursor-pointer focus:ring-[3px] focus:ring-offset-1  text-center shadow-md text-[0.8rem] p-1 hover:opacity-80 rounded-full bg-[#F4A22A]"
                    }
                    amt={Math.round(price(1))}
                    name={"Buy Now"}
                  ></Button>
                </div>
                <span className="flex items-center cursor-pointer mt-3 mx-4">
                  <LockClosedIcon width={18} className="text-[#989998]" />
                  <span className="text-[13px]  leading-3 font-medium ml-2 groupOrange mt-0.5 text-[#2F7284]">
                    Secure transaction
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
