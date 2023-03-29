import { getClient } from '@tauri-apps/api/http';
import { API_KEY, AREA_ID, BASE_URL } from './constants';
import { LoadsheddingStatus, Response } from './types';

export async function getLoadsheddingStatus(): Promise<Response> {
  const client = await getClient();
  const apiKey = localStorage.getItem(API_KEY);
  const areaId = localStorage.getItem(AREA_ID);

  const response = await client.get<LoadsheddingStatus>(
    `${BASE_URL}/business/2.0/area?id=${areaId}`,
    {
      headers: { Token: apiKey },
    }
  );

  if (response.status !== 200)
    return {
      error: {
        statusCode: response.status,
        message: 'Failed to get load shedding status',
      },
    };

  return { data: response.data };
}
