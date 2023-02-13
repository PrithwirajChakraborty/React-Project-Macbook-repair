import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Aboutus from './Component/Aboutus';
import BookNow from './Component/Book';
import Calltoaction from './Component/Calltoaction';
import FAQ from './Component/FAQ';
import IPhone from './Component/IPhone';
import FooterC from './Component/FooterC';
import Intro from './Component/Intro';
import Navbar from './Component/NavbarC';
import Service from './Component/Service';
import IPad from './Component/IPad';
import Macbook from './Component/Macbook';
import TandC from './Component/TandC';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/service" element={<Service />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/iphonerepair" element={<IPhone />} />
        <Route path="/tandc" element={<TandC />} />
        <Route path="/calltoaction" element={<Calltoaction />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/booknow" element={<BookNow />} />
        <Route path="/ipadrepair" element={<IPad />} />
        <Route path="/macbookrepair" element={<Macbook/>} />
      </Routes>
      <FooterC />
    </>
  );
}

export default App;
