import Link from "next/link";

function Products({ products }) {
  return (
    <div className="hover:bg-gray-300   m-2 p-1 shadow-md">
      <Link href="/products/[id]" as={`/products/${products.id}`}>
        <div className=" flex w-[100%] justify-center m-auto flex-col">
          <img
            className="w-110 border-2  border-gray-200 object-cover h-20"
            src={products.thumbnail}
          ></img>
          <h2 className="text-xs font-medium flex-wrap ">{products.title}</h2>
        </div>
      </Link>
    </div>
  );
}

export default Products;
