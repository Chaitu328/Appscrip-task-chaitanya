import './App.css';
import { Footer } from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
// Main App Component
const App = () => {
  // SEO metadata would typically be handled by react-helmet or next/head in a real project

  return (
    <>
      <Header />

      <Hero/>
      <ProductSection />

      <Footer />
    </>
  );
};

export default App;