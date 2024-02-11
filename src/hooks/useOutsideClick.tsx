import { RefObject, useEffect } from 'react'

interface UseOutsideClick {
  ref: RefObject<HTMLElement>
  callback: () => void
}

const useOutsideClick = ({ ref, callback }: UseOutsideClick) => {
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
