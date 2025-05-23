// src/components/ModalHamburguesa.tsx
import React from 'react'

import { navLinks } from '../constants/navLinks'

interface Props {
  visible: boolean
  onClose: () => void
}

const ModalHamburguesa: React.FC<Props> = ({ visible, onClose }) => {
  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-sm text-center space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold text-blue-600">Menú</h2>
        <nav className="flex flex-col gap-4 text-gray-700 text-base">
            {navLinks.map(link => (
                <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="hover:text-blue-500"
                >
                {link.label}
                </a>
            ))}
        </nav>
        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-500 hover:text-red-500"
        >
          Cerrar
        </button>
      </div>
    </div>
  )
}

export default ModalHamburguesa
