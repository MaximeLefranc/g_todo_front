// Router
import { Route, Routes, useLocation } from 'react-router-dom';

// Components
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';

// Pages
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Error from './Pages/Error/Error';
import Inscription from './Pages/Inscription/Inscription';

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <div className="container">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inscription" element={<Inscription />} />

          <Route
            path="*"
            element={
              <Error code={404} msg={"Oups.. cette page n'existe pas."} />
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
