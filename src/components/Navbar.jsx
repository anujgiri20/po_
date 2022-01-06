import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import './about.css';
import logo from '../images/logo.png';

const Navbar = () => {
  const { pathname } = useLocation();
  const [click, setClick] = useState(false);

  useEffect(() => {
    setClick(false);
  }, [pathname]);

  return (
    <NavbarStyle>
      <div>
      <h1>
        <Link to='/'>
         <h1 className="logoA">A</h1>
        </Link>
      </h1>
      </div>
      <div className={click ? 'header__navMenu' : 'header__nav'}>
        <ul className='menu_icon_hamburger'>
          <li>
            <Link to='/'><span>1.</span> About Me</Link>
            
          </li>
          <li>
            <Link to='/work'><span>2.</span> My Works</Link>
            
          </li>
          <li>
            <Link to='/experience'><span>3.</span> Education/Certification </Link>
          
          </li>
          <li>
            <Link to='/contact'><span>4.</span> Contact Me</Link>
            
          </li>
        </ul>
      </div>
      <div className='nav_icon' onClick={() => setClick((prev) => !prev)}>
        {click ? (
          <i className='ri-close-fill' />
        ) : (
          <i className='ri-menu-line' />
        )}
      </div>
    </NavbarStyle>
  );
};

const NavbarStyle = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem  8rem;
  background: rgba(10, 25, 47, 0.85);
  box-shadow: 0 10px 30px -10px rgba(2,12,27,0.7);
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    font-family: 'Roboto Mono', monospace;
    font-size:1rem;
    text-decoration: none;
  }
  a:hover
  {
    color:#F1FA3C;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
   
    width: 64px;
    filter: grayscale(100%);
    transition: all 0.5s ease-in;
    &:hover {
      filter: grayscale(0%);
    }
  }
  li {
    padding-left: 4rem;
    position: relative;
  }
  .nav_icon {
    display: none;
  }

  .header__navMenu {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 50px;
    opacity: 1;
    background-color: #282828;
    width: 100%;
    height: 230px;
  }

  .header__navMenu > ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    
  }

  .header__navMenu > ul > li {
    margin-top: 32px;
    color: #fff;
    margin-left:25px;
  }

  .menu_icon_hamburger {
    animation: growDown 300ms ease-in-out forwards;
  }

  .login-display-profile {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }

    80% {
      transform: scaleY(1.1);
    }

    100% {
      transform: scaleY(1);
    }
  }

  @media (max-width: 900px) {
    flex-direction: row !important;
    justify-content: space-between;
    height: 4vh !important;
    .header__nav {
      display: none;
    }
    .nav_icon {
      color: white;
      display: block;
      cursor: pointer;
      margin-right:10px;
    }
  }

  @media (max-width: 1300px) {
    flex-direction: row;
    padding: 2rem 1rem;
 
    .header__nav {
      width: 55%;
    }
    ul {
    
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background:#F1FA3C;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
  @media (max-width: 600px) {
    max-width: 25% !important;
  }
`;

export default Navbar;
