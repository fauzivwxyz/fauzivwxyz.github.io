import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="relative min-h-screen bg-white text-black dark:bg-[#0a0a0a] dark:text-gray-200 font-sans">
      <Header />
      <Main />
      <Footer fixed />
    </div>
  );
}

export default App;
