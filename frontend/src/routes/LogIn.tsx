import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

export default function LogIn() {
  return (
    <div className="flex w-screen h-screen justify-center items-center bg-slate-50">
      <div className="flex flex-col w-64 gap-3 text-slate-700">
        <form action="" className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-slate-800">Sign in</h1>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button primary size="xs" className="col-span-2 p-2">
            Log in
          </Button>
          <div className="text-xs">
            Don't have an account?
            <Link to="/sign-up" className="ml-1 underline">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
