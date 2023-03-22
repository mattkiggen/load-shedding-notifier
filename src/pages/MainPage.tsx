import { Button } from '@chakra-ui/react';
import { isPermissionGranted } from '@tauri-apps/api/notification';
import { invoke } from '@tauri-apps/api/tauri';

function MainPage() {
  async function showNotification() {
    const permissionGranted = await isPermissionGranted();
    if (permissionGranted) {
      await invoke('notify');
    }
  }

  return (
    <div>
      <Button onClick={showNotification}>Show notification</Button>
    </div>
  );
}

export default MainPage;
