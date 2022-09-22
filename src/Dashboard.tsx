import { User } from './utils/types';
import Button from './components/Button';
import Message from './components/Message';

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
    <div className="flex flex-col h-screen text-slate-700">
      <header className=" flex justify-between items-center px-6 py-2 border-b border-slate-900/10 bg-slate-50">
        <h1 className="hidden lg:block font-semibold text-xl">App</h1>
        <Button className="h-6 block lg:hidden">
          <span className="material-symbols-rounded">menu</span>
        </Button>
        <div className="flex items-center gap-4">
          <div className="relative flex flex-col pr-5 text-slate-700 text-sm text-right after:content-[''] after:absolute after:border-x-4 after:border-x-transparent after:border-t-4 after:border-t-slate-700 after:right-0 after:top-[calc(50%-2px)] hover:after:rotate-180">
            <div className="font-semibold">{nicole.displayName}</div>
            <div className="hidden lg:block text-xs text-slate-400 ">{nicole.email}</div>
          </div>
        </div>
      </header>
      <main className="flex flex-row flex-grow">
        <div className="hidden w-80 lg:flex lg:w-80 border-r border-slate-900/10">
          <div className="flex flex-col w-full bg-slate-50">
            <div className="flex border-b items-center border-slate-900/10 px-6 py-3">
              <h2 className="flex-grow font-semibold">Recent Messages</h2>
              <Button className="h-6">
                <span className="scale-75 material-symbols-rounded">edit_square</span>
              </Button>
            </div>
            <div className="px-6 py-4"> </div>
          </div>
        </div>
        <div className="flex-grow flex flex-col">
          <div className="flex bg-slate-50 h-12 px-6 py-3">
            <h2 className="font-semibold">{john.displayName}</h2>
          </div>
          <div className="flex flex-col flex-grow w-100 gap-2 px-6 py-4 overflow-auto border-y border-slate-900/10 bg-slate-100">
            <Message delivery="receive">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquam, minima aperiam iure</Message>
            <Message delivery="send">enim aliquid a reprehenderit tempore.</Message>
            <Message delivery="receive">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro facilis iste sunt laborum, saepe atque alias eius!</Message>
            <Message delivery="receive">Commodi ullam ipsa facere repellendus nostrum doloribus explicabo aut totam numquam suscipit voluptatem non enim ipsam voluptatibus.</Message>
            <Message delivery="send">Facere repellendus nostrum doloribus explicabo aut totam numquam suscipit voluptatem non enim ipsam voluptatibus</Message>
            <Message delivery="receive">Minima aperiam iure, aut totam numquam suscipit voluptatem non enim ipsam voluptatibus.</Message>
            <Message delivery="send">Lorem ipsum dolor sit amet consectetur adipisicing elit</Message>
            <Message delivery="receive">Explicabo aut totam numquam suscipit voluptatem non enim ipsam voluptatibus.</Message>
            <Message delivery="send">Commodi ullam ipsa facere repellendus aut totam numquam suscipit voluptatem non enim ipsam voluptatibus.</Message>
            <Message delivery="send">Nostrum doloribus explicabo</Message>
            <Message delivery="send">Aut totam numquam suscipit voluptatem non enim ipsam voluptatibus.</Message>
            <Message delivery="receive">💀💀💀💀</Message>
            <Message delivery="send">Lorem ipsum dolor sit amet, consectetur adipisicing elit. omnis ipsum illo? 🥰</Message>
            <Message delivery="receive" typing></Message>
          </div>
          <div className="flex gap-4 bg-slate-50 px-6 py-4">
            <input
              type="text"
              className="flex-grow text-xs rounded-md border-none placeholder-slate-500 bg-slate-200/80 focus:bg-white focus:outline-none focus:ring-slate-300 focus:ring-offset-0"
              placeholder="Type a new message"
            ></input>
            <Button className="rounded-full px-0 material-symbols-rounded">emoji_emotions</Button>
            <Button primary className="material-symbols-rounded">
              send
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
