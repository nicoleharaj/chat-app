import { InputProps } from '../utils/types';

export default function Input({ id, type, placeholder, required, name }: InputProps) {
  placeholder === undefined ? (placeholder = '') : (placeholder = placeholder);
  if (type === 'text' || type === 'password' || type === 'email') {
    if (required) {
      return (
        <input
          type={`${type}`}
          className="text-xs rounded-md border-none placeholder-slate-500 bg-slate-200/80 focus:bg-white focus:outline-none focus:ring-slate-300 focus:ring-offset-0"
          placeholder={`${placeholder}`}
          id={`${id}`}
          name={`${name}`}
          required
        ></input>
      );
    } else {
      return (
        <input
          type={`${type}`}
          className="text-xs rounded-md border-none placeholder-slate-500 bg-slate-200/80 focus:bg-white focus:outline-none focus:ring-slate-300 focus:ring-offset-0"
          placeholder={`${placeholder}`}
          id={`${id}`}
          name={`${name}`}
        ></input>
      );
    }
  }

  return <>hi</>;
}
