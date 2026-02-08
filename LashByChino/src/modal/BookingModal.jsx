import { Fragment, useState } from 'react'
import ClassicLash from './ClassicModal'
import HybridLash from './HybridModal';
import { useModal } from '../context/useModal';
import Logo from '../assets/classic.jpg'
import BookingMenu from '@/component/BookingMenu';
import ServiceCard from '@/service/ServiceCard';

function BookingModal() {
  const { isOpen, openModal, closeModal } = useModal();
  const [activeModal, setActiveModal] = useState(null);
  const service = [
          {
              title: "Classic Lashes",
              duration: "45 min - 1 hr",
              description: "A natural look that enhances your lashes with a single extension applied to each natural lash.",
              price: "$35",
              modalType: "classic",
              Component: ClassicLash,
          },
          {
              title: "Hybrid Lashes",
              duration: "1 hr - 1.5 hr",
              description: "A mix of classic and volume lashes for a textured, fuller look that still maintains a natural feel.",
              price: "$50",
              modalType: "hybrid",
              Component: HybridLash,
  
              
          }
      ]
  return (
    <section className="w-full h-screen flex flex-col justify-center space-y-4">
      <h1 className="font-bold text-5xl text-center">Services</h1>
      <div className='w-full h-screen overflow-x-hidden flex flex-col lg:flex-row justify-start'>
        {/* Service Card Section */}
      <div className="w-full lg:w-1/2 h-full flex flex-col md:ml-7 md:mr:7" >
        {/* Service Cards Render */}
        {service.map(({title, duration, description, price, modalType,Component}) => (
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
        ))}

      </div>
        {/* Booking */}
        <div className='w-full lg:w-1/2 flex flex-col md:ml-10 mt-10'>
          <div className='flex justify-start items-center gap-4'>
            <img src={Logo} alt="Brand Logo" className='w-50 h-50'/>
            <h2 className='font-bold text-3xl'>Book Your Appointment</h2>
          </div>
        </div>
      </div>
      {/* Booking Menu */}
      <div className='lg:hidden fixed left-0 right-0 bottom-0 z-50'>
        <BookingMenu />
      </div>
    </section>
  )
}

export default BookingModal