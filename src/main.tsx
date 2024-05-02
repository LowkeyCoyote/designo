import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from '@pages/HomePage.tsx'
import WebDesignPage from '@pages/WebDesignPage.tsx'
import AppDesignPage from '@pages/AppDesignPage.tsx'
import GraphicDesignPage from '@pages/GraphicDesignPage.tsx'
import AboutPage from '@pages/AboutPage.tsx'
import LocationsPage from '@pages/LocationsPage.tsx'
import ContactPage from '@pages/ContactPage.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element : <App/>,
    

    children : [{
      path : '',
      element : <HomePage/>
    }, {
      path : '/web-design',
      element : <WebDesignPage />
    }, {
      path : '/app-design',
      element : <AppDesignPage />
    },{
      path : '/graphic-design',
      element : <GraphicDesignPage />
    }, {
      path : '/about',
      element : <AboutPage />
    },
    {
      path : '/locations',
      element : <LocationsPage />
    },
    {
      path : '/contact',
      element : <ContactPage />
    }
  ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
