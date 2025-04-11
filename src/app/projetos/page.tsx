import Header from '../components/Header';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  return (
    <div className="bg-pink-50 text-gray-800 min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-1 flex flex-col justify-center items-center text-center px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">Os Meus Projetos</h1>
        <p className="text-lg mb-8 max-w-xl">
          Aqui podes ver alguns dos projetos em que trabalhei — com muito carinho e código ✨
        </p>

        {/* Lista de projetos */}
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl">
          <p className="text-gray-500 italic">A lista de projetos será adicionada em breve 💡</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
