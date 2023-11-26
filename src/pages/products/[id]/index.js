import Link from "next/link";
import { useRouter } from "next/router";
import ProductDetails from "../../../../components/ProductDetails";
import Footer from "../../../../components/Footer";

const Product = ({ products, ids, items }) => {
  const router = useRouter();
  // console.log(router.query);
  return (
    <div>
      <ProductDetails key={products.id} products={products} />
      <Footer />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://dummyjson.com/products/${context.params.id}`
  );

  const res1 = await fetch("https://dummyjson.com/products?limit=100");
  const items = await res1.json();

  const products = await res.json();
  return {
    props: { products, items: items.products },
  };
};

// export const getStaticPaths = async () => {
//   const res = await fetch("https://dummyjson.com/products?limit=100");
//   const products = await res.json();
//   // const res1 = await fetch("https://dummyjson.com/products/search?q=furniture");
//   // const furn = await res1.json();

//   var ids = products.products?.map((ids) => ids.id);
//   // var ids1 = furn.products?.map((ids) => ids.id);

//   // Array.prototype.push.apply(ids, ids1);

//   const paths = ids?.map((id) => ({
//     params: {
//       id: id.toString(),
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

export default Product;
