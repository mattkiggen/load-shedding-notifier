import { useContext } from "react";
import AreaCard from "../components/AreaCard";
import { DataContext } from "../core/context";

import { handleNotification } from "../core/notification";

function DashboardPage() {
  const data = useContext(DataContext);

  async function showNotification() {
    const now = new Date();
    await handleNotification(
      new Date(now.getTime() - 4 * 60 * 1000).toUTCString()
    );
  }

  return (
    <>
      {data && (
        <AreaCard
          areaName={data.info.name}
          region={data.info.region}
          startDate={data.events[0].start}
          endDate={data.events[0].end}
        />
      )}
    </>
  );
}

export default DashboardPage;