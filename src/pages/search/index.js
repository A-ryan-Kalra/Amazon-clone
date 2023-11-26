import React, { useEffect, useState } from "react";
import ProductCategory from "../../../components/Search";
import { useSelector } from "react-redux";
import Footer from "../../../components/Footer";

function Search() {
  const search = useSelector((state) => state.product.searched);
  const [isClient, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  // console.log(search);
  return (
    <div className="">
      <div className="relative w-[1500px] mx-auto  flex-col space-y-4 mb-10 mt-10">
        {isClient && search.length !== 0 ? (
          search?.map((item, index) => (
            <ProductCategory search={item} key={index} id={item.id} />
          ))
        ) : (
          <div className="h-[100vh]">
            <div className="text-center text-xl font-medium">
              Oops can&apos;t find what you&apos;re looking for!
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
export default Search;
