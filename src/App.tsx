import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlobalMap from './components/GlobalMap';
import ReportIncident from './components/ReportIncident';
import ResourceHub from './components/ResourceHub';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />
      <main>
        <Hero />
        <GlobalMap />
        <ReportIncident />
        <ResourceHub />
      </main>
      <Footer />
    </div>
  );
}

export default App;