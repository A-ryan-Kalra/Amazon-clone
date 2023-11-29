import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faSearch,
  faCaretDown,
  faCartShopping,
  faBars,
  faL,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchedItem } from "@/features/channelSlice";
import { useRef } from "react";
import Layout from "./Layout";

function Nav() {
  const [url, setUrl] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputHistory, setInputHistory] = useState([]);
  const [toggle, setToggle] = useState(false);
  <Layout toggle={toggle} />;
  const dispatch = useDispatch();
  const loseFocus = useRef(null);
  const router = useRouter();
  const name = useSelector((state) => state.product.productsName);
  const [isClient, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);

  const inputHandler = (e) => {
    e.preventDefault();
    setOnFocus(true);
    setUrl(e.target.value);

    setInputValue(e.target.value);
  };
  const historyRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "scroll";
    // document.documentElement.style.overflow = "scroll";
    if (toggle) {
      // console.log("body overflow");
      document.body.style.overflow = "hidden";
    }
  }, [toggle]);

  var savedHistory = (
    <div
      ref={historyRef}
      className="w-full absolute text-black  z-[100] bg-white rounded top-[45px]"
    >
      <div className="flex-col rounded bg-white flex">
        {inputHistory.map((id, index) => (
          <div
            key={index}
            onClick={() => selectedItemFromSearch(id, event)}
            className=" p-1 px-2 rounded hover:bg-gray-200 hover:rounded"
          >
            {id}
          </div>
        ))}
      </div>
    </div>
  );
  const [onFocus, setOnFocus] = useState(false);
  function selectedItemFromSearch(id, event) {
    // router.reload();
    // console.log(id);
    getServerSideProps(event);
    setUrl(id);
  }
  async function getServerSideProps(event) {
    event.preventDefault();
    loseFocus.current.blur();
    setOnFocus(false);
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${url}&select=title,price,thumbnail,rating,stock,brand,discountPercentage`
    );
    setInputHistory([...inputHistory, inputValue]);
    const search = await res.json();
    dispatch(
      searchedItem({
        item: search.products,
      })
    );
    router.push("/search");
  }

  const selectedCategory = (e) => {
    if (e.target.value === "/") {
      router.push("/");
      // console.log("/");
    } else {
      router.push(`/category/${e.target.value}`);
    }
    setUrl("");
  };
  const escapeFocus = (e) => {
    if (e.key === "Escape") {
      loseFocus.current.blur();
      setOnFocus(false);
    }
  };

  return (
    <div className=" mx-auto relative w-[1550px]">
      {isClient && (
        <div>
          <nav className="bg-[#131921]  box-border flex flex-col">
            <div className="flex ml-3 space-x-3">
              <div
                className="hover:border-[1px] border-[1px] hover:border-white border-transparent p-2 mt-1 mb-1 w-max"
                onClick={() => setUrl("")}
              >
                <Link href="/" className="flex  items-center">
                  <Image
                    alt="logo"
                    src="/img/shopify.png"
                    width={40}
                    height={44}
                  />
                  <p className="text-lg text-white">eBag</p>
                </Link>
              </div>
              <div className="hover:border-[1px] border-[1px] hover:border-white border-transparent mt-1 mb-1">
                <Link href="/" className="relative ">
                  <span className="text-gray-300 text-xs ml-5 top-3 absolute inline-block ">
                    Hello
                  </span>
                  <span className=" flex space-x-1 font-bold text-white mt-6 ">
                    <FontAwesomeIcon className="text-xl" icon={faLocationDot} />

                    <span className="text-sm"> Select your address</span>
                  </span>
                </Link>
              </div>
              <div id="nav-search" className="pl-3   mb-1">
                <div className="flex items-center mt-2">
                  <div>
                    <form className="w-[130px] ">
                      <select
                        className="w-full text-sm p-1 rounded-l-md h-[44px]"
                        name="Categories"
                        id="Categories"
                        onChange={selectedCategory}
                      >
                        <option value="/">All</option>
                        <option value="mens-shoes">shoes</option>
                        <option value="smartphones">Mobiles</option>
                        <option value="automotive">Automotive</option>
                        <option value="laptops">Laptops</option>
                        <option value="furniture">Furniture</option>
                        <option value="tops">Tops</option>
                      </select>
                    </form>
                  </div>

                  <div className="relative">
                    <form>
                      <input
                        ref={loseFocus}
                        onFocus={() => setOnFocus(true)}
                        onKeyDown={escapeFocus}
                        onChange={inputHandler}
                        size={52}
                        className="p-[10px]"
                        onMouseDown={() => setOnFocus(false)}
                        type="text"
                        value={url}
                        placeholder="Search your product here "
                      />
                      {/* {onFocus && savedHistory} */}

                      <button
                        className="active:scale-95  bg-[#f2bb3a] p-2 w-[45px] h-[44px]  items-center rounded-r-md"
                        type="submit "
                        onClick={getServerSideProps}
                      >
                        <FontAwesomeIcon
                          className="text-black text-xl  
                     cursor-pointer"
                          icon={faSearch}
                        />
                      </button>
                    </form>
                  </div>
                  <div
                    className="ml-4 hover:border-[1px] border-[1px]
                 hover:border-white border-transparent relative
                  p-3  z-10
                  box-border cursor-pointer group"
                  >
                    <span className="flex items-center space-x-1  ">
                      <span id="flag">
                        <Image
                          alt="flag"
                          src="/img/flag.svg"
                          width={20}
                          height={30}
                        />
                      </span>
                      <span className="text-white text-xs font-bold">EN</span>
                      <span>
                        <FontAwesomeIcon
                          className="text-gray-400 text-xs"
                          icon={faCaretDown}
                        />
                      </span>
                      <div
                        className="dropdown-content 
                     -left-1 top-12 bg-white p-2 absolute shadow-2xl rounded-xl  group-hover:block hidden group-hover:duration-500"
                      >
                        <div className="flex  flex-col space-y-2  h-max w-[30vh]">
                          <a
                            href="#"
                            className="space-x-1 items-center   border-transparent w-max  hover:border-white hover:border-b-[1px] border-b-[1px]"
                          >
                            <span>
                              {" "}
                              <label htmlFor="lang" className="space-x-1">
                                <input
                                  id="lang"
                                  name="lang"
                                  type="radio"
                                  checked
                                  onChange={(e) => {}}
                                />
                                <span className="groupOrange text-black   text-sm">
                                  English - EN
                                </span>
                              </label>
                            </span>
                          </a>
                          <hr className="border-gray-600" />

                          <a
                            href="#"
                            className="space-x-1    border-transparent w-max  hover:border-white hover:border-b-[1px] border-b-[1px]"
                          >
                            <span>
                              <label htmlFor="lang1">
                                <input id="lang1" name="lang" type="radio" />
                                <span className="groupOrange text-black  text-sm">
                                  {" "}
                                  हिन्दी - HI
                                </span>
                              </label>
                            </span>
                          </a>

                          <a
                            href="#"
                            className="space-x-1   border-transparent w-max  hover:border-white hover:border-b-[1px] border-b-[1px]"
                          >
                            <span>
                              <label htmlFor="TA">
                                <input id="TA" name="lang" type="radio" />
                                <span className="groupOrange text-black  text-sm">
                                  {" "}
                                  தமிழ் - TA
                                </span>
                              </label>
                            </span>
                          </a>

                          <a
                            href="#"
                            className="space-x-1   border-transparent w-max  hover:border-white hover:border-b-[1px] border-b-[1px]"
                          >
                            <span>
                              <label htmlFor="TE">
                                <input id="TE" name="lang" type="radio" />
                                <span className="groupOrange text-black  text-sm">
                                  {" "}
                                  తెలుగు - TE
                                </span>
                              </label>
                            </span>
                          </a>

                          <a
                            href="#"
                            className="space-x-1   border-transparent w-max  hover:border-white hover:border-b-[1px] border-b-[1px]"
                          >
                            <span>
                              <label html="KN">
                                <input id="KN" name="lang" type="radio" />
                                <span className="groupOrange text-black  text-sm">
                                  {" "}
                                  ಕನ್ನಡ - KN
                                </span>
                              </label>
                            </span>
                          </a>

                          <a
                            href="#"
                            className="space-x-1   border-transparent w-max  hover:border-white hover:border-b-[1px] border-b-[1px]"
                          >
                            <span>
                              <label htmlFor="ML">
                                <input id="ML" name="lang" type="radio" />
                                <span className="groupOrange text-black  text-sm">
                                  {" "}
                                  മലയാളം - ML
                                </span>
                              </label>
                            </span>
                          </a>

                          <a
                            href="#"
                            className="space-x-1   border-transparent w-max  hover:border-white hover:border-b-[1px] border-b-[1px]"
                          >
                            <span>
                              <label htmlFor="BN">
                                <input id="BN" name="lang" type="radio" />
                                <span className="groupOrange text-black  text-sm">
                                  {" "}
                                  বাংলা - BN
                                </span>
                              </label>
                            </span>
                          </a>

                          <a
                            href="#"
                            className="space-x-1   border-transparent w-max  hover:border-white hover:border-b-[1px] border-b-[1px]"
                          >
                            <span>
                              <label htmlFor="MR">
                                <input id="MR" name="lang" type="radio" />
                                <span className="groupOrange text-black  text-sm">
                                  {" "}
                                  मराठी - MR
                                </span>
                              </label>
                            </span>
                          </a>

                          <a
                            href="#"
                            className="hover:underline decoration-red-300 text-sm border-white text-blue-700"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </span>
                  </div>
                  <div
                    id="sign-in"
                    className="  hover:border-[1px]  border-[1px] group
                 hover:border-white border-transparent min-w-max p-1 cursor-pointer relative "
                  >
                    <div className=" relative mb-4">
                      <div className="absolute ml-1">
                        <span className="text-white  text-xs font-medium">
                          Hello, sign in
                        </span>
                      </div>
                    </div>
                    <span className=" space-x-1 ml-[2px]">
                      <span className="text-white font-bold text-[0.8rem]">
                        Account & Lists
                      </span>
                      <span>
                        <FontAwesomeIcon
                          className="text-gray-400 text-xs"
                          icon={faCaretDown}
                        />
                      </span>
                    </span>

                    <div
                      className=" absolute -left-[18rem] shadow-2xl top-12
                  z-10 rounded-md group-hover:block hidden bg-white w-[71vh] "
                    >
                      <div className="">
                        <div className="p-2  ">
                          <div className="w-max flex m-auto mt-5 ">
                            <a href="">
                              <button className="bg-yellow-300 hover:underline decoration-red-400 text-sm rounded-md py-2 px-20">
                                Sign in
                              </button>
                            </a>
                          </div>
                          <span className="flex justify-center items-center mt-1">
                            <span className="text-xs">New Customer?</span>
                            <a
                              href="#"
                              className="text-xs hover:underline text-blue-500 groupOrange"
                            >
                              Sart here.
                            </a>
                          </span>
                          <hr className="border-gray-300" />
                          <div className=" relative flex justify-between  ">
                            <div className="mt-5 ml-5   h-max w-max p-1">
                              <div className="font-bold  mb-2">Your Lists</div>
                              <div className="flex flex-col space-y-2 text-sm   ">
                                <a
                                  className="hover:underline groupOrange"
                                  href="#"
                                >
                                  Create a Wish List
                                </a>
                                <a
                                  className="hover:underline groupOrange"
                                  href="#"
                                >
                                  Wish from Any Wesbite
                                </a>
                                <a
                                  className="hover:underline groupOrange"
                                  href="#"
                                >
                                  Baby Wishlist
                                </a>
                                <a
                                  className="hover:underline groupOrange"
                                  href="#"
                                >
                                  Discover Your Style
                                </a>
                                <a
                                  className="hover:underline groupOrange"
                                  href="#"
                                >
                                  Explore Showroom
                                </a>
                              </div>
                            </div>
                            <div
                              className="vertical-line border-[1px] absolute mt-1
                          top-0 left-2/4 justify-center h-full border-gray-300 "
                            />

                            <div className="flex flex-col text-sm  space-y-2 w-[15rem]  ">
                              <div className="text-[1rem]   mt-6 text-md font-bold">
                                Your Account
                              </div>
                              <a
                                className="hover:underline  groupOrange"
                                href="#"
                              >
                                Your Account
                              </a>
                              <a
                                className="hover:underline groupOrange"
                                href="#"
                              >
                                Your Orders
                              </a>
                              <a
                                className="hover:underline groupOrange"
                                href="#"
                              >
                                Your Wish List
                              </a>
                              <a
                                className="hover:underline groupOrange"
                                href="#"
                              >
                                Your Recommendations
                              </a>
                              <a
                                className="hover:underline groupOrange"
                                href="#"
                              >
                                Your Prime Membership
                              </a>
                              <a
                                className="hover:underline groupOrange"
                                href="#"
                              >
                                Your Prime Video
                              </a>
                              <a
                                className="hover:underline groupOrange"
                                href="#"
                              >
                                {" "}
                                Your Subscribe and Save items
                              </a>
                              <a
                                className="hover:underline groupOrange"
                                href="#"
                              >
                                Members & Subscriptions
                              </a>
                              <a
                                className="hover:underline groupOrange"
                                href="#"
                              >
                                Your Seller Account
                              </a>
                              <a
                                className="hover:underline groupOrange"
                                href="#"
                              >
                                Manage Your Content and Devices
                              </a>
                              <a
                                className=" hover:underline groupOrange"
                                href="#"
                              >
                                Your Free Shopify Business Account
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="ml-2 text-white border-[1px] p-2 border-transparent hover:border-[1px] 
                hover:border-white cursor-pointer"
                  >
                    <div className="text-xs mt-1 -mb-2">Returns</div>
                    <span className="text-sm font-bold">& Orders</span>
                  </div>
                  <div
                    className="ml-2 relative text-white border-[1px] p-3 border-transparent hover:border-[1px] 
                hover:border-white cursor-pointer"
                  >
                    <Link
                      href="/cart"
                      className=" text-sm font-bold text-white"
                    >
                      <FontAwesomeIcon
                        className="text-2xl text-white"
                        icon={faCartShopping}
                      />{" "}
                      <span className="text-sm font-bold">Cart</span>
                      {isClient && (
                        <span className="absolute top-1 right-5">
                          {name.length}
                        </span>
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#112642]">
              <div className="space-x-1 p-2">
                <div
                  className="inline cursor-pointer items-center space-x-1
              text-white border-[1px] p-2 border-transparent hover:border-[1px] 
                hover:border-white "
                  onClick={() => setToggle(!toggle)}
                >
                  <FontAwesomeIcon className="text-lg  " icon={faBars} />
                  <span className="font-bold">All</span>
                </div>
                {toggle && (
                  <div className=" flex top-0 bottom-0 left-0 right-0 inset-0 w-100vw h-100vh fixed  bg-[#32302D]/80  z-10  ">
                    <div className="relative flex-col flex w-[370px] h-full bg-white -left-1 ">
                      <div className="font-bold text-white text-lg items-center px-5 py-3 -left-1 w-full bg-[#232E3F] h-14">
                        Hello, User
                      </div>
                      <div>
                        <ul className=" space-y-3 ">
                          <li className="p-1 px-6 mt-2 font-bold text-xl ">
                            Trending
                          </li>
                          <li className="p-1 px-6 cursor-pointer hover:bg-gray-200 font-normal text-md">
                            Best Sellers
                          </li>
                          <li className="p-1 px-6 cursor-pointer hover:bg-gray-200 font-normal text-md">
                            News Releases
                          </li>
                          <li className="p-1 px-6 cursor-pointer hover:bg-gray-200 font-normal text-md">
                            Movers and shakers
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="relative text-white w-9 cursor-pointer duration-150 transition ease-in"
                      onClick={() => setToggle(false)}
                    >
                      <XMarkIcon />
                    </div>
                  </div>
                )}
                <Link
                  href="/category/[id]"
                  as={`/category/smartphones`}
                  className="border-[1px] border-transparent hover:border-[1px] 
                hover:border-white p-2  "
                >
                  <span className="font-medium text-sm text-white">
                    Smartphones
                  </span>
                </Link>

                <Link
                  href="/category/[id]"
                  as={`/category/laptops`}
                  className="border-[1px] border-transparent hover:border-[1px] 
                hover:border-white p-2  "
                >
                  <span className="font-medium text-sm text-white">
                    Laptops
                  </span>
                </Link>
                <Link
                  href="/category/[id]"
                  as={`/category/fragrances`}
                  className="border-[1px] border-transparent hover:border-[1px] 
                hover:border-white p-2  "
                >
                  <span className="font-medium text-sm text-white">
                    Fragrances
                  </span>
                </Link>
                <Link
                  href="/category/[id]"
                  as={`/category/skincare`}
                  className="border-[1px] border-transparent hover:border-[1px] 
                hover:border-white p-2  "
                >
                  <span className="font-medium text-sm text-white">
                    Skincare
                  </span>
                </Link>
                <Link
                  href="/category/[id]"
                  as={`/category/groceries`}
                  className="border-[1px] border-transparent  hover:border-[1px] 
                hover:border-white p-2  "
                >
                  <span className="font-medium text-sm  text-white">
                    Groceries
                  </span>
                </Link>
                <Link
                  href="/category/[id]"
                  as={`/category/home-decoration`}
                  className="border-[1px] border-transparent  hover:border-[1px] 
                hover:border-white p-2  "
                >
                  <span className="font-medium text-sm text-white">
                    Home-decoration
                  </span>
                </Link>
                <Link
                  href="/category/[id]"
                  as={`/category/furniture`}
                  className="border-[1px] border-transparent  hover:border-[1px] 
                hover:border-white p-2  "
                >
                  <span className="font-medium text-sm text-white">
                    Furniture
                  </span>
                </Link>
                <Link
                  href="/category/[id]"
                  as={`/category/motorcycle`}
                  className="border-[1px] border-transparent  hover:border-[1px] 
                hover:border-white p-2  "
                >
                  <span className="font-medium text-sm text-white">
                    Motorcycle
                  </span>
                </Link>
                <Link
                  href="/category/[id]"
                  as={`/category/womens-dresses`}
                  className="border-[1px] border-transparent hover:border-[1px] 
                hover:border-white p-2  "
                >
                  <span className="font-medium text-sm text-white">
                    Womens-dresses
                  </span>
                </Link>
                <Link
                  href="/category/[id]"
                  as={`/category/womens-shoes`}
                  className="border-[1px] border-transparent hover:border-[1px] 
                hover:border-white p-2  "
                >
                  <span className="font-medium text-sm text-white">
                    Womens-shoes
                  </span>
                </Link>
                <Link
                  href="/category/[id]"
                  as={`/category/mens-shoes`}
                  className="border-[1px] border-transparent hover:border-[1px] 
                hover:border-white p-2  "
                >
                  <span className="font-medium text-sm text-white">
                    Mens-shoes
                  </span>
                </Link>
                <Link
                  href="/category/[id]"
                  as={`/category/sunglasses`}
                  className="hidden sm:inline border-[1px] border-transparent hover:border-[1px] 
                hover:border-white p-2  "
                >
                  <span className="font-medium text-sm text-white">
                    Sunglasses
                  </span>
                </Link>
                <Link
                  href="/category/[id]"
                  as={`/category/lighting`}
                  className="hidden sm:inline border-[1px] border-transparent hover:border-[1px] 
                hover:border-white p-2  "
                >
                  <span className="font-medium text-sm text-white">
                    Lighting
                  </span>
                </Link>
                <Link
                  href="/category/[id]"
                  as={`/category/automotive`}
                  className="hidden sm:inline border-[1px] border-transparent hover:border-[1px] 
                hover:border-white p-2  "
                >
                  <span className="font-medium text-sm text-white">
                    Automotive
                  </span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Nav;
