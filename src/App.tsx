import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Outlet } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className='container'>
      <Header />
      <main className='content'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
