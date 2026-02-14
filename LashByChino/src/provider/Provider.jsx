import React from 'react'
import { BookingProvider } from '@/context/useBooking'

function Provider({children}) {
  return (
    <BookingProvider>
        {children}
    </BookingProvider>
  )
}

export default Provider