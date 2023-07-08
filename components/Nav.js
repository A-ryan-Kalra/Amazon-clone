import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

function Nav() {
  return (
    <div>
      <div>
        <nav className="bg-[#131921]">
          <div className="flex ml-2 space-x-3">
            <div className="hover:border-[1px] border-[1px] hover:border-white border-transparent p-2 mt-1 mb-1 w-max">
              <a href="/" className="flex  items-center">
                <Image src="/img/shopify.png" width={40} height={44} />
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
            <div id="nav-search" className="pl-3   mt-1 mb-1">
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
                <div>
                  <form>
                    <select name="" id=""></select>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
