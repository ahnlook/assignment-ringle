import { useRef } from 'react'
import { createPortal } from 'react-dom'

import Dimmed from './Dimmed'
import useOutsideClick from '../../hooks/useOutsideClick'

const Modal = ({
  onClose,
  children
}: {
  onClose: () => void
  children: React.ReactNode
}) => {
  const modalRef = useRef<HTMLDivElement>(null)
  useOutsideClick(modalRef, onClose)

  return createPortal(
    <>
      <Dimmed />
      <div className='fixed inset-0 h-screen flex items-center justify-center opacity-100 translate-y-0 z-20'>
        <div
          className='w-full max-w-[724px] p-8 flex flex-col gap-y-4 rounded-2xl bg-white shadow-lg'
          ref={modalRef}
        >
          {children}
        </div>
      </div>
    </>,
    document.body
  )
}

export default Modal
