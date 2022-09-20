function ListByCatergory({ articles, category }) {
  return (
    <>
      <h1>
        Showing New for category <i>{category}</i>
      </h1>
      {articles.map((eachArticle) => {
        return (
          <div key={eachArticle.id}>
            <h2>
              {eachArticle.id} {eachArticle.title}
            </h2>
            <p>{eachArticle.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default ListByCatergory;

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(
    `http://localhost:3004/news?category=${params.category}`
  );
  const data = await res.json();
  console.log(data);

  return {
    props: {
      articles: data,
      category: params.category,
    },
  };
}
