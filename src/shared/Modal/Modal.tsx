import React, { useCallback, useEffect, useState } from 'react'
import { ModalWindow, Overlay } from './styled'

type TModal = {
  children: React.ReactNode
  closeModal: () => void
  isOpen: boolean
}

export const Modal: React.FC<TModal> = ({ children, closeModal, isOpen }) => {
  const [shouldRender, setShouldRender] = useState(isOpen)

  const closeModalHandler = useCallback(() => {
    closeModal()
  }, [closeModal])

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
    } else {
      const timer = setTimeout(() => setShouldRender(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])
  const getScrollbarWidth = () => {
    // Створюємо елемент div
    const outer = document.createElement('div')
    outer.style.visibility = 'hidden'
    outer.style.overflow = 'scroll' // примусово додавання скролбару
    document.body.appendChild(outer)

    // Створюємо внутрішній div
    const inner = document.createElement('div')
    outer.appendChild(inner)

    // Розрахунок ширини скролбара
    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth

    // Видаляємо тимчасові елементи
    outer!.parentNode!.removeChild(outer)

    return scrollbarWidth
  }
  useEffect(() => {
    const handleUserKeyPress = (event: KeyboardEvent) => {
      const { key } = event
      if (key === 'Escape') {
        closeModalHandler()
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleUserKeyPress)
    }

    return () => {
      window.removeEventListener('keydown', handleUserKeyPress)
    }
  }, [closeModalHandler, isOpen])

  function onClick(e: React.MouseEvent) {
    if (e.target === e.currentTarget) {
      closeModalHandler()
    }
  }

  useEffect(() => {
    const disableScroll = () => {
      const scrollbarWidth = getScrollbarWidth()
      document.body.style.paddingRight = `${scrollbarWidth}px`
      document.body.style.overflow = 'hidden'
    }

    const enableScroll = () => {
      document.body.style.paddingRight = ''
      document.body.style.overflow = ''
    }
    if (shouldRender) {
      disableScroll()
    } else {
      enableScroll()
    }
    return () => enableScroll()
  }, [shouldRender])

  if (!shouldRender) return null

  return (
    <Overlay onClick={onClick} className={!isOpen ? 'closing' : ''}>
      <ModalWindow className={!isOpen ? 'closing' : ''}>{children}</ModalWindow>
    </Overlay>
  )
}
