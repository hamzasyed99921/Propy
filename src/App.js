import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Base from './components/Layouts/Base';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.refresh();
    AOS.init({
      // initialise with other settings
      duration : 1000
    });
  }, []);
  return (
    <div className="App">
       <BrowserRouter>
      <Base>
        <Routes>
          <Route index path="/" element={<Home/>} />
          {/* <Route path="/*" element={<PageNotFound />}/> */}
        </Routes>
      </Base>
    </BrowserRouter>
    </div>
  );
}

export default App;
