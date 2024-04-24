import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FaArrowUp } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Button
      className={` ${isVisible ? 'show' : ''} text-bg-secondary`}
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: isVisible ? 'block' : 'none',
        border: 'none'
      }}
    >
      <FaArrowUp/>
    </Button>
  );
};

export default ScrollTopButton;
