import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import ErrorPage from './pages/Error/ErrorPage';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        ></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
