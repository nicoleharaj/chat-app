import { LabelProps } from '../utils/types';
import classNames from 'classnames';

export default function Label({ className, children }: LabelProps) {
  return <label className={classNames('flex flex-col gap-2 text-xs bold text-slate-700', `${className}`)}>{children}</label>;
}
