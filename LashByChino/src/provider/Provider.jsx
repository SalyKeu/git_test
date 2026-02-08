import React from 'react'
import { ModalProvider } from '../context/useModal';

function Provider({children}) {
  return (
    <ModalProvider>
        {children}
    </ModalProvider>
  )
}

export default Provider