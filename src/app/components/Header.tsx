import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-pink-100 text-gray-700 shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">💻 O meu Portfólio</h1>
        <nav className="space-x-4 text-sm sm:text-base">
          <Link href="/" className="hover:underline hover:text-pink-600 transition">Início</Link>
          <Link href="/#sobre" className="hover:underline hover:text-pink-600 transition">Sobre Mim</Link>
          <Link href="/projetos" className="hover:underline hover:text-pink-600 transition">Projetos</Link>
          <Link href="/certificacoes" className="hover:underline hover:text-pink-600 transition">Certificações</Link>
          <Link href="/#contacto" className="hover:underline hover:text-pink-600 transition">Contacto</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
