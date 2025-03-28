import React from 'react';

function About() {
  return (
    <section id="about" className="bg-gradient-to-r from-blue-500 to-purple-600 py-24 px-6 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-shadow-md animate__animated animate__fadeInUp">Sobre Mim</h2>
        <p className="text-lg mb-6 animate__animated animate__fadeInUp animate__delay-1s">
          Sou estudante do segundo ano de Programação e Informática (PI), com habilidades em <span className="font-semibold">Tailwind CSS, JavaScript, TypeScript, Python (Flask), C e C++</span>, aplicadas em projetos acadêmicos e pessoais para criar soluções modernas e funcionais.
        </p>
        <p className="text-lg mb-8 animate__animated animate__fadeInUp animate__delay-2s">
          Interessada em Desenvolvimento de Software, Inteligência Artificial e Análise de Dados, áreas que fortalecem minha lógica de programação e estruturação de sistemas. Valorizo o trabalho em equipe e busco enfrentar desafios com curiosidade, aprendizado rápido e determinação, sempre com foco em agregar valor a projetos e organizações.
        </p>
        <div className="mt-10">
          <button className="px-8 py-3 bg-indigo-600 rounded-full text-xl font-semibold text-white shadow-lg hover:bg-indigo-700 hover:scale-105 transform transition-all duration-300">
            Vamos Conversar
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
