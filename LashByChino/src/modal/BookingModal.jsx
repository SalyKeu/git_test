import { Fragment, useState } from "react";
import ClassicLash from "./ClassicModal";
import HybridLash from "./HybridModal";
import { useModal } from "../context/useModal";
import Logo from "../assets/classic.jpg";
import BookingMenu from "@/component/BookingMenu";
import ServiceCard from "@/service/ServiceCard";
import { X } from "lucide-react";

function BookingModal({ onClose }) {
  const { isOpen, openModal, closeModal, booking } = useModal();
  const [activeModal, setActiveModal] = useState(null);
  const calculateTotal = () => {
    return booking.reduce((sum, item) => {
      if (!item?.price) return sum;
      return sum + parseFloat(item.price.replace("$", ""));
    }, 0);
  };
  const service = [
    {
      title: "Classic Lashes",
      duration: "45 min - 1 hr",
      description:
        "A natural look that enhances your lashes with a single extension applied to each natural lash.",
      price: "$35",
      modalType: "classic",
      Component: ClassicLash,
    },
    {
      title: "Hybrid Lashes",
      duration: "1 hr - 1.5 hr",
      description:
        "A mix of classic and volume lashes for a textured, fuller look that still maintains a natural feel.",
      price: "$50",
      modalType: "hybrid",
      Component: HybridLash,
    },
  ];
  return (
    <>
      <section className="w-full h-screen flex flex-col justify-center space-y-4">
        <h1 className="font-bold text-5xl text-center">Services</h1>
        <div className="w-full h-screen overflow-x-hidden flex lg:flex-row items-stretch">
          {/* Service Card Section */}
          <div className="w-full lg:w-1/2 h-full flex flex-col">
            {/* Service Cards Render */}
            {service.map(
              ({
                title,
                duration,
                description,
                price,
                modalType,
                Component,
              }) => (
                <Fragment key={title}>
                  {isOpen && activeModal === modalType && (
                    <Component
                      onClose={closeModal}
                      title={title}
                      duration={duration}
                      description={description}
                      price={price}
                    />
                  )}
                  <ServiceCard
                    title={title}
                    duration={duration}
                    description={description}
                    price={price}
                    modalType={modalType}
                    isOpen={isOpen && activeModal === modalType}
                    openModal={openModal}
                    setActiveModal={setActiveModal}
                    Component={Component}
                  />
                </Fragment>
              ),
            )}
          </div>
          {/* Booking */}
          <div className="w-full lg:w-1/2 h-full flex-col md:ml-10 lg:block hidden border-2 border-gray-300 mt-4 rounded-xl">
            <div className="flex flex-col justify-center items-center gap-4 ">
              <div className="w-full max-w-md h-auto rounded-xl bg-white p-8 shadow-2xl">
                <div className="flex flex-col">
                  <div className="flex justify-between mb-6">
                    <h1 className="text-2xl font-bold">Booking Menu</h1>
                  </div>
                  {booking.length > 0 && (
                    <div className="flex flex-col mt-2 rounded-2xl border-black">
                      {booking.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between"
                        >
                          <span className="font-semibold">{item.name}</span>
                          <span className="font-semibold">{item.duration}</span>
                          <span className="font-semibold">{item.price}</span>
                        </div>
                      ))}
                      <div className="flex items-center justify-between gap-4 mt-15">
                        <span className="font-semibold">Total:</span>
                        <span className="font-semibold">
                          ${calculateTotal().toFixed(2)}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Booking Menu */}
      <div className="lg:hidden">
        <BookingMenu />
      </div>
    </>
  );
}

export default BookingModal;
