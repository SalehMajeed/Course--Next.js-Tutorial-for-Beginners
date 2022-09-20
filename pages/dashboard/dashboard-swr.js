import useSWR from "swr";

const fetcher = async () => {
  const res = await fetch("http://localhost:3004/dashboard");
  const data = await res.json();
  return data;
};

function DashboardSWR() {
  const { data, error } = useSWR("dashboard", fetcher);

  if (error) {
    return "An Error Has Occured";
  }

  if (!data) return "Loading";

  return (
    <div>
      <h2>Dashboard</h2>
      <h2>posts - {data.posts}</h2>
      <h2>likes - {data.likes}</h2>
      <h2>followers - {data.followers}</h2>
      <h2>following - {data.following}</h2>
    </div>
  );
}

export default DashboardSWR;
