import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    outline: none;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }

  html, body, input, button, textarea {
    font-family: 'Metropolis', Arial, Helvetica, sans-serif;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.text};
  }

  *::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${(props) => props.theme.colors.graysScale[200]};
  }

  *::-webkit-scrollbar-track {
    width: 20px;
    background-color: transparent;
  }

  *::-webkit-scrollbar-thumb {
    width: 1.125rem;
    background-clip: content-box;
    background-color: ${(props) => props.theme.colors.primaryGreenBelt};
  }
`;
