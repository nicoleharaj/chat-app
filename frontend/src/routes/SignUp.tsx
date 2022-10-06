import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import Label from '../components/Label';

export default function SignUp() {
  return (
    <div className="flex w-screen h-screen justify-center items-center bg-slate-50">
      <div className="flex flex-col w-80 gap-3 text-slate-700">
        <h1 className="text-2xl font-bold text-slate-800">Create an account</h1>
        <form action="" className="grid grid-cols-2 gap-4">
          <Label>
            Name
            <Input type="text" name="name" required />
          </Label>
          <Label>
            Email address
            <Input type="email" name="email" required />
          </Label>
          <Label className="col-span-2">
            Password
            <Input type="password" name="password" required />
          </Label>
          <Label className="col-span-2">
            Confirm password
            <Input type="password" name="confirm-password" required />
          </Label>
          <Button primary size="xs" className="col-span-2 p-2">
            Register
          </Button>
        </form>
        <div className="text-xs">
          Already have an account?
          <Link to="/login" className="ml-1 underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
