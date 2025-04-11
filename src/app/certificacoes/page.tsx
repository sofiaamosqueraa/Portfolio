'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

// Componente para Card de Certificación
const CertificationCard = ({
  badgeId,
  description,
  onClick,
}: {
  badgeId: string;
  description: string;
  onClick: (description: string) => void;
}) => (
  <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transform transition duration-300 h-[320px] flex flex-col justify-between">
    <div className="flex justify-center mb-4">
      <div
        data-iframe-width="150"
        data-iframe-height="270"
        data-share-badge-id={badgeId}
        data-share-badge-host="https://www.credly.com"
        className="w-full h-[200px] flex justify-center items-center"
      ></div>
    </div>
    {/* Botón dentro del card */}
    <button
      onClick={() => onClick(description)}
      className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full mt-4 self-center"
    >
      Ver Detalles
    </button>
  </div>
);

const CertificationsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [certificationDescription, setCertificationDescription] = useState('');

  // Carregar o script do Credly dinamicamente
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleModalOpen = (description: string) => {
    setCertificationDescription(description);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-pink-50 text-gray-800 min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-1 flex flex-col justify-center items-center text-center px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-purple-600">As Minhas Certificações</h1>
        <p className="text-lg mb-8 max-w-xl text-gray-700">
          Aqui podes ver as certificações que obtive ao longo do meu percurso como programadora.
        </p>

        {/* Certificações com Card e Modal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <CertificationCard
            badgeId="8859cd3f-789d-4363-a4d3-7fd66af2d603"
            description="Experiência adquirida ao concluir a certificação de Frontend Developer"
            onClick={handleModalOpen}
          />
          <CertificationCard
            badgeId="7f504c3c-ede6-4246-92fc-5c7faa26b443"
            description="Experiência adquirida ao concluir a certificação de Data Science"
            onClick={handleModalOpen}
          />
          <CertificationCard
            badgeId="a09e5284-d822-425b-b852-40b6d041ec99"
            description="Experiência adquirida ao concluir a certificação de Fullstack Development"
            onClick={handleModalOpen}
          />
          <CertificationCard
            badgeId="b5cad8bf-b290-413d-9899-2cf556321572"
            description="Experiência adquirida ao concluir a certificação de Web Development"
            onClick={handleModalOpen}
          />
          <CertificationCard
            badgeId="c177d365-f6ea-460b-80c9-50274917931a"
            description="Experiência adquirida ao concluir a certificação de Cloud Computing"
            onClick={handleModalOpen}
          />
          <CertificationCard
            badgeId="your-new-credly-id"  // Substitua pelo ID correto
            description="Experiência adquirida ao concluir a certificação de Example Certification"
            onClick={handleModalOpen}
          />
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" aria-hidden="true">
            <div className="bg-white rounded-lg p-6 w-96" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description">
              <h3 id="modal-title" className="text-2xl font-bold text-purple-600 mb-4">Detalhes da Certificação</h3>
              <p id="modal-description" className="text-lg text-gray-700 mb-6">{certificationDescription}</p>
              <button
                onClick={handleModalClose}
                className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full"
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CertificationsPage;
