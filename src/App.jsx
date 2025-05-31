import React from 'react';
    import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
    import Layout from '@/components/Layout';
    import BottegaPage from '@/pages/BottegaPage';
    import SucursalesPage from '@/pages/SucursalesPage';
    import LetturaPage from '@/pages/LetturaPage';
    import GiardinoPage from '@/pages/GiardinoPage';
    import MercatoPage from '@/pages/MercatoPage';
    import NuestraHistoriaPage from '@/pages/NuestraHistoriaPage';
    import { Toaster } from '@/components/ui/toaster';
    import FallingFlowers from '@/components/FallingFlowers';

    function App() {
      return (
        <Router>
          <FallingFlowers />
          <Layout>
            <Routes>
              <Route path="/" element={<Navigate to="/bottega" replace />} />
              <Route path="/bottega" element={<BottegaPage />} />
              <Route path="/nuestra-historia" element={<NuestraHistoriaPage />} />
              <Route path="/sucursales" element={<SucursalesPage />} />
              <Route path="/lettura" element={<LetturaPage />} />
              <Route path="/giardino" element={<GiardinoPage />} />
              <Route path="/mercato" element={<MercatoPage />} />
            </Routes>
          </Layout>
          <Toaster />
        </Router>
      );
    }

    export default App;