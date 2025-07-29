import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';

const HomePage = () => {
  return (
    <>
      <SEO
        title="Home - Iagros"
        description="Welcome to Iagros, your trusted agricultural partner."
      />
      <Layout>
        <div style={{ padding: '2rem 0', minHeight: '60vh' }}>
          <div
            style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}
          >
            <h1>Welcome to Iagros</h1>
            <p>Your trusted agricultural partner.</p>
            <div>
              <h2>Contenido de ejemplo</h2>
              <p>Este contenido ayuda a ver mejor las olas del footer.</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
