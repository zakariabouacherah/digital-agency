import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import SingleService from "./pages/services/sections/SingleService";
import { ServiceProvider } from "./context/ServiceContext";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <>
      <Router>
        <ServiceProvider>
          <Navbar />
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/services/:id" element={<SingleService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </ServiceProvider>
      </Router>
    </>
  );
}

export default App;
