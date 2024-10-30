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

function App() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/chatbot' || location.pathname === '/generate-complaint';

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
