import './index.css';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeaderLayout from './layout/HeaderLayout';
import MainLayout from './layout/MainLayout';
import FooterLayout from './layout/FooterLayout';
import Loading from './animations/loading';
import CallButton from './components/CallButton';
import ScrollToTop from './components/ScrollToTop';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';

function App() {
  const [loadingActive, setLoadingActive] = useState(true);
  const [layoutgActive, setLayoutActive] = useState(false);
  //closed

  // fist animation
  setTimeout(() => {
    setLoadingActive(false)
  }, 2500)
  //closed

  //second animation
  setTimeout(() => {
    setLayoutActive(true)
  }, 2500)
  //closed
  
  // Инициализация AOS при монтировании компонента
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // once: true - анимация срабатывает только один раз
  }, []);



  return (
   <>
      {loadingActive && <Loading />
      }

      {layoutgActive &&  
      <Routes>
        <Route path="/" element={
          <div className="wrapper min-h-screen bg-gray-50">
            <HeaderLayout/>
            <MainLayout/>
            <FooterLayout/>
          </div>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
      }

      <CallButton />
      <ScrollToTop />
   </>
  );
}

export default App;
