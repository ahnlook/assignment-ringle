import { RefObject, useEffect } from 'react'

const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    const enableClickListener = () =>
      document.addEventListener('click', handleClickOutside)
    const disableClickListener = () =>
      document.removeEventListener('click', handleClickOutside)

    const timer = setTimeout(enableClickListener, 100)

    return () => {
      clearTimeout(timer)
      disableClickListener()
    }
  }, [ref, callback])
}

export default useOutsideClick
