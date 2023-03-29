import { useContext } from "react";

import AreaCard from "../components/AreaCard";
import { DataContext } from "../core/context";

function DashboardPage() {
  const data = useContext(DataContext);
  if (data === null) return <p>Loading...</p>;

  return (
    <>
      {/* {data && (
        <AreaCard
          areaName={data.info.name}
          region={data.info.region}
          startDate={data.events[0].start}
          endDate={data.events[0].end}
        />
      )} */}
      <h1>Hello</h1>
    </>
  );
}

export default DashboardPage;
