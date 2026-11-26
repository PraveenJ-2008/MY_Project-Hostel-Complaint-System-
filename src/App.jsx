
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentLogin from './pages/StudentLogin';
import StudentRegister from './pages/StudentRegister';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentLogin />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/register" element={<StudentRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
