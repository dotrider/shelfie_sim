import React from 'react';
import Header from './Components/Header/Header';
import router from './routes';
import './App.css';

///NEED TO HOOK UP THE UPDATE////

function App() {

  return(
    <div>
      <Header/>
      {router}
    </div>
  )
}

export default App;
