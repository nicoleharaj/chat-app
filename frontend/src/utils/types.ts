import { ReactElement } from "react";

// export interface Message {
//   id: number;
//   timeSent: Date;
//   timeDelivered: Date;
//   value: string;
// }

export interface UserProps {
  email: string;
  password: string;
  displayName: string;
  customStatus?: string;
  contacts: UserProps[];
}

export interface MessageProps {
  // id: number;
  // sender: User;
  // receiver: User;
  children?: ReactElement | string;
  message?: string
  delivery: 'send' | 'receive';
  typing?: boolean;
}

export interface ButtonProps {
  size?: string;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  danger?: boolean;
  warning?: boolean;
  info?: boolean;
  className?: string;
  children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
}

export interface InputProps {
  id?: string;
  type: 'text' | 'email' | 'password' | 'checkbox' | 'color' | 'date';
  placeholder?: string;
  name?: string;
  required?: boolean;
}

export interface LabelProps {
  className?: string;
  children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
}