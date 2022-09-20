import Link from "next/link";

function Home() {
  return (
    <>
      <div>
        <h1>Home Page With Link</h1>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/product">
          <a>Products</a>
        </Link>
      </div>
      <div>Pre-rendering</div>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
      <div>
        <Link href="/random">
          <a>Random Data</a>
        </Link>
      </div>
    </>
  );
}

export default Home;
