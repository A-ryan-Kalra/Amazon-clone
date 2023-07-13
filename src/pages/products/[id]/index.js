import Link from "next/link";
import { useRouter } from "next/router";

const Product = ({ products, ids }) => {
  const router = useRouter();
  console.log(ids);
  return (
    <div>
      <h2> {products.id}</h2>
      <p>{products.description}</p>
      <Link className="groupOrange" href="/">
        Go Back
      </Link>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://dummyjson.com/products/${context.params.id}`
  );
  const products = await res.json();

  const res1 = await fetch("https://dummyjson.com/products/search?q=furniture");
  const furn = await res1.json();

  var ids = furn.products.map((ids) => ids.id);

  return {
    props: { ids, products },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=100");
  const products = await res.json();
  // const res1 = await fetch("https://dummyjson.com/products/search?q=furniture");
  // const furn = await res1.json();

  var ids = products.products.map((ids) => ids.id);
  // var ids1 = furn.products.map((ids) => ids.id);

  // Array.prototype.push.apply(ids, ids1);

  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Product;
