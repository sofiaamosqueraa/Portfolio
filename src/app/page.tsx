import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 flex flex-col font-sans">
      <Header />

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-pink-100 to-purple-100">
        <h1 className="text-5xl font-extrabold mb-4">
          Olá, sou <span className="text-pink-500">Desenvolvedora Web</span>
        </h1>
        <p className="text-xl mb-8">
          Explora os meus projetos, certificações e um pouco sobre mim 💻💖
        </p>
        <a
          href="#sobre-mim"
          className="bg-pink-400 hover:bg-pink-500 text-white py-3 px-6 rounded-full transition shadow-lg"
        >
          Saber mais
        </a>
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
        className="h-screen flex flex-col justify-center items-center bg-purple-50 text-center px-6"
      >
        <h2 className="text-4xl font-bold mb-4 text-pink-500">Certificações</h2>
        <p className="max-w-xl text-lg text-gray-700 mb-6">
          Aqui podes ver as minhas certificações e formações concluídas com sucesso 📜✨
        </p>
        <Link
          href="/certificacoes"
          className="bg-purple-400 hover:bg-purple-500 text-white py-3 px-6 rounded-full transition shadow-lg"
        >
          Ver Certificações
        </Link>
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
        className="h-screen flex flex-col justify-center items-center bg-white text-center px-6"
      >
        <h2 className="text-4xl font-bold mb-4 text-pink-400">Contactos</h2>
        <p className="max-w-xl text-lg text-gray-700 mb-6">
          Queres trabalhar comigo? Fala comigo através do email ou redes sociais 💌
        </p>
        <a
          href="mailto:teuemail@example.com"
          className="bg-purple-400 hover:bg-purple-500 text-white py-3 px-6 rounded-full transition shadow-lg"
        >
          Enviar Email
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
