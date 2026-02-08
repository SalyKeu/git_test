import { useModal } from "@/context/useModal";
import { X,ShoppingCartIcon } from "lucide-react";
import {useState } from "react";
import React from "react";



function BookingMenuModal({ onClose }) {
     const { booking } = useModal();
  const calculateTotal = () => {
    return booking.reduce((sum, item) => {
      if (!item?.price) return sum;
      return sum + parseFloat(item.price.replace("$", ""));
    }, 0);
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
              <span className="font-semibold">${calculateTotal().toFixed(2)}</span>
            </div>
          </div>
        )}
          
        </div>
      </div>
    </div>
  );
}


function BookingMenu({ onOpen }) {
  const { booking } = useModal();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => {
    if (onOpen) onOpen();
    setIsModalOpen(true);
  };
  const handleClose = () => setIsModalOpen(false);
  const calculateTotal = () => {
    return booking.reduce((sum, item) => {
      if (!item?.price) return sum;
      return sum + parseFloat(item.price.replace("$", ""));
    }, 0);
  };
  return (
    <>
      {isModalOpen && <BookingMenuModal onClose={handleClose} />}
      <section
        className={`bottom-0 w-full rounded-xl bg-white `}
        onClick={handleOpen}
      >
        <div className="flex flex-col border-t-2 py-8 border-gray-300 ml-7">
            <span className="font-semibold">${calculateTotal().toFixed(2)}</span>
         <div className="flex justify-start gap-4">
            <ShoppingCartIcon className="h-6 w-6" />
              <span className="font-semibold">Total:</span>
        </div>
      </div>
        
      </section>
    </>
  );
}
export default BookingMenu

