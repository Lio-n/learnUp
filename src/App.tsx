import './App.css';
import Home from './ui/organisms/home.organism';
import Header from './ui/molecules/Header';
import { HowItWorks } from './ui/organisms/how-it-works.organism';

function App() {
  return (
    <>
      <Header></Header>
      <Home />
      <HowItWorks />
    </>
  );
}

export default App;
