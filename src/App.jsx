import React, {useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './layouts/Home';
import './App.css'

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('luo');

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header
          currentLanguage={currentLanguage}
          setCurrentLanguage={setCurrentLanguage}
        />
        <main className="flex-grow pt-0">
          <Routes>
             <Route path="/" element={<Home currentLanguage={currentLanguage} />} />
            {/*<Route path="/about/mission" element={<Mission />} />
            <Route path="/about/values" element={<CommunityValues />} />
            <Route path="/about/team" element={<LeadershipTeam />} />
            <Route path="/about/stories" element={<SuccessStories />} />
            <Route path="/professionals/browse" element={<BrowseProfessionals />} />
            <Route path="/professionals/training" element={<ProfessionalTraining />} />
            <Route path="/community/welfare" element={<WelfareSupport />} />
            <Route path="/community/jobs" element={<JobOpportunities />} />
            <Route path="/community/networking-events" element={<NetworkingEvents />} />
            <Route path="/community/csr" element={<CSRInitiatives />} /> */}
            {/* <Route path="/leagues" element={<Leagues />} /> */}
            {/* <Route path="/game-tickets" element={<Tickets />} /> */}
          </Routes>
        </main>
        <Footer 
          currentLanguage={currentLanguage}
        />
      </div>
    </Router>
  )
}

export default App
