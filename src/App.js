import React from 'react';
// import logo from './assets/img/logo.svg';
import './assets/App.css';
import Auth from './Auth';
import { useUser } from 'reactfire';

import {useFirebaseApp} from 'reactfire';

//Importar componentes
// import MiComponente from './components/MiComponente';



function App() {
  const firebase = useFirebaseApp();
  const user = useUser();
  console.log(firebase);
  return (
    <div className="App">
      { user && <p>Usuario: {user.email}</p>}
      <Auth />

    </div>
  );
}

export default App;
