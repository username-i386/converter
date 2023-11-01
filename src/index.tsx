import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { TemperaturePage } from './page/temperaturePage';
import { MassPage } from './page/massPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <TemperaturePage />
      },
      {
        path: '/mass',
        element: <MassPage /> 
      },
      {
        path: '/valuta',
        element: <h1>Курсы валют</h1>
      },
      {
        path: '/volume',
        element: <h1>Объем и емкость</h1>
      },
      {
        path: '/square',
        element: <h1>Площадь</h1>
      },
      {
        path: '/speed',
        element: <h1>Скорость бега</h1>
      },
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

