import { getClient } from '@tauri-apps/api/http';
import { getApiKey } from './storage';

const BASE_URL = 'https://developer.sepush.co.za';

export type LoadsheddingStatusResponse = {
  events: {
    end: string;
    note: string;
    start: string;
  }[];
  info: {
    name: string;
    region: string;
  };
  schedule: {
    days: {
      date: string;
      name: string;
      stages: string[][];
    }[];
    source: string;
  };
};

export async function getLoadsheddingStatus(): Promise<LoadsheddingStatusResponse | null> {
  try {
    const client = await getClient();
    const apiKey = getApiKey();
    const response = await client.get<LoadsheddingStatusResponse>(
      `${BASE_URL}/business/2.0/area?id=capetown-8-fishhoek`,
      {
        headers: { Token: apiKey },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
