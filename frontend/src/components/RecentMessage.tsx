import classNames from 'classnames';
import { MessageProps } from '../utils/types';

export default function RecentMessage() {
  return (
    <div className="px-6 py-4 hover:bg-slate-100 transition-colors cursor-pointer">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <h2>John Smith</h2>
          <div className="text-xs text-slate-400">12:42 PM</div>
        </div>
        <div className="text-xs w-60 truncate text-slate-500">You: Lorem ipsum dolor sit amet, consectetur adipisicing elit. omnis ipsum illo? 🥰</div>
      </div>
    </div>
  );
}
