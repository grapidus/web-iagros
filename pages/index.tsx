import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';
import Home from './home/Home';

const HomePage = () => {
  return (
    <>
      <SEO
        title="Home - Iagros"
        description="Welcome to Iagros, your trusted agricultural partner."
      />
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default HomePage;
