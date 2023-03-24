import { createContext } from 'react';
import { LoadsheddingStatusResponse } from './http';

export const DataContext = createContext<LoadsheddingStatusResponse | null>(
  null
);
