import { useState } from "react";
import { useRouter } from "next/router";

function EventList({ eventList }) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();
  const fetchSportsEvent = async () => {
    const res = await fetch("http://localhost:3004/news?category=sports");
    const data = await res.json();
    setEvents(data);
    router.push("/event?category=sports", undefined, { shallow: true });
  };
  return (
    <>
      <button onClick={fetchSportsEvent}>Sports Event</button>
      <h1>List of events</h1>
      {events.map((eachEvent) => {
        return (
          <div key={eachEvent.id}>
            <h2>
              {eachEvent.id} {eachEvent.title} {eachEvent.date} |{" "}
              {eachEvent.category}
              <p>{eachEvent.description}</p>
            </h2>
          </div>
        );
      })}
    </>
  );
}

export default EventList;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const res = await fetch(`http://localhost:3004/news?${queryString}`);
  const data = await res.json();
  return {
    props: {
      eventList: data,
    },
  };
}
