import './App.css';
import Home from './ui/organisms/home.organism';
import Header from './ui/molecules/Header';
import { HowItWorks } from './ui/organisms/how-it-works.organism';
import { FAQs } from './ui/organisms/FAQs.organism';

function App() {
  return (
    <>
      <Header></Header>
      <Home />
      <div className="py-20" />
      <HowItWorks />
      <div className="py-20" />
      <FAQs />
      <div className="py-20" />
    </>
  );
}

export default App;
