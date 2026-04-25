export type event = {
    type: string,
    date: string;
    description: string;
    id: string;
}

export type eventsResponse = {
  data: event[];
  message: string;
  status: number;
}