import React, { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import Footer from "../../../components/Footer";
import CategorySection from "../../../components/CategorySection";
function Category({ item }) {
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);
  return (
    <div className="">
      <div className="relative w-[1500px] mx-auto  flex-col space-y-4 mb-10 mt-10">
        {isClient && item.length !== 0 ? (
          item?.map((item, index) => (
            <CategorySection item={item} key={index} id={item.id} />
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

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://dummyjson.com/products/category/${context.params.id}`
  );
  //   console.log(context.params.id);
  const item = await res.json();
  //   console.log(item);
  return {
    props: {
      item: item.products,
    },
  };
};
export default Category;
