import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import { getLoadsheddingStatus } from "./core/http";

function App() {
  // const [data, setData] = useState<LoadsheddingStatus | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await getLoadsheddingStatus();
  //     if (response.error) return console.log(`Error fetching data, status: ${response.error.statusCode}`);

  //     if (loadSheddingInfo !== null) {
  //       setData(loadSheddingInfo);
  //       await handleNotification(loadSheddingInfo.events[0].start);
  //     }

  //     console.log(loadSheddingInfo);
  //   };

  //   const fetchDataInterval = setInterval(fetchData, 1000 * 60 * 60); // 1000ms * 60s * 60m = 1 hour
  //   fetchData();

  //   return () => clearInterval(fetchDataInterval);
  // }, []);

  return (
    <Box p="24px">
      <Navigation />
      <Box h="24px" />
      <Outlet />
    </Box>
  );
}

export default App;
