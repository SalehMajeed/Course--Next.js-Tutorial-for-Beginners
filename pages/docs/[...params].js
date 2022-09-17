import { useRouter } from "next/router";
function Doc() {
  const route = useRouter();
  const { params = [] } = route;
  console.log(route.query.params);
  if (params.length > 0) {
    return (
      <h1>
        Docs Home Page With{" "}
        {params.map((eachVal, index) => (
          <p key={index}>{eachVal}</p>
        ))}
      </h1>
    );
  }
  return <h1>Docs Home Page</h1>;
}
export default Doc;
