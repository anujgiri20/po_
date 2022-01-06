import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html{
    ::-webkit-scrollbar {
        width: 0.3rem;
    }
        ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
    }
        ::-webkit-scrollbar-thumb {
        background:#F1FA3C;
        border-radius: 10px;
    }
        ::-webkit-scrollbar-thumb:hover {
        background: grey;
    }
    @media (max-width: 1700px){
        font-size: 75%;
    }
}

body{
    background: #0a192f;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
    i{
        color: #FFD700;
        font-size: 2.5rem;
    }
}

button{
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid#F1FA3C;//#FFD700;
    background: transparent;
    color: white;
    font-family: 'Inter', sans-serif;
    background: linear-gradient(to left, #000 50%,#F1FA3C 50%) right;
    background-size: 200%;
    transition: all .5s ease-out;
    &:hover{
        background-color:#F1FA3C;
        color: black;
        background-position: left;
    }
}

h2{
    font-weight: lighter;
    font-size: 4rem;
}

h3{
    color: white;
}

h4{
    font-weight: bold;
}

a{
    font-size: 1.1rem;
}
span{
    font-weight: bold;
    color:#F1FA3C;
}

p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}
`;

export default GlobalStyle;
