import './App.css';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Header from '../src/components/home/header/Header'
import Footer from '../src/components/home/footer/Footer'
import Support from './pages/Support';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Blogs />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
