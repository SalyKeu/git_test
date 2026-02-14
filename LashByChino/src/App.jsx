import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Hompage from "./pages/Hompage";
import BookingModal from "./modal/BookingModal";
import DatePicker from "./DatePicker/DatePicker";
import UserInfo from "./UserInfo/UserInfo";
import { BookingProvider } from "./context/useBooking";
function AppRoutes() {
  const location = useLocation();
  const hideFooter = location.pathname === "/booking";

  return (
    <div className="pt-20">
      <NavBar />
      <Routes>
        <Route path="/" element={<Hompage />} />
        <Route path="/service" element={<div>Service Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/booking" element={<BookingModal />} />
        <Route path="/date-picker" element={<DatePicker />} />
        <Route path="/user-info" element={<UserInfo />} />
      </Routes>
      <div className="pb-20"></div>
      {!hideFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <BookingProvider>
            <AppRoutes />
      </BookingProvider>
    </BrowserRouter>
  );
}

export default App;
