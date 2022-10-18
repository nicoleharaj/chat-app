import classNames from 'classnames';
import { MessageProps } from '../utils/types';

export default function Message({ delivery, typing, children }: MessageProps) {
  if (typing && delivery === 'receive') {
    return (
      <div className={classNames('h-min p-3 rounded-lg shadow bg-white place-self-start text-white')}>
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-slate-300 rounded-full animate-[pulse_1.2s_ease-in-out_infinite]"></div>
          <div className="w-2 h-2 bg-slate-300 rounded-full animate-[pulse_1.2s_ease-in-out_.3s_infinite]"></div>
          <div className="w-2 h-2 bg-slate-300 rounded-full animate-[pulse_1.2s_ease-in-out_.6s_infinite]"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={classNames('h-min p-3 text-sm rounded-lg shadow', {
        'bg-white place-self-start': delivery === 'receive',
        'bg-indigo-600 place-self-end text-white': delivery === 'send',
      })}
    >
      {children}
    </div>
  );
}
