import Layout from '../layout';
import Header from '../components/header';
import ActionCards from '../components/actioncards';
import Footer from '../components/Footer';
import PromptBar from '../components/promptBar';

const Home: React.FC = () => {
  return (
    <Layout>
      <Header />
      <ActionCards />
      <Footer />
      <PromptBar/>
    </Layout>
  );
};

export default Home;
