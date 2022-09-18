import { Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Exchange from './pages/Exchange'

function App() {
  return (
    <div className="App ">
      {/*  #020717*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchange" element={<Exchange />} />
      </Routes>
    </div>
  );
}

export default App;
