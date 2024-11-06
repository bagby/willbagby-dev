import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Work from './pages/Work';
import Projects from './pages/Projects';

import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="skills" element={<Skills />} />
    <Route path="work" element={<Work />} />
    <Route path="projects" element={<Projects />} />
  </Route>
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
