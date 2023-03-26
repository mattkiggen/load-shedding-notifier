import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import { getLoadsheddingStatus, LoadsheddingStatusResponse } from './core/http';
import { DataContext } from './core/context';

import Navigation from './components/Navigation';
import { handleNotification } from './core/notification';

function App() {
  const [data, setData] = useState<LoadsheddingStatusResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getLoadsheddingStatus();
      if (response === null) return console.log('Error fetching data');

      setData(response);

      if (response.events.length > 0)
        await handleNotification(response.events[0].start);

      console.log(response);
    };

    const fetchDataInterval = setInterval(fetchData, 1000 * 60 * 60); // 1000ms * 60s * 60m = 1 hour
    fetchData();

    return () => clearInterval(fetchDataInterval);
  }, []);

  return (
    <DataContext.Provider value={data}>
      <Box padding='24px'>
        <Box mb='24px'>
          <Navigation />
        </Box>
        <Outlet />
      </Box>
    </DataContext.Provider>
  );
}

export default App;
