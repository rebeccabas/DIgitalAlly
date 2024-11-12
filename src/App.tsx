import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlobalMap from './components/GlobalMap';
import ReportIncident from './components/ReportIncident';
import ResourceHub from './components/ResourceHub';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import GenerateComplaint from './components/GenerateComplaint';
import ChatBot from './components/ChatBot';
import LegalResourcesPage from './components/LegalResources';
import EmergencyHelplines from './components/EmergencyHelplines';
import SupportGroups from './components/SupportGroups';

function App() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/chatbot' || 
                          location.pathname === '/generate-complaint' || 
                          location.pathname === '/legal-resources' ||
                          location.pathname === '/emergency' ||
                          location.pathname === '/support-groups';

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {!hideHeaderFooter && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <div className="snap-y snap-mandatory h-screen overflow-y-auto">
              <section className="snap-start"><Hero /></section>
              <section className="snap-start"><GlobalMap /></section>
              <section className="snap-start h-[150vh]"><ReportIncident /></section>
              <section className="snap-start h-screen"><ResourceHub /></section>
            </div>
          }
        />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/generate-complaint" element={<GenerateComplaint />} />
        <Route path="/legal-resources" element={<LegalResourcesPage />} />
        <Route path="/emergency" element={<EmergencyHelplines />} />
        <Route path="/support-groups" element={<SupportGroups />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default WrappedApp;