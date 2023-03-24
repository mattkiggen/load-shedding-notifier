import { Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { DataContext } from '../core/context';

import { handleNotification } from '../core/notification';

function MainPage() {
  const data = useContext(DataContext);

  async function showNotification() {
    const now = new Date();
    await handleNotification(
      new Date(now.getTime() - 4 * 60 * 1000).toUTCString()
    );
  }

  return (
    <div>
      {data && <h1>{data.info.name}</h1>}
      {data && <p>Load shedding starts at {data.events[0].start}</p>}
      <Button onClick={showNotification}>Show notification</Button>
    </div>
  );
}

export default MainPage;
