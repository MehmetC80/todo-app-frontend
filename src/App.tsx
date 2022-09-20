import { Routes, Route, NavLink } from 'react-router-dom';
import { IndexPage } from './pages';
import { Register } from './pages/register';
import LoginPage from './pages/login';

import { TbBook } from 'react-icons/tb';

function App() {
  return (
    <div className=''>
      <header className='py-4 '>
        <h1 className='text-4xl text-center tracking-widest font-serif'>
          <a href='\' className='flex justify-center'>
            PNA <TbBook />
          </a>
        </h1>
        <h2 className='text-center py-4 font-medium'>Personal Note App</h2>
      </header>
      <main className='flex justify-center px-4 '>
        <Routes>
          <Route path='/' element={<IndexPage />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<LoginPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
