// Router
import { Route, Routes, useLocation } from 'react-router-dom';

// Components
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';

// Pages
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <div className="container">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* <Route path="*" element={} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
