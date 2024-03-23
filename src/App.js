
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './Page/Auth/login';
import RegisterPage from './Page/Auth/register';

function App() {
  return (
    <div className='font'>
      <BrowserRouter>
      <Routes>
      <Route index element={<homePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
