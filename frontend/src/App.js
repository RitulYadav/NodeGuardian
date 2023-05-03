import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/main/Home';
import Main from './components/main';
import Login from './components/main/Login';
import Signup from './components/main/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/main/home"/>}/>
        
          < Route path="main" element={<Main />}>
            <Route path="home" element={<Home />} />
            < Route path="signup" element={<Signup />} />
            < Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
