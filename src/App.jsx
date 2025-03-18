import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import './App.css';
import LP from './component/LP';

function Analytics() {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics の初期化
    ReactGA.initialize("G-3QQ3Z3WEYH");
    // ページ遷移ごとにページビューを送信
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <Analytics />
      <Routes>
        <Route path="/" element={<LP />} />
      </Routes>
    </Router>
  );
}

export default App;
