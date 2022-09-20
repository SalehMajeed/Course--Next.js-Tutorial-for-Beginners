function GetNews({ articles }) {
  return (
    <>
      <h1>List Of News Articles</h1>
      {articles.map((eachArticle) => {
        return (
          <div key={eachArticle.id}>
            <h2>
              {eachArticle.id} {eachArticle.title} | {eachArticle.category}
            </h2>
          </div>
        );
      })}
    </>
  );
}

export default GetNews;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3004/news");
  const data = await res.json();
  return {
    props: {
      articles: data,
    },
  };
}
