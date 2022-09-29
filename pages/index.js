import Link from "next/link";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Code </title>
        <meta name="description" content="learn" />
      </Head>
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
