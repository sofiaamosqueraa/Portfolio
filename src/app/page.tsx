'use client';
import { motion } from 'framer-motion';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import Link from 'next/link';
import './globals.css';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';


const HomePage = () => {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 flex flex-col font-sans">
      <Header />

      {/* HERO */}
      <section className="h-screen relative overflow-hidden flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-pink-100 to-purple-100">

        {/* Bolinha giratória fofa no fundo */}
        <div className="absolute w-[500px] h-[500px] bg-red-800 rounded-full opacity-20 blur-3xl animate-spin-slow" />

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold mb-4 z-10"
        >
          Olá, sou <span className="text-pink-500">Desenvolvedora Web</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl mb-8 z-10"
        >
          Explora os meus projetos, certificações e um pouco sobre mim 💻💖
        </motion.p>

        <motion.a
          href="#sobre-mim"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          whileHover={{ scale: 1.05, rotate: -2 }}
          className="bg-pink-400 hover:bg-pink-500 text-white py-3 px-6 rounded-full transition shadow-lg z-10"
        >
          Saber mais
        </motion.a>
      </section>

      {/* SOBRE MIM */}
      <section
        id="sobre-mim"
        className="h-screen flex items-center px-6 bg-gradient-to-br from-pink-100 to-purple-100"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* FOTO */}
          <div className="flex-1 flex justify-center mb-6 md:mb-0">
            <img
              src="/images/sofia.jpg"  
              alt="Foto de Sofia"
              className="w-48 h-48 object-cover rounded-full shadow-xl border-4 border-pink-300 transition-transform transform hover:scale-105"
            />
          </div>

          {/* TEXTO */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-extrabold mb-4 text-purple-600 leading-tight">
              Sobre Mim
            </h2>
            <p className="text-lg text-gray-800 mb-4 font-medium tracking-wide">
              Olá! O meu nome é Sofia, tenho 20 anos e sou estudante de Programação e Informática (PI), atualmente no segundo ano. Sou apaixonada por tecnologia e adoro criar soluções inovadoras usando a web.
            </p>
            <p className="text-lg text-gray-800 mb-4 font-medium tracking-wide">
              Gosto de explorar diferentes áreas da programação como Inteligência Artificial e Análise de Dados, sempre com um foco em boas práticas, acessibilidade e design moderno. Estou sempre a aprender e a melhorar, com curiosidade e determinação.
            </p>
            <p className="text-lg text-gray-800 font-medium tracking-wide">
              Busco projetos que me desafiem e permitam crescer como desenvolvedora, aplicando as habilidades adquiridas em JavaScript, Python, TypeScript, e mais.
            </p>
          </div>
        </div>
      </section>

   {/* CERTIFICAÇÕES */}
<section
  id="certificacoes"
  className="min-h-screen relative flex flex-col justify-center items-center bg-gradient-to-tr from-purple-100 via-pink-100 to-white text-center px-6 overflow-hidden py-16"
>
  {/* Efeitos de fundo */}
  <div className="absolute w-[500px] h-[500px] bg-pink-300 opacity-20 blur-3xl rounded-full -top-20 -left-20 animate-pulse" />
  <div className="absolute w-[400px] h-[400px] bg-purple-300 opacity-20 blur-2xl rounded-full bottom-0 right-0 animate-ping" />

  {/* Título */}
  <h2 className="text-5xl font-extrabold mb-6 text-pink-500 drop-shadow-md z-10">
    Certificações
  </h2>
  <p className="max-w-xl text-lg text-gray-700 mb-10 z-10">
    Aqui podes ver as minhas certificações e formações concluídas com sucesso 📜✨
  </p>


  {/* Botão */}
  <Link
    href="/certificacoes"
    className="mt-10 bg-purple-500 hover:bg-purple-600 text-white py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 z-10"
  >
    Ver Certificações
  </Link>

  {/* Script da Credly */}
  <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
</section>




      {/* PROJETOS */}
      <section
        id="projetos"
        className="h-screen flex flex-col justify-center items-center bg-pink-100 text-center px-6"
      >
        <h2 className="text-4xl font-bold mb-4 text-purple-600">Projetos</h2>
        <p className="max-w-xl text-lg text-gray-700 mb-6">
          Estes são alguns dos projetos que desenvolvi com carinho e dedicação 💡💻
        </p>
        <Link
          href="/projetos"
          className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-full transition shadow-lg"
        >
          Ver Projetos
        </Link>
      </section>

      {/* CONTACTOS */}
      <section
  id="contactos"
  className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-50 to-pink-50 text-center px-6"
>
  <h2 className="text-4xl font-extrabold mb-4 text-pink-400">Contactos</h2>
  <p className="max-w-xl text-lg text-gray-700 mb-6">
    Queres trabalhar comigo? Fala comigo através do email ou redes sociais 💌
  </p>

  <div className="flex gap-8 mb-6">
    {/* Icones com efeitos modernos */}
    <a
      href="sofiaam0202@gmail.com"
      className="p-5 bg-purple-200 hover:bg-purple-300 text-purple-500 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl"
      aria-label="Email"
    >
      <Mail size={32} />
    </a>
    <a
      href="https://www.linkedin.com/in/sofia-mosquera-2a7748298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      target="_blank"
      rel="noopener noreferrer"
      className="p-5 bg-blue-200 hover:bg-blue-300 text-blue-500 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl"
      aria-label="LinkedIn"
    >
      <Linkedin size={32} />
    </a>
    <a
      href="https://github.com/sofiaamosqueraa"
      target="_blank"
      rel="noopener noreferrer"
      className="p-5 bg-gray-200 hover:bg-gray-300 text-gray-500 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl"
      aria-label="GitHub"
    >
      <Github size={32} />
    </a>
    <a
      href="https://www.instagram.com/sgsofia9?igsh=MXJ6MXpia3ZhdW96dA=="
      target="_blank"
      rel="noopener noreferrer"
      className="p-5 bg-pink-200 hover:bg-pink-300 text-pink-500 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl"
      aria-label="Instagram"
    >
      <Instagram size={32} />
    </a>
  </div>
</section>

      <Footer />
    </div>
  );
};

export default HomePage;
