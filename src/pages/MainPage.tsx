import { Button } from '@chakra-ui/react';
import {
  isPermissionGranted,
  sendNotification,
} from '@tauri-apps/api/notification';

function MainPage() {
  async function showNotification() {
    const permissionGranted = await isPermissionGranted();

    if (permissionGranted) {
      sendNotification({
        title: '🚨 Load Shedding Soon 🚨',
        body: 'Load shedding is starting in 5mins, make sure to save your work and shutdown.',
      });
    }
  }

  return (
    <div>
      <Button onClick={showNotification}>Show notification</Button>
    </div>
  );
}

export default MainPage;
