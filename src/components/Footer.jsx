import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { data } from '../utils/data.json';

const Footer = () => {
  const { name, social } = data.main;
  const { pathname } = useLocation();
  const [btnText, setBtnText] = useState('Get In Touch');

  useEffect(() => {
    if (pathname === '/contact')
      setTimeout(() => {
        setBtnText('About Me');
      }, 1000);
    else
      setTimeout(() => {
        setBtnText('Get In Touch');
      }, 1000);
  }, [pathname]);

  return (
    <FooterStyle>
      <hr />
      <div className='footer__connect'>
        <p>Don't be shy, just say hi</p>
        <Link to={pathname === '/contact' ? '/' : '/contact'}>
          <button>{btnText}</button>
        </Link>
        <ul className='social-media-list'>
              <li>
                <a
                  href='https://github.com/anujgiri20'
                  target='_blank'
                  className='contact-icon'
                  rel='noreferrer'>
                  <i className='ri-github-fill'></i>
                </a>
              </li>
              
            </ul>
      </div>
     
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 1rem 10rem;
  hr {
    width: 20px;
    margin-top:150px;
  }
  .footer__connect {
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      padding: 1.5rem 0rem;
      text-align: center;
     
      font-family: 'Italianno', cursive;
      font-size:2.5rem;
    
    }
    button {
      border-radius: 25px;
    }
    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        margin: 5px;
        a {
          text-decoration: none;
        }
        &:hover {
          i {
            color: white;
          }
        }
      }
    }
  }
  .footer__area {
    width: 80vw;
    display: flex;
    justify-content: space-between;
    border-top: 2px solid#F1FA3C;
    align-items: center;
    p {
      font-size: 1.1rem;
      color: #fff;
      padding: 1.5rem 0rem;
      span {
        font-size: 16px;
      }
    }
    i {
      color: #fff;
      font-size: 12px;
    }
    @media (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default Footer;
