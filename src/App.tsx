import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Outlet } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';

function App() {
  return (
    <div className='container'>
      <Header />
      <main className='content'>
        <Heading className='title'>Converter.io</Heading>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
