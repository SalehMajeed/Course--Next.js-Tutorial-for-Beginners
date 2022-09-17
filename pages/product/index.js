import Link from "next/link";

function ProductList({ initialPage = 100 }) {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href={`product/1`} replace>
        <a>Product 1</a>
      </Link>

      <Link href={`product/${initialPage}`}>
        <a>Product 100</a>
      </Link>
    </>
  );
}

export default ProductList;
