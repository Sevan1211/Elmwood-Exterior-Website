// Projects.js
import React, {useState} from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Lightbox from 'react-image-lightbox';
import projects from './ProjectsList';
import './Projects.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css'; // Add this if it's missing

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <FaArrowRight
        className={className}
        style={{ ...style, fontSize: '100px', color: 'black' }}
        onClick={onClick}
      />
    );
  };
  
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <FaArrowLeft
        className = {className}
        style={{ ...style, fontSize: '100px', color: 'black' }}
        onClick={onClick}
      />
    );
  };
  

const settings = {
  dots: false, // Remove dots navigation
  infinite: true,
  speed: 500,
  slidesToShow: 1, // Show one slide at a time
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false); // Lightbox open state
  const [photoIndex, setPhotoIndex] = useState(0); // Track which image is being viewed
  const [currentProjectImages, setCurrentProjectImages] = useState([]); // Store images for current project
  
  // Function to open the lightbox with a specific image
  const handleImageClick = (images, index) => {
    setCurrentProjectImages(images);
    setPhotoIndex(index);
    setIsOpen(true);
  };
  return (
    <div className="project-section">
      <h2>Our Projects</h2>
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <div className="project-images">
              {project.images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`${project.title} - ${index + 1}`}
                    onClick={() => handleImageClick(project.images, index)} // Open image on click
                    style={{ cursor: 'pointer' }} // Change cursor to pointer
                    loading="lazy"
                />
              ))}
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      {/* Lightbox for full-screen image view */}
      {isOpen && (
        <Lightbox
          mainSrc={currentProjectImages[photoIndex]}
          nextSrc={currentProjectImages[(photoIndex + 1) % currentProjectImages.length]}
          prevSrc={currentProjectImages[(photoIndex + currentProjectImages.length - 1) % currentProjectImages.length]}
          onCloseRequest={() => setIsOpen(false)} // Close the lightbox
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + currentProjectImages.length - 1) % currentProjectImages.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % currentProjectImages.length)
          }
          ariaHideApp={false}
        />
      )}
    </div>
  );
};

export default Projects;

