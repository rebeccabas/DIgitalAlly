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
  // Update the condition to include '/legal-resources'
  const hideHeaderFooter = location.pathname === '/chatbot' || location.pathname === '/generate-complaint' || location.pathname === '/legal-resources';

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {!hideHeaderFooter && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <GlobalMap />
              <ReportIncident />
              <ResourceHub />
            </>
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
