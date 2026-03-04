import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import './styles/global.css';

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<ServicePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
