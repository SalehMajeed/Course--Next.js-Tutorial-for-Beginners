import { useRouter } from "next/router";
function Post({ post }) {
  const route = useRouter();
  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
}

export default Post;

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();
  console.log(params);
  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  const paths = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await paths.json();
  const allPaths = data.map((eachPost) => `/posts/${ eachPost.id}`);
  return {
    paths: allPaths,
    fallback: false,
  };
}
