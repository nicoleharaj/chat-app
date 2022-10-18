import { Route, Routes, Link } from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import LogIn from './routes/LogIn';
import SignUp from './routes/SignUp';

function App() {
  return (
    <>
      Connected!

      <ul>
        <li>
          <Link to="/dashboard">Home</Link>
        </li>
        <li>
          <Link to="/login">Log in</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
