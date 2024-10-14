import './App.css';
import Home from './ui/organisms/home.organism';
import { HowItWorks } from './ui/organisms/how-it-works.organism';
import { FAQs } from './ui/organisms/FAQs.organism';
import { Layout } from './components/layout.component';

function App() {
  return (
    <Layout>
      <Home />
      <div className="py-20" />
      <HowItWorks />
      <div className="py-20" />
      <FAQs />
      <div className="py-20" />
    </Layout>
  );
}

export default App;
