import { useEffect, useState } from 'react'
export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    const closeOnEscape = (event) => event.key === 'Escape' && setIsOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', closeOnEscape) }
  }, [isOpen])
  return { isOpen, close: () => setIsOpen(false), toggle: () => setIsOpen((open) => !open) }
}
