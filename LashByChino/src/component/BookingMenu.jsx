import { useModal } from "@/context/useModal";
import { X, ShoppingCartIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import DatePicker from "../DatePicker/DatePicker";

function BookingMenuModal({ onClose }) {
  const { booking } = useModal();
  const calculateTotal = () => {
    return booking.reduce((sum, item) => {
      if (!item?.price) return sum;
      return sum + parseFloat(item.price.replace("$", ""));
    }, 0);
  };

  const calculateTotalDuration = () => {
    const totalMinutes = booking.reduce((total, { duration }) => {
      if (!duration) return total;

      const max = duration.split("-").pop().trim();
      const value = parseFloat(max);

      if (max.includes("hr")) return total + value * 60;
      if (max.includes("min")) return total + value;

      return total;
    }, 0);

    const hrs = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;

    return hrs ? (mins ? `${hrs} hr ${mins} min` : `${hrs} hr`) : `${mins} min`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 scrollbar-hide overflow-hidden">
      <div className="w-full max-w-md h-auto rounded-xl bg-white p-8 shadow-2xl">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Booking Menu</h1>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-2 hover:bg-gray-100"
              aria-label="Close booking menu modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          {booking.length > 0 && (
            <div className="flex flex-col mt-2 rounded-2xl border-black">
              {booking.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="font-semibold">{item.name}</span>
                  <span className="font-semibold">{item.duration}</span>
                  <span className="font-semibold">{item.price}</span>
                </div>
              ))}
              <div className="flex items-center justify-between gap-4 mt-4">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold">
                  ${calculateTotal().toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-semibold">Duration:</span>
                <span className="font-semibold">
                  {calculateTotalDuration()}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const BookingMenu = ({ onOpen }) => {
  const { booking } = useModal();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    if (onOpen) onOpen();
    setIsModalOpen(true);
  };
  const handleClose = () => setIsModalOpen(false);
  // ... (previous calculation functions remain effectively unchanged if I don't touch them, but I need to be careful with the range)

  const calculateTotal = () => {
    return booking.reduce((sum, item) => {
      // ... same logic
      if (!item?.price) return sum;
      return sum + parseFloat(item.price.replace("$", ""));
    }, 0);
  };

  const calculateTotalDuration = () => {
    // ... same logic
    const totalMinutes = booking.reduce((total, { duration }) => {
        if (!duration) return total;
        const max = duration.split("-").pop().trim();
        const value = parseFloat(max);
        if (max.includes("hr")) return total + value * 60;
        if (max.includes("min")) return total + value;
        return total;
    }, 0);
    const hrs = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    return hrs ? (mins ? `${hrs} hr ${mins} min` : `${hrs} hr`) : `${mins} min`;
  };

  const handleDatePicker = (e) => {
    e.stopPropagation();
    navigate("/date-picker");
  }
  return (
    <>
      {isModalOpen && <BookingMenuModal onClose={handleClose} />}
      <section
        className={`bottom-0 w-full bg-white border-t-2 border-gray-300 cursor-pointer fixed z-50 left-0 right-0`}
        style={{
          transform: "translateZ(0)",
          WebkitTransform: "translate3d(0,0,0)",
          willChange: "transform",
        }}
        onClick={handleOpen}
      >
        <div className="flex flex-col py-8 ml-7">
          <span className="font-semibold md:text-2xl text-lg">
            ${calculateTotal().toFixed(2)}
          </span>
          <div className="flex justify-start gap-4">
            <ShoppingCartIcon className="h-6 w-6 text-gray-300" />
            <span>{booking.length} services</span>
            <span>•</span>
            <span>{calculateTotalDuration()}</span>
            <button className="bg-pink-500 md:px-4 md:py-2 p-2 text-white border-2 border-black rounded-xl -mt-3 ml-auto mr-4 md:mr-10" onClick={handleDatePicker}>
              Continue
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default BookingMenu;
