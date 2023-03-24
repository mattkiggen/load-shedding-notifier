import { Button } from '@chakra-ui/react';
import { isPermissionGranted } from '@tauri-apps/api/notification';
import { invoke } from '@tauri-apps/api/tauri';
import { useContext } from 'react';
import { DataContext } from '../core/context';

function MainPage() {
  const data = useContext(DataContext);

  async function showNotification() {
    const permissionGranted = await isPermissionGranted();
    if (permissionGranted) {
      await invoke('notify');
    }
  }

  return (
    <div>
      {data && <h1>{data.info.name}</h1>}
      <Button onClick={showNotification}>Show notification</Button>
    </div>
  );
}

export default MainPage;
