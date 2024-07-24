import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Team from './components/Team';
import NewsLetter from './components/NewsLetter';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import SkillsPage from './components/SkillsPage';
import IdentityForm from './components/Verification';
import SubmittedData from './components/SubmittedData';

const Home = ({ onLinkClick, clickCount }) => {
  return (
    <div>
      <Banner />
      <Skills />
      <Team />
      <NewsLetter />
      <Contacts />
      <Footer />
      <li className='bg bg-zinc-800'>
        <button onClick={onLinkClick}>
          END OF WEBPAGE (Clicked {clickCount} times)
        </button>
      </li>
    </div>
  );
};

const App = () => {
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount >= 20) {
        navigate('/submitted-data');
      }
      return newCount;
    });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Home onLinkClick={handleLinkClick} clickCount={clickCount} />}
      />
      <Route path="/skill/:id" element={<SkillsPage />} />
      <Route path="/submitted-data" element={<SubmittedData />} />
      <Route path="/verification" element={<IdentityForm />} />
    </Routes>
  );
};

export default App;
