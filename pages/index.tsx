import Footer from '../components/Layout/Footer/Footer';
import SEO from '../components/SEO';

const HomePage = () => {
  return (
    <>
      <SEO
        title="Home - Iagros"
        description="Welcome to Iagros, your trusted agricultural partner."
      />
      <main>
        <h1>Welcome to Iagros</h1>
        <p>Your trusted agricultural partner.</p>
        <div>
          <h2>Contenido de ejemplo</h2>
          <p>Este contenido ayuda a ver mejor las olas del footer.</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
