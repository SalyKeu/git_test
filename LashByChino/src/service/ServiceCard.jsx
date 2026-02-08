import React from 'react'
import BookingMenu from '@/component/BookingMenu';
import { Plus, X } from 'lucide-react';
import ClassicLash from '../modal/ClassicModal';
import HybridLash from '../modal/HybridModal';

function ServiceCard({title,duration, description, price,modalType, isOpen,openModal,setActiveModal}) {
    return (
        <div className={`flex flex-col md:max-w-md rounded-xl border-gray-200 border-2 p-4 space-y-0.5 mt-4 
        hover:shadow-lg transition hover:bg-gray-200 ${isOpen ? 'border-pink-200' : ''}`}
        onClick = {() => {
            openModal();
            setActiveModal(modalType);
        }}>
            <h3 className='font-semibold text-2xl'>{title}</h3>
            <p className='text-gray-400'>{duration}</p>
            <div className='flex items-center justify-between gap-4'>
                <p className='text-gray-400 line-clamp-1 flex-1'>{description}</p>
                <button
                type ="button"
                aria-label={`Add Card to booking`}
                className={`h-11 w-11 shrink-0 -mt-5 rounded-full border-2 shadow-lg transition focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 ${
            isOpen ? 'bg-pink-300' : 'bg-white text-black hover:bg-gray-200 hover:shadow-2xl hover:border-gray-300'
          }`}
                onClick={(e) => {
                    e.stopPropagation();
                    openModal();
                    setActiveModal(modalType);
                }}
                >
                    <Plus className="mx-auto h-5 w-5" />
                </button>
            </div>
            <p className='font-medium'>{price}</p>
        </div>
    )
};
export default ServiceCard;
