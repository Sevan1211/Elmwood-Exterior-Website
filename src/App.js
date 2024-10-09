import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/about';
import Projects from './components/Projects';
import Estimate from './components/Estimate';

function App() {
  const [activePage, setActivePage] = useState('home'); // Manage active page state

  // Function to switch between pages
  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home />;
      case 'contact':
        return <Contact />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'estimate':
        return <Estimate />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header setActivePage={setActivePage} activePage={activePage} />
      {/* Pass the function to Header */}
      <main className="App-content">
        {renderPage()}  {/* Dynamically render the current page */}
      </main>
      <Footer setActivePage={setActivePage} />  {/* Pass the function to Footer */}
    </div>
  );
}

export default App;

