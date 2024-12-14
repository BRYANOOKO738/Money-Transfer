import { useState,createContext } from 'react'

import './App.css'
import Login from "./Components/Login"
import Header from "./Components/Header";
import Main from "./Components/Main";
import "bootstrap-icons/font/bootstrap-icons.css";


const AppState = createContext();
function App() {
  const [login, setLogin] = useState(false);
  const [address, setAddress] = useState("");
  

  return (
    <>
      <AppState.Provider value={{ login, setLogin, address, setAddress }}>
        <div>
          {login ? (
            <div>
              <Header />
              <Main />
            </div>
          ) : (
            <Login />
          )}
        </div>
      </AppState.Provider>
    </>
  );
}

export default App
export { AppState };