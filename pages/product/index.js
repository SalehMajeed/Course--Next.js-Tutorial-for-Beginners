import Link from "next/link";
import { useRouter } from "next/router";

function ProductList({ initialPage = 100 }) {
  const router = useRouter();
  const handleClick = () => {
    console.log("done");
    router.push("/");
  };
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
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}

export default ProductList;
