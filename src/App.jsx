import { useState,createContext,useEffect } from 'react'

import './App.css'
import Login from "./Components/Login"
import Header from "./Components/Header";
import Main from "./Components/Main";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ethers } from "ethers";



const AppState = createContext();
function App() {
  const [login, setLogin] = useState(false);
  const [address, setAddress] = useState("");
  const [chain, setChain] = useState("")
  const [symbol, setSymbol] = useState('')
  const [balance, setBalance] = useState('')
  const [currency, setCurrency] = useState('')
  const { ethereum } = window;
 const provider = new ethers.providers.Web3Provider(ethereum);


  const signer = provider.getSigner();
  useEffect(() => {
    ethereum.on("chainChanged", async (chainId) => {
      if (chainId === "0xe705") {
        State.setChain("Linea Sepolia");
      } else if (chainId === "0x4") {
        State.setChain("Rinkeby");
      } else if (chainId === "0x13881") {
        State.setChain("Polygon");
      } else if (chainId === "0xaa36a7") {
        State.setChain("Sepolia");
      } else {
        State.setLogin(false);
        seterror(
          "Can only access with: Polygon, Sepolia, Rinkeby, or Ropsten."
        );
      }
    })
    ethereum.on("accountsChanged", async (account) => {
      setAddress(account[0]);
    });
  }, [])
  
  useEffect(() => {
    async function getBal() {
      const balance = await signer.getBalance();
      setBalance(ethers.utils.formatEther(balance));
    }
  },[])

  return (
    <>
      <AppState.Provider
        value={{
          login,
          setLogin,
          address,
          setAddress,
          chain,
          setChain,
          symbol,
          setSymbol,
          balance,
          setBalance,
          currency,
          setCurrency,
        }}
      >
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