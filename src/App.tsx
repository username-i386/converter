import './App.css';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <Header />
      <main className='content'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
