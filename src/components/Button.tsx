import classNames from 'classnames';
import { ReactElement } from 'react';

type B = {
  size?: string;
  type?: string;
  className?: string;
  children?: ReactElement | string;
};

export default function Button({ size, type, className, children }: B) {
  return (
    <button
      className={classNames(
        'outline-none rounded-md font-medium active:scale-95 focus:ring-none disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed',
        {
          'bg-indigo-600 text-white hover:bg-indigo-700 px-2 py-1': type === 'primary',
          'bg-slate-600 text-white hover:bg-slate-700 px-2 py-1': type === 'secondary',
          'bg-emerald-600 text-white hover:bg-emerald-700 px-2 py-1': type === 'success',
          'bg-rose-600 text-white hover:bg-rose-700 px-2 py-1': type === 'danger',
          'bg-yellow-300 text-neutral-700 hover:bg-yellow-400 px-2 py-1': type === 'warning',
          'bg-sky-500 text-white hover:bg-sky-600 px-2 py-1': type === 'info',
        },
        {
          'text-xs': size === 'xs',
          'text-s': size === 'sm',
          'text-base': size === 'base',
          'text-lg': size === 'lg',
          'text-xl': size === 'xl',
          'text-2xl': size === '2xl',
          'text-3xl': size === '3xl',
          'text-4xl': size === '4xl',
        },
        `${className}`
      )}
    >
      {children}
    </button>
  );
}
