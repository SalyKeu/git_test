import { useState, createContext, useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
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
  const handleBooking = () => {
    if (!name || !price) return;
    setBooking((prev) => [...prev, { name, description, duration, price }]);
    setAddBooking(true);
  };
  const addBookingItem = (item) => {
    if (!item?.name || !item?.price) return;
    if (booking.some((b) => b.name === item.name)) return;
    console.log("Item already in booking:", item.name);
    setBooking((prev) => [...prev, item]);
    setAddBooking(true);
  };
  const removeBookingItem = (itemName) => {
    setBooking((prev) => prev.filter((item) => item.name !== itemName));
    setAddBooking(false);
  };


  return (
    <ModalContext.Provider
      value={{
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
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
