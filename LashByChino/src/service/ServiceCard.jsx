import React, { act } from "react";
import BookingMenu from "@/component/BookingMenu";
import { Plus, X, Check } from "lucide-react";
import { useBooking } from "@/context/useBooking";

function ServiceCard({
  title,
  duration,
  description,
  price,
  modalType,
  isOpen,
  openModal,
  setActiveModal,
  activeModal,
}) {
  const { booking, removeBookingItem, addBookingItem } = useBooking();
  const isAdded = booking.some((item) => item.name === title);

  const handleButtonClick = (e) => {
    e.stopPropagation();
    addBookingItem({ name: title, description, duration, price });
  };

  return (
    <div
      className={`flex flex-col md:w-full rounded-xl md:mr-7 border-gray-200 border-2 p-4 space-y-0.5 mt-4 
        hover:shadow-lg transition hover:bg-gray-200 ${isOpen ? "border-pink-200" : ""} ${isAdded ? "border-pink-300" : ""} `}
      onClick={() => {
        openModal();
        setActiveModal(modalType);
      }}
    >
      <h3 className="font-semibold text-2xl">{title}</h3>
      <p className="text-gray-400">{duration}</p>
      <div className="flex items-center justify-between gap-4">
        <p className="text-gray-400 line-clamp-1 flex-1">{description}</p>
        <button
          type="button"
          aria-label={isAdded ? `Remove from booking` : `Add to booking`}
          className={`h-11 w-11 shrink-0 -mt-5 rounded-full shadow-lg transition border-2 flex items-center justify-center ${
            isAdded
              ? "bg-pink-300 shadow-none"
              : "bg-white text-black border-gray-200 hover:bg-gray-200 hover:shadow-2xl hover:border-gray-300"
          }`}
          onClick={handleButtonClick}
        >
          {isAdded ? (
            <Check className="h-5 w-5 text-white" />
          ) : (
            <Plus className="h-5 w-5" onClick={handleButtonClick} />
          )}
        </button>
      </div>
      <p className="font-medium">{price}</p>
    </div>
  );
}
export default ServiceCard;
