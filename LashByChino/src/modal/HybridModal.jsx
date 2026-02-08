import React from 'react'
import { Plus, X } from "lucide-react";
import { useModal } from '@/context/useModal';

function HybridLash({ onClose, title, duration, description, price }) {
  const { addBookingItem } = useModal();
  const handleAdd = () => {
    addBookingItem({ name: title, description, duration, price });
    onClose();
  };
    
  
  return (
    <div className="w-full">
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-xl font-semibold">Hybrid Lashes</h2>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-400"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-3 text-gray-600">
              Elevate your natural beauty with our Lash Lift and Tint service. This transformative
              treatment enhances your lashes, giving them a gorgeous, lifted appearance while adding
              depth and richness with a custom tint. Enjoy beautifully curled, defined lashes that lasts
              up to 6-8 weeks—perfect for those who want to wake up ready to go!
            </p>
            <div className='flex justify-between mt-4'>
                <p className='font-medium'>$40</p>
                <button type='button' aria-label='add to booking' className='font-serif rounded-lg p-3 bg-linear-to-r from-pink-400 to-pink-300 
                text-black hover:from-pink-500 hover:to-pink-400 
                transition duration-300 font-bold shadow-md -mt-5 md:ml-auto mr-6'
                onClick={handleAdd}>
                  Add
                </button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default HybridLash;

