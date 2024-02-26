import React from 'react'
import { Rutas } from './routes'
import  { createGlobalStyle } from 'styled-components';
import './App.css'

const generalBackground = "#2F303A";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${generalBackground};
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
  }
`;

const App: React.FC = () => {

  return (
    <>
    <GlobalStyle />
      <Rutas />
    </>
  )
}

export default App