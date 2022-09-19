import Link from "next/link";
function PostList({ posts }) {
  return (
    <>
      <h1>List of posts</h1>
      {posts.map((eachPost) => {
        return (
          <div key={eachPost.id}>
            <Link href={`/posts/${eachPost.id}`} passHref>
              <h2>
                {eachPost.id} {eachPost.title}
              </h2>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default PostList;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}