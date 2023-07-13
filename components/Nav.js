import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faSearch,
  faCaretDown,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";

function Nav() {
  return (
    <div className="fixed z-10  w-screen   top-0">
      <div>
        <nav className="bg-[#131921] box-border flex flex-col">
          <div className="flex ml-2 space-x-3">
            <div className="hover:border-[1px] border-[1px] hover:border-white border-transparent p-2 mt-1 mb-1 w-max">
              <a href="/" className="flex  items-center">
                <Image
                  alt="logo"
                  src="/img/shopify.png"
                  width={40}
                  height={44}
                />
                <p className="text-lg text-white">Shopify</p>
              </a>
            </div>
            <div className="hover:border-[1px] border-[1px] hover:border-white border-transparent mt-1 mb-1">
              <a href="/" className="relative ">
                <span className="text-gray-300 text-xs ml-5 top-3 absolute inline-block ">
                  Hello
                </span>
                <span className=" flex space-x-1 font-bold text-white mt-6 ">
                  <FontAwesomeIcon className="text-xl" icon={faLocationDot} />
                  <span className="text-sm"> Select your address</span>
                </span>
              </a>
            </div>
            <div id="nav-search" className="pl-3   mb-1">
              <div className="flex items-center mt-2">
                <div>
                  <form className="w-[45px] ">
                    <select
                      className="w-full text-sm p-1 rounded-l-md h-[44px]"
                      name="Categories"
                      id="Categories"
                    >
                      <option value="allCategories">All</option>
                      <option value="appliances">Appliances</option>
                      <option value="mobiles">Mobiles</option>
                      <option value="automotive">Car & Motorbike</option>
                      <option value="computers">Computers & Accessories</option>
                      <option value="furniture">Furniture</option>
                      <option value="shoes">Shoes & Handbags</option>
                    </select>
                  </form>
                </div>

                <div>
                  <form>
                    <input
                      size={62}
                      className="p-[10px]"
                      type="text"
                      placeholder="Search your product here "
                    />
                  </form>
                </div>
                <span className="bg-[#f2bb3a] p-2 w-[45px] h-[44px] pt-3 items-center rounded-r-md">
                  <input tabIndex={1} type="submit" hidden />
                  <FontAwesomeIcon
                    className="text-black text-xl  
                     cursor-pointer"
                    icon={faSearch}
                  />
                </span>
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
                            <label For="lang" className="space-x-1">
                              <input
                                id="lang"
                                name="lang"
                                type="radio"
                                checked
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
                            <label For="lang1">
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
                            <label For="TA">
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
                            <label For="TE">
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
                            <label For="ML">
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
                            <label For="BN">
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
                            <label For="MR">
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
                            <a className="hover:underline groupOrange" href="#">
                              Your Orders
                            </a>
                            <a className="hover:underline groupOrange" href="#">
                              Your Wish List
                            </a>
                            <a className="hover:underline groupOrange" href="#">
                              Your Recommendations
                            </a>
                            <a className="hover:underline groupOrange" href="#">
                              Your Prime Membership
                            </a>
                            <a className="hover:underline groupOrange" href="#">
                              Your Prime Video
                            </a>
                            <a className="hover:underline groupOrange" href="#">
                              {" "}
                              Your Subscribe and Save items
                            </a>
                            <a className="hover:underline groupOrange" href="#">
                              Members & Subscriptions
                            </a>
                            <a className="hover:underline groupOrange" href="#">
                              Your Seller Account
                            </a>
                            <a className="hover:underline groupOrange" href="#">
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
                  className="ml-2 text-white border-[1px] p-3 border-transparent hover:border-[1px] 
                hover:border-white cursor-pointer"
                >
                  <span className="text-sm font-bold text-white">
                    <FontAwesomeIcon
                      className="text-2xl text-white"
                      icon={faCartShopping}
                    />{" "}
                    Cart
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#112642]">
            <div className="space-x-1 p-2">
              <a
                href="#"
                className="items-center space-x-1
              text-white border-[1px] p-2 border-transparent hover:border-[1px] 
                hover:border-white "
              >
                <FontAwesomeIcon className="text-lg  " icon={faBars} />
                <span className="font-bold">All</span>
              </a>

              <a
                href="#"
                className="border-[1px] border-transparent hover:border-[1px] 
                hover:border-white p-2  "
              >
                <span className="font-medium text-sm text-white">
                  Shopify miniTV
                </span>
              </a>

              <a
                href="#"
                className="border-[1px] border-transparent hover:border-[1px] 
                hover:border-white p-2  "
              >
                <span className="font-medium text-sm text-white">Sell</span>
              </a>
              <a
                href="#"
                className="border-[1px] border-transparent hover:border-[1px] 
                hover:border-white p-2  "
              >
                <span className="font-medium text-sm text-white">
                  Best Sellers
                </span>
              </a>
              <a
                href="#"
                className="border-[1px] border-transparent hover:border-[1px] 
                hover:border-white p-2  "
              >
                <span className="font-medium text-sm text-white">
                  Today's Deals
                </span>
              </a>
              <a
                href="#"
                className="border-[1px] border-transparent  hover:border-[1px] 
                hover:border-white p-2  "
              >
                <span className="font-medium text-sm  text-white">Mobiles</span>
              </a>
              <a
                href="#"
                className="border-[1px] border-transparent  hover:border-[1px] 
                hover:border-white p-2  "
              >
                <span className="font-medium text-sm text-white">
                  News Releases
                </span>
              </a>
              <a
                href="#"
                className="border-[1px] border-transparent  hover:border-[1px] 
                hover:border-white p-2  "
              >
                <span className="font-medium text-sm text-white">
                  Customer Service
                </span>
              </a>
              <a
                href="#"
                className="border-[1px] border-transparent  hover:border-[1px] 
                hover:border-white p-2  "
              >
                <span className="font-medium text-sm text-white">Prime</span>
              </a>
              <a
                href="#"
                className="border-[1px] border-transparent hover:border-[1px] 
                hover:border-white p-2  "
              >
                <span className="font-medium text-sm text-white">
                  Electronics
                </span>
              </a>
              <a
                href="#"
                className="border-[1px] border-transparent hover:border-[1px] 
                hover:border-white p-2  "
              >
                <span className="font-medium text-sm text-white">
                  Home & Kitchen
                </span>
              </a>
              <a
                href="#"
                className="border-[1px] border-transparent hover:border-[1px] 
                hover:border-white p-2  "
              >
                <span className="font-medium text-sm text-white">
                  Gift Ideas
                </span>
              </a>
              <a
                href="#"
                className="border-[1px] border-transparent hover:border-[1px] 
                hover:border-white p-2  "
              >
                <span className="font-medium text-sm text-white">
                  Shopify Pay
                </span>
              </a>
              <a
                href="#"
                className="border-[1px] border-transparent hover:border-[1px] 
                hover:border-white p-2  "
              >
                <span className="font-medium text-sm text-white">Fashion</span>
              </a>
              <a
                href="#"
                className="border-[1px] border-transparent hover:border-[1px] 
                hover:border-white p-2  "
              >
                <span className="font-medium text-sm text-white">
                  Computers
                </span>
              </a>
              <a
                href="#"
                className="border-[1px] border-transparent hover:border-[1px] 
                hover:border-white p-2  "
              >
                <span className="font-medium text-sm text-white">Books</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
