import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import { ModalProvider } from "./context/useModal";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Hompage from "./pages/Hompage";
import BookingModal from "./modal/BookingModal";
import DatePicker from "./DatePicker/DatePicker";
import { DateProvider } from "./context/useDate";
import UserInfo from "./component/UserInfo/UserInfo";

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
      <ModalProvider>
        <DateProvider>
          <AppRoutes />
        </DateProvider>
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
