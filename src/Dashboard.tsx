import { User } from './utils/types';
import Button from './components/Button';

let john: User = {
  id: 1,
  email: 'johnsmith@protonmail.com',
  password: '',
  displayName: 'John Smith',
  contacts: [],
};

let nicole: User = {
  id: 1,
  email: 'nicoleharaj@outlook.com',
  password: '',
  displayName: 'Nicole Haraj',
  contacts: [john],
};

john.contacts.push(nicole);

export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen text-slate-900/80">
      <header className="flex justify-between items-center px-6 py-2 border-b border-slate-900/10 bg-white">
        <h1 className="hidden md:block font-semibold text-xl">App</h1>
        <Button className="h-6 block md:hidden">
          <span className="material-symbols-rounded">menu</span>
        </Button>
        <div className="flex items-center gap-4">
          <div className="relative flex flex-col pr-5 text-slate-700 text-sm text-right after:content-[''] after:absolute after:border-x-4 after:border-x-transparent after:border-t-4 after:border-t-slate-700 after:right-0 after:top-[calc(50%-2px)] hover:after:rotate-180">
            <div className="font-semibold">{nicole.displayName}</div>
            <div className="text-xs text-slate-400 ">{nicole.email}</div>
          </div>
        </div>
      </header>
      <main className="flex flex-row flex-grow">
        <div className="hidden w-80 md:flex lg:w-80 border-r border-slate-900/10">
          <div className="flex flex-col w-full">
            <div className="flex border-b items-center border-slate-900/10 px-6 py-3">
              <h2 className="flex-grow font-semibold">Recent Messages</h2>
              <button className="h-6 outline-none focus:ring-none disabled:text-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed material-symbols-rounded scale-75">edit_square</button>
            </div>
            <div className="px-6 py-4"> </div>
          </div>
        </div>
        <div className="flex-grow flex flex-col h-full">
          <div className="flex bg-white px-6 py-3">
            <h2 className="font-semibold">{john.displayName}</h2>
          </div>
          <div className="flex flex-grow px-6 py-4 border-y border-slate-900/10 bg-slate-100"></div>
          <div className="flex gap-6 bg-white px-6 py-4">
            <input
              type="text"
              className="flex-grow text-xs rounded-md border-none placeholder-slate-400 bg-slate-100 focus:bg-white focus:outline-none focus:ring-slate-300"
              placeholder="Type a new message"
            ></input>

            <Button type="primary" className="material-symbols-rounded">
              send
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
