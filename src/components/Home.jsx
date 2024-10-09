import React from 'react';
import './Home.css'; // You can style your home page separately if needed
import homeImage from '../images/project1p1.jpg'

const Home = () => {
  return (
    <>
      <div className="home-page">
        <div className="home-content">
          <h1>Welcome to Elmwood Exteriors</h1>
          <p>We specialize in high-quality exterior home services.</p>
          <p>Explore our projects, learn about us, or request an estimate today!</p>
        </div>
      </div>
      <div className="body-content">
        <p>This is the additional content below the image.</p>
        <p>Here you can include any information, services, or other sections of your page.</p>
      </div>
    </>
  );
};

export default Home;
