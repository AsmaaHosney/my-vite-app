import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Layouts & Pages
import Layout from './Components/Layout/Layout.jsx';
import Home from './Components/Home/Home.jsx';

import NotFound from './Components/NotFound/NotFound.jsx';

// Other Pages
import About from './Components/About/About.jsx';
import Categories from './Components/Categories/Categories.jsx';
import Team from './Components/Team/Team.jsx';
import Testimonial from './Components/Testimonial/Testimonial.jsx';
import Footer from './Components/Footer/Footer.jsx';

import Page6 from './Components/Page6/Page6.jsx';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx';
import Aboutmore from './Components/Aboutmore/Aboutmore.jsx';

// Missing imports


import Opinions from './Components/Opinions/Opinions.jsx';
import Quest from './Components/Quest/Quest.jsx';


// Load Google Client ID from .env
const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

// Router Setup
const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
     
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
       { path: 'opinion', element: <Opinions /> },
      { path: 'aboutmore', element: <Aboutmore /> },
      { path: 'categories', element: <Categories /> },
      { path: 'team', element: <Team /> },
      { path: 'testimonial', element: <Testimonial /> },
         { path: 'page6', element: <Page6 /> },
      { path: 'footer', element: <Footer /> },
 { path: 'quest', element: <Quest /> },
  { path: 'protectedRoute', element: <ProtectedRoute/> },
      // Common Routes
    
      { path: '*', element: <NotFound /> },
    ],
  },
]);

// Main App Component
function App() {
  if (!googleClientId) {
    console.error('Missing Google Client ID in .env file.');
    return <div>Missing Google Client ID. Please set it in the .env file.</div>;
  }

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <RouterProvider router={routers} />
    </GoogleOAuthProvider>
  );
}

export default App;
