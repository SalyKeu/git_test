import { createContext,useContext,useState } from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
    // Services Modal Context
    const [booking, setBooking] = useState([]);
    const [activeModal, setActiveModal] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const [addBooking, setAddBooking] = useState(false);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");

    // Date Context 
    const [appointment, setAppointment] = useState([]);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);

    // Context Provider
    const handleBooking = () => {
    if (!name || !price) return;
    setBooking((prev) => [...prev, { name, description, duration, price }]);
    setAddBooking(true);
  };
    const addBookingItem = (item) => {
        if (!item?.name || !item?.price) return;
        if (booking.some((b) => b.name === item.name)) {
            console.log("Item already in booking:", item.name);
            return;
        }
        setBooking((prev) => [...prev, item]);
        setAddBooking(true);
    };
  const removeBookingItem = (itemName) => {
    setBooking((prev) => prev.filter((item) => item.name !== itemName));
    setAddBooking(false);
  };
    return (
        <BookingContext.Provider value={{
            handleBooking,
            booking,
            setBooking,
            isOpen,
            openModal,
            closeModal,
            addBooking,
            setAddBooking,
            name,
            setName,
            price,
            setPrice,
            duration,
            setDuration,
            description,
            setDescription,
            activeModal,
            setActiveModal,
            addBookingItem,
            removeBookingItem,
            appointment,
            setAppointment,
            date, 
            setDate,
            time,
            setTime,
        }}>
            {children}
        </BookingContext.Provider>
    );
};

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error("useBooking must be used within a BookingProvider");
    }
    return context;
};