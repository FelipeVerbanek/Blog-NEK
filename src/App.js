import React from 'react'
import Header from './components/header'
import { BrowserRouter} from 'react-router-dom'
import Router from './routes'
import Global from './styles/global'


function App() {
  return (
    <>
    
    <BrowserRouter>    
      <Header />     
       <Router />
       <Global />
    </BrowserRouter>
    </>
  );
}

export default App;
