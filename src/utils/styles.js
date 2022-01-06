import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LayoutStyle = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  h1{
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-color: #F1FA3C;
    -webkit-text-stroke-width: 0.019em;
    font-size:7rem;
    
    font-family: sans-serif;
    font-weight:800;
  }
  h1:hover{
    -webkit-text-fill-color: #F1FA3C;
    -webkit-text-stroke-color: #F1FA3C;
    -webkit-text-stroke-width: 0.019em;
  }
  
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
    
  }
`;

export const DescriptionStyle = styled.div`
  flex: 1;
  z-index: 2;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
    
  }
  button
  {
    font-family: 'Roboto Mono', monospace;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      font-family: 'Roboto Mono', monospace;
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const ImageStyle = styled.div`
  flex: 1;
  z-index: 2;
  overflow: hidden;
  img {
    width: 100%;
    
    object-fit: cover;
   
  
  }
`;

export const HideStyle = styled.div`
  overflow: hidden;
`;
