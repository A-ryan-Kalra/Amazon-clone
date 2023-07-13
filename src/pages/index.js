import App from "../../components/App";

import Main from "../../components/Main";
export default function Home({
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
  return (
    <div className=" w-fit">
      <App />
      <Main
        products={products}
        furniture={furniture}
        laptop={laptop}
        lighting={lighting}
        decoration={decoration}
        automotive={automotive}
        watch={watch}
        shoe={shoe}
        bag={bag}
        dress={dress}
      />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=4");
  const res1 = await fetch("https://dummyjson.com/products/search?q=furniture");
  const res2 = await fetch(
    "https://dummyjson.com/products/search?q=laptop&limit=2"
  );
  const res3 = await fetch(
    "https://dummyjson.com/products/category/home-decoration?limit=2"
  );
  const res4 = await fetch(
    "https://dummyjson.com/products/category/lighting?limit=2"
  );
  const res5 = await fetch(
    "https://dummyjson.com/products/category/automotive?limit=4"
  );

  const res6 = await fetch(
    "https://dummyjson.com/products/category/mens-watches?limit=1"
  );
  const res7 = await fetch(
    "https://dummyjson.com/products/category/mens-shoes?limit=1"
  );
  const res8 = await fetch(
    "https://dummyjson.com/products/category/womens-bags?limit=1"
  );
  const res9 = await fetch(
    "https://dummyjson.com/products/category/tops?limit=1"
  );
  const watch = await res6.json();
  const shoe = await res7.json();
  const bag = await res8.json();
  const dress = await res9.json();
  const decoration = await res3.json();
  const lighting = await res4.json();
  const products = await res.json();
  const furniture = await res1.json();
  const laptop = await res2.json();
  const automotive = await res5.json();

  return {
    props: {
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
    },
  };
};
