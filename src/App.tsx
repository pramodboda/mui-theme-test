// import { useState } from 'react'

import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from "./styles/theme";
import BasicTextFields from './components/BasicTextFields/BasicTextFields'
import BasicButtons from './components/BasicButtons/BasicButtons'

function App() {
  

  return (
    <>
    <ThemeProvider theme = {theme}>
<BasicTextFields/>
<BasicButtons/>
</ThemeProvider>
    </>
  )
}

export default App
