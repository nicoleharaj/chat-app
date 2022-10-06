import { Route, Routes, Link } from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import LogIn from './routes/LogIn';
import SignUp from './routes/SignUp';

function App() {
  return (
    <>
      Connected!

      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
