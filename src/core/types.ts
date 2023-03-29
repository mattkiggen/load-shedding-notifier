export type LoadsheddingStatus = {
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

export type Error = {
  statusCode: number;
  message: string;
};

export type Response = {
  data?: LoadsheddingStatus;
  error?: Error;
};
