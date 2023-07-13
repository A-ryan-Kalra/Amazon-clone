import Link from "next/link";
import Products from "./Products";
import Image from "next/image";

function Main({
  products,
  furniture,
  laptop,
  lighting,
  decoration,
  automotive,
  watch,
  shoe,
  bag,
  dress,
}) {
  console.log(furniture);
  return (
    <div className="">
      <div className="flex flex-col">
        <div className="   gap-5 pt-5 flex w-full  translate-x-5 ">
          <div className=" shadow-2xl justify-center relative  flex-col w-[25%] bg-[#FFFFFF]    ">
            <h2 className="p-1 font-bold text-xl text-center m-1">
              Handsets for your loved ones | Family
            </h2>
            <div className="grid grid-cols-2  ">
              {products.products.map((data) => (
                <Products products={data} />
              ))}
            </div>
            <a
              href="#"
              className="text-blue-500 absolute ml-2 bottom-1 align-bottom  groupOrange  text-xs font-medium"
            >
              See more
            </a>
          </div>

          <div className="shadow-2xl justify-center  flex-col w-[25%] bg-[#FFFFFF]">
            <h2 className="p-1  text-center font-bold text-xl  ">
              Prime Exclusive deals| Furnitures | Laptops{" "}
            </h2>
            <div className="grid grid-cols-2 p-2">
              {furniture.products.map((data) => (
                <Products products={data} />
              ))}
              {laptop.products.map((data) => (
                <Products products={data} />
              ))}
            </div>
            <a
              href="#"
              className="text-blue-500 absolute  ml-3 bottom-1 groupOrange text-xs  text-left font-medium"
            >
              See more Offers
            </a>
          </div>
          <div className="flex flex-col shadow-2xl p-1 bg-[#FFFFFF] w-[25%] text-center  ">
            <h2 className="mb-2 font-bold  text-xl ">
              Up to 50% off | Monitor blood sugar | Checkup
            </h2>
            <div className="p-4">
              <a href="#">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Pharmacy/GW/2023/WK28/PC_CC_Set_379x304_01._SY304_CB601485788_.jpg"
                  alt="pharmacy"
                  height={276}
                  width={344}
                />
              </a>
            </div>
          </div>
          <div className="bg-[#FFFFFF] shadow-xl flex-col space-y-10 p-5 w-[19%] h-max">
            <h2 className=" font-bold text-[1.2rem] break-normal ">
              Sign in for your best experience
            </h2>
            <div>
              <button className="bg-[#FDE047] hover:bg-yellow-400 p-2 text-sm w-full rounded-xl shadow-2xl   ">
                Sign in securely
              </button>
            </div>
          </div>
        </div>
        <div className="flex ">
          <div className=" gap-5 pt-5 flex w-full translate-x-5">
            <div
              className=" bg-[#FFFFFF]  flex-col 
         justify-center shadow-2xl p-2  
         text-center items-cente w-[25%]"
            >
              <h2 className="mb-2 font-bold text-xl">
                Up to 70% off | Clearance store
              </h2>
              <a href="#">
                <div className=" m-2   p-1 shadow-md">
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
                    alt="clearence offer"
                  />
                </div>
              </a>
            </div>

            <div className="shadow-2xl justify-center  flex-col w-[25%] bg-[#FFFFFF] relative">
              <h2 className="p-1  text-center font-bold text-xl  ">
                Revamp your home in style
              </h2>
              <div className="grid grid-cols-2 p-2">
                {decoration.products.map((data) => (
                  <Products products={data} />
                ))}
                {lighting.products.map((data) => (
                  <Products products={data} />
                ))}
              </div>
              <a
                href="#"
                className="text-blue-500 absolute ml-2 bottom-2 align-bottom  groupOrange  text-xs font-medium"
              >
                See more
              </a>
            </div>

            <div className="shadow-2xl justify-center  flex-col w-[25%] bg-[#FFFFFF] relative">
              <h2 className="p-1  text-center font-bold text-xl   ">
                Automotive essentials | Up to 60% off
              </h2>
              <div className="grid grid-cols-2 p-2">
                {automotive.products.map((data) => (
                  <Products products={data} />
                ))}
              </div>
              <a
                href="#"
                className="text-blue-500 absolute ml-2 bottom-2 align-bottom  groupOrange  text-xs font-medium"
              >
                See more
              </a>
            </div>
            <div className="shadow-2xl justify-center p-1 flex-col w-[19%] bg-[#FFFFFF] relative">
              <h2 className="p-1  text-center font-bold text-xl  ">
                Up to 70% off | Styles for All
              </h2>
              <div className="grid grid-cols-2 p-2">
                {watch.products.map((data) => (
                  <Products products={data} />
                ))}
                {shoe.products.map((data) => (
                  <Products products={data} />
                ))}
                {bag.products.map((data) => (
                  <Products products={data} />
                ))}
                {dress.products.map((data) => (
                  <Products products={data} />
                ))}
              </div>
              <a
                href="#"
                className="text-blue-500 absolute ml-2 bottom-2 align-bottom  groupOrange  text-xs font-medium"
              >
                See more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
