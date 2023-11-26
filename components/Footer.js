import React from "react";

function Footer() {
  return (
    <div className="bg-[#232F3E] w-[1530px] h-fit mx-auto">
      <div>
        <div
          className="flex items-start
         justify-around w-3/4  m-auto pt-10 
          text-gray-200 pb-14"
        >
          <div className="">
            <h1 className="mb-2 font-bold tex-xl">Get to Know Us</h1>
            <ul className="text-[0.8rem]  space-y-2">
              <li className="hover:underline  cursor-pointer">About Us</li>
              <li className="hover:underline  cursor-pointer">Careers</li>
              <li className="hover:underline  cursor-pointer">
                Press Releases
              </li>
              <li className="hover:underline  cursor-pointer">
                Amazon Science
              </li>
            </ul>
          </div>
          <div>
            <h1 className="mb-2 font-bold tex-xl">Connect with Us</h1>
            <ul className="text-sm space-y-2">
              <li className="hover:underline  cursor-pointer">Facebook</li>
              <li className="hover:underline  cursor-pointer">Twitter</li>
              <li className="hover:underline  cursor-pointer">Instagram</li>
            </ul>
          </div>
          <div>
            <h1 className="mb-2 font-bold tex-xl">Make Money with Us</h1>
            <ul className="text-sm space-y-2">
              <li className="hover:underline  cursor-pointer">
                Sell on Amazon
              </li>
              <li className="hover:underline  cursor-pointer">
                Sell under Amazon Accelerator
              </li>
              <li className="hover:underline  cursor-pointer">
                Protect and Build Your Brand
              </li>
              <li className="hover:underline  cursor-pointer">
                Amazon Global Selling
              </li>
              <li className="hover:underline  cursor-pointer">
                Become an Affiliate
              </li>
              <li className="hover:underline  cursor-pointer">
                Flifilment by Amazon
              </li>
              <li className="hover:underline  cursor-pointer">
                Advertise Your Products
              </li>
              <li className="hover:underline  cursor-pointer">
                Amazon Pay on Merchants
              </li>
            </ul>
          </div>
          <div>
            <h1 className="mb-2 font-bold tex-xl">Let Us Help You</h1>
            <ul className="text-sm space-y-2">
              <li className="hover:underline  cursor-pointer">
                COVID-19 and Amazon
              </li>
              <li className="hover:underline  cursor-pointer">Your Account</li>
              <li className="hover:underline  cursor-pointer">
                Returns Centre
              </li>
              <li className="hover:underline  cursor-pointer">
                100% Purchase Protection
              </li>
              <li className="hover:underline  cursor-pointer">
                Amazon App Download
              </li>
              <li className="hover:underline  cursor-pointer">Help</li>
            </ul>
          </div>
        </div>
        <div className="border-t-[1px]   border-gray-600" />
      </div>

      <div className="bg-[#131A22] w-full h-fit pb-10 pt-10">
        <div
          className="grid grid-cols-5 w-[70%]  gap-10 
        m-auto   "
        >
          <a className="hover:underline text-gray-400 text-xs " href="#">
            <h1 className="font-bold text-gray-200 ">AbeBooks</h1>
            <ul>
              <li>Books, art</li>
              <li>& collectibles</li>
            </ul>
          </a>
          <a className="hover:underline text-gray-400 text-xs " href="#">
            <h1 className="font-bold text-gray-200">Amazon Web Cloud</h1>
            <ul>
              <li>Services Scalable</li>
              <li>Computing Services</li>
            </ul>
          </a>
          <a className="hover:underline text-gray-400 text-xs " href="#">
            <h1 className="font-bold text-gray-200">Audible</h1>
            <ul>
              <li>Download</li>
              <li>Audio Books</li>
            </ul>
          </a>
          <a className="hover:underline text-gray-400 text-xs " href="#">
            <h1 className="font-bold text-gray-200">DPReview</h1>
            <ul>
              <li>Digital</li>
              <li>Photography</li>
            </ul>
          </a>
          <a className="hover:underline text-gray-400 text-xs " href="#">
            <h1 className="font-bold text-gray-200"> IMDb </h1>
            <ul>
              <li>Movies, TV</li>
              <li>& Celebrities</li>
            </ul>
          </a>
          <a className="hover:underline text-gray-400 text-xs " href="#">
            <h1 className="font-bold text-gray-200">Shopbop </h1>
            <ul>
              <li>Designer</li>
              <li>Fashion Brands</li>
            </ul>
          </a>
          <a className="hover:underline text-gray-400 text-xs " href="#">
            <h1 className="font-bold text-gray-200">Amazon Business</h1>
            <ul>
              <li>Everything For</li>
              <li>Your Business</li>
            </ul>
          </a>
          <a className="hover:underline text-gray-400 text-xs " href="#">
            <h1 className="font-bold text-gray-200">Prime Now </h1>
            <ul>
              <li>2-Hour Delivery</li>
              <li>on Everyday Items</li>
            </ul>
          </a>
          <a className="hover:underline text-gray-400 text-xs " href="#">
            <h1 className="font-bold text-gray-200">Amazon Prime Music</h1>
            <ul>
              <li>100 million songs, ad-free</li>
              <li>Over 15 million podcast episodes</li>
            </ul>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
