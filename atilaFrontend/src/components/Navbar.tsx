import { useEffect, useRef, useState } from 'react'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

import LogoAtila from '../assets/LogoAtila.svg'


import ModalHamburguesa from './ModalHamburguesa'
import { navLinks } from '../constants/navLinks'

function Navbar() {
  const navCenterRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mostrarHamburguesa, setMostrarHamburguesa] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => setIsModalOpen((prev) => !prev)

  useEffect(() => {
    const checkLayout = () => {
      const nav = navCenterRef.current
      const container = containerRef.current
      if (!nav || !container) return

      const centroNoCabe = nav.scrollWidth > nav.offsetWidth
      const layoutColapsado = container.scrollWidth > container.offsetWidth

      setMostrarHamburguesa(centroNoCabe || layoutColapsado)
    }

    const resizeObserver = new ResizeObserver(checkLayout)

    if (navCenterRef.current) resizeObserver.observe(navCenterRef.current)
    if (containerRef.current) resizeObserver.observe(containerRef.current)

    window.addEventListener('resize', checkLayout)
    window.addEventListener('scroll', checkLayout)
    checkLayout()

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', checkLayout)
      window.removeEventListener('scroll', checkLayout)
    }
  }, [])

  return (
    <>
        {/* NavBar General H controla la altura (ancho vertical) */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-30 px-4">
        <div
          ref={containerRef}
          className="max-w-7xl mx-auto h-full flex items-center justify-between gap-2"
        >
          {/* IZQUIERDA - LOGO */}
            <div className="flex items-center justify-start flex-[1_1_0%] min-w-0">
                <img
                    src={LogoAtila}
                    alt="Logo de la clínica"
                    className="h-20 w-auto object-contain"
                />
            </div>

          {/* CENTRO - ACCIONES o BOTÓN */}
          <div className="flex items-center justify-center flex-[1_1_0%] min-w-0 overflow-hidden">
            {mostrarHamburguesa ? (
              <button
                onClick={toggleModal}
                className="text-gray-700 hover:text-blue-600 text-5xl px-2 py-1"
              >
                ☰
              </button>
            ) : (
                <nav
                ref={navCenterRef}
                className="flex justify-center items-center gap-3 text-sm overflow-hidden"
                >
                {navLinks.map(link => (
                    <a
                    key={link.href}
                    href={link.href}
                    className="text-gray-700 hover:text-blue-500 whitespace-nowrap"
                    >
                    {link.label}
                    </a>
                ))}
                </nav>
            )}
          </div>

          {/* DERECHA - ICONOS */}
          <div className="flex items-center justify-end gap-3 flex-[1_1_0%] min-w-0">
            <a
              href="https://wa.me/56984085589"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:scale-110 transition-transform"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={60} />
            </a>
            <a
              href="https://instagram.com/atila_centromedico"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:scale-110 transition-transform"
              aria-label="Instagram"
            >
              <FaInstagram size={60} />
            </a>
          </div>
        </div>
      </header>

      {/* MODAL */}
      <ModalHamburguesa visible={isModalOpen} onClose={toggleModal} />
    </>
  )
}

export default Navbar
