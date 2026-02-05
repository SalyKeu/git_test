import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Hompage from "./pages/Hompage";

function App() {
  return (
    <BrowserRouter>
      <div className="pt-20">
        <NavBar />
        <Routes>
          <Route path="/" element={<Hompage />} />
          <Route path="/service" element={<div>Service Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
        <div className="pb-20">

        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
