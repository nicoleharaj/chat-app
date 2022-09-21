export interface Message {
  id: number;
  timeSent: number;
  timeDelivered: number;
  value: string;
}

export interface User {
  id: number;
  email: string;
  password: string;
  displayName: string;
  customStatus?: string;
  contacts: User[];
}

