import React from 'react';
import { FaFileInvoice, FaSearch } from 'react-icons/fa';

export default function Home() {
  const actions = [
    { icon: <FaSearch />, label: 'Consultar Ministerio Hacienda' },
    { icon: <FaFileInvoice />, label: 'Descargar documentos' },
  ];

  return (
    <main className="flex flex-col items-center mt-20 p-8 overflow-hidden">
      <h1 className="text-4xl font-extrabold text-[#006341] mb-16 drop-shadow-md">
        Descarga de Factura Electrónica
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {actions.map((item, idx) => (
          <button
            key={idx}
            className="group flex cursor-pointer flex-col items-center justify-center w-80 h-56 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200 p-6"
          >
            <div className="w-16 h-16 rounded-full bg-[#019133] flex items-center justify-center mb-4">
              {React.cloneElement(item.icon, { className: 'text-3xl text-white' })}
            </div>
            <span className="text-xl font-semibold text-gray-800 text-center">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </main>
  );
}
