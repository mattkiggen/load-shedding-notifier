import { createContext } from 'react';
import { LoadsheddingStatus } from './types';

export const DataContext = createContext<LoadsheddingStatus | null>(null);
