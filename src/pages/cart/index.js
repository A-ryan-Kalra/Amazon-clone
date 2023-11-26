import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { setProductInfo } from "@/features/channelSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Footer from "../../../components/Footer";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { incremented, decremented } from "@/features/counterSlice";
import {
  setQuantityPlus,
  quantityMinus,
  deleteItem,
} from "@/features/channelSlice";
import Button from "../checkout";

function Index() {
  const dispatch = useDispatch();
  let cartFromLocalStorage;
  const name = useSelector((state) => state.product.productsName);
  const price = useSelector((state) => state.product.price);
  const [cart, setCart] = useState(name);
  const [priceProd, setPrice] = useState(price);
  const storage = useSelector((state) => state.product.storage);
  var ram = useSelector((state) => state.product.ram);
  const id = useSelector((state) => state.product.id);
  var quantity = useSelector((state) => state.product.quantity);
  const stock = useSelector((state) => state.product.stock);
  const collection = useSelector((state) => state.product.collection);
  const [isDel, setDel] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isDecre, setDecre] = useState(false);
  //
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += quantity[i] * price[i];
  }
  // console.log(name);
  var check = 0;
  const router = useRouter();

  var [Quant, setQuant] = useState(0);
  const amt = Math.round(total);

  if (typeof window !== "undefined") {
  }
  function deselectAll() {
    localStorage.clear();
    router.reload("/cart");
  }
  function delItem(index) {
    dispatch(
      deleteItem({
        item: index,
      })
    );
    setDel(true);
    router.reload("/cart");
  }

  let quant;
  function inc(index) {
    dispatch(
      setQuantityPlus({
        check: index,
      })
    );
    setQuant(index);
  }
  function decr(index) {
    dispatch(
      quantityMinus({
        check1: index,
      })
    );
    setQuant(index);
    setDecre(true);
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("price", JSON.stringify(priceProd));
    localStorage.setItem("storage", JSON.stringify(storage));
    localStorage.setItem("ram", JSON.stringify(ram));
    localStorage.setItem("id", JSON.stringify(id));
    localStorage.setItem("stock", JSON.stringify(stock));
    localStorage.setItem("quantity", JSON.stringify(quantity));
    setDel(false);
    setIsClient(true); // to prevent hydration mismatch error
  }, [cart]);

  return (
    <div className="flex w-[100vw] min-h-[100vh]   ">
      <div className="flex bg-[#EAECEC] gap-5 w-[1550px] mx-auto  ">
        <div className="w-[1150px] bg-white h-fit mt-7 ml-7 p-2 mb-10">
          <div className="p-2 px-4 mt-3">
            {isClient && cart.length !== 0 ? (
              <div className="text-2xl mb-2 ">Shopping Cart</div>
            ) : (
              <div className="flex-col flex text-left space-y-4">
                <div className="text-3xl font-medium">Your Cart is empty.</div>
                <Link
                  className="text-sm groupOrange ml-1 text-[#2E7285]"
                  href="/"
                >
                  Continue Shopping
                </Link>
              </div>
            )}
            {isClient && cart.length !== 0 && (
              <div
                className="text-[13px] groupOrange text-[#2E7285]"
                onClick={() => deselectAll()}
              >
                Deselect all items
              </div>
            )}
            <hr className="border-[1px]  px-4" />
          </div>
          <div className=" flex-col -mt-4 p-2   space-y-2 ">
            {isClient &&
              cart?.map((item, index) => (
                <div
                  key={id}
                  className={` 
                  } flex relative space-x-2 h-60 p-2 after:bottom-0 after:absolute   after:border-[0.5px] after:[#DCDDDC] after:w-full after:right-2 `}
                >
                  <span className=" w-fit my-auto group  flex items-center h-full ">
                    <form className="  justify-center flex  ">
                      <input
                        type="checkbox"
                        className=" checked:ring-4 checked:ring-offset-4 ring-[#2F7385] rounded group-hover:appearance-none  m-0 checked:rounded-full font-medium scale-50 w-[2rem] h-[2rem] checked:appearance-none group-hover:opacity-80 group-hover:checked:opacity-90 checked:border-[0.5em]  group-hover:border-[#2F7385]    border-[0.5em] border-[#2F7385] "
                      />
                    </form>
                  </span>
                  <span className="  overflow-hidden p-1 w-[270px] h-[190px]  items-center  flex  ">
                    <a
                      target="_blank"
                      href={`/products/${item?.id}`}
                      rel="noopener noreferrer "
                    >
                      <img
                        className="cursor-pointer object-cover    max-h[90%]  "
                        src={item?.thumbnail}
                        alt=""
                      />
                    </a>
                  </span>
                  <span className=" relative flex-col flex left-1">
                    <span>
                      <ul className="flex-col flex space-y-3   ">
                        <li className="font-medium">{`${item?.title} ${
                          item.category === "smartphones" ||
                          item.category === "laptops"
                            ? "(" + ram[index] + "/" + storage[index] + ")"
                            : ""
                        }`}</li>
                        <li className="text-xs font-bold p-1 text-white w-fit bg-[#CF3F38] font-serif">
                          {item.discountPercentage + "% off"}
                        </li>
                        <li className="font-bold">
                          <span>
                            ₹
                            {price[index]?.toLocaleString("en-IN", {
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            })}
                          </span>
                        </li>
                        <li className="text-[#3F7607] text-sm font-medium">
                          In stock
                        </li>
                        {(item.category === "smartphones" ||
                          item.category === "laptops") && (
                          <li className="text-xs font-bold">
                            Size:{" "}
                            <span className="font-medium">
                              {storage[index]}
                            </span>
                          </li>
                        )}
                      </ul>
                    </span>
                    <span className="flex mt-2 w-fit">
                      <span className="flex items-center justify-center">
                        <ShoppingBagIcon className="w-5 text-gray-400" />
                        <span className="text-sm">{stock[index]}</span>
                      </span>
                    </span>
                    <span className=" flex mt-2 items-center">
                      <span className="mr-2">
                        <button
                          className="rounded-full px-3 shadow-md active:scale-90 bg-gray-200"
                          onClick={() => decr(index)}
                        >
                          -
                        </button>
                        <span className="px-2">{`${
                          index === Quant ? quantity[Quant] : quantity[index]
                        }`}</span>
                        <button
                          className="rounded-full px-3 shadow-md active:scale-90 bg-gray-200"
                          onClick={() => inc(index)}
                        >
                          +
                        </button>
                      </span>
                      <span className="font-thin text-gray-400 mr-2">|</span>

                      <span
                        className="groupOrange text-[#33798B] text-sm"
                        onClick={() => delItem(index)}
                      >
                        Delete
                      </span>
                    </span>
                  </span>
                </div>
              ))}
            {isClient && cart.length !== 0 && (
              <div className="text-right mr-10 mb-2 ">
                <span> {isClient && `Subtotal (${cart.length} items): `}</span>
                <span className="font-bold ml-1">
                  {isClient &&
                    ` ₹${total.toLocaleString("en-IN", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}`}
                </span>
              </div>
            )}
          </div>
        </div>
        {isClient && cart.length !== 0 && (
          <div className="mt-7 w-[290px] flex-col mr-10  px-3 h-[150px] bg-white">
            <div className="flex mt-3 py-4">
              <span> {`Subtotal (${cart.length} items):`}</span>
              <span className="font-bold ml-1">
                {isClient &&
                  ` ₹${total.toLocaleString("en-IN", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}`}
              </span>
            </div>
            <Button
              className="bg-[#FFD827] flex-grow shadow-md text-[13px] rounded-md py-2 mt-2 hover:bg-[#FFD827]/70 focus:ring-2 focus:ring-offset-2 active:scale-95  w-full px-4"
              name={"Proceed to Buy"}
              amt={amt}
            ></Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Index;
