import classNames from 'classnames';
import { ButtonProps } from '../utils/types';

export default function Button({ size, primary, secondary, success, danger, warning, info, className, children }: ButtonProps) {
  return (
    <button
      className={classNames(
        'outline-none rounded-md font-medium active:scale-95 focus:ring-none disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed',
        {
          'bg-indigo-600 text-white hover:bg-indigo-700': primary,
          'bg-slate-600 text-white hover:bg-slate-700': secondary,
          'bg-emerald-600 text-white hover:bg-emerald-700': success,
          'bg-rose-600 text-white hover:bg-rose-700': danger,
          'bg-yellow-300 text-neutral-700 hover:bg-yellow-400': warning,
          'bg-sky-500 text-white hover:bg-sky-600': info,
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
