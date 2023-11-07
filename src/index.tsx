import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { TemperaturePage } from './page/temperaturePage';
import { MassPage } from './page/massPage';
import { VolumePage } from './page/volumePage';
import { SquarePage } from './page/squarePage';

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
        path: '/volume',
        element: <VolumePage />
      },
      {
        path: '/square',
        element: <SquarePage />
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

