function generateRandomData({ randomData }) {
  return (
    <>
      {randomData.map((eachEntry) => {
        return (
          <div key={eachEntry.uid}>
            <div>
              <label>First Name: </label>
              {eachEntry.first_name}
            </div>
            <div>
              <label>Last Name: </label>
              {eachEntry.last_name}
            </div>
            <div>
              <label>Email: </label>
              {eachEntry.email}
            </div>
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://random-data-api.com/api/v2/users?size=10&response_type=json"
  );
  const data = await res.json();
  return {
    props: {
      randomData: data,
    },
    revalidate: 1,
  };
}

export default generateRandomData;
