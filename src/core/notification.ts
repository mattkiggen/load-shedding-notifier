import { isPermissionGranted } from '@tauri-apps/api/notification';
import { invoke } from '@tauri-apps/api/tauri';
import { isLoadsheddingIn5minutes } from './status';

export async function handleNotification(startDate: string) {
  const isStartingSoon = isLoadsheddingIn5minutes(startDate);
  const permissionGranted = await isPermissionGranted();
  if (permissionGranted && isStartingSoon) await invoke('notify');
}
