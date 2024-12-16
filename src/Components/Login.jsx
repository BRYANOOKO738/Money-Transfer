import React, { useEffect, useState,useContext } from "react";
// import ethers from "ethers"
import "./Login.css";
import { AppState} from "../App"

const Login = () => {
  const State = useContext(AppState);
  const boxStyle = {
    width: "33%", // Equivalent to w-1/3
    height: "10rem", // Equivalent to h-40
    marginTop: "1rem", // Equivalent to mt-4
    backgroundColor: "rgba(0, 0, 0, 0.7)", // bg-black with opacity
    padding: "0.5rem", // Equivalent to p-2
    borderRadius: "0.5rem", // Equivalent to rounded-lg
    boxShadow: "0 1rem 3rem rgba(0, 0, 0, 0.175)", // Equivalent to shadow-lg
    border: "4px solid rgba(0, 0, 0, 0.4)", // border-4, border-black, and border-opacity-40
    display: "flex", // Equivalent to flex
    flexDirection: "column", // Equivalent to flex-col
    justifyContent: "center", // Equivalent to justify-center
    alignItems: "center", // Equivalent to items-center
  };
  const [error, seterror] = useState('');
  const LoginMetamask = async () => {
    try {
      const { ethereum } = window;

      await ethereum.request({
        method: "wallet_requestPermissions",
        params: [{ eth_accounts: {} }],
      });
     const account = await ethereum.request({
        method: "eth_requestAccounts",
      });
      State.setLogin(true);
      State.setAddress(account[0]);
       const chainId = await ethereum.request({ method: "eth_chainId" }); // Correct method name
       console.log("Detected chainId:", chainId);

       if (chainId === "0xe705") {
         State.setChain("Linea Sepolia");
         State.setSymbol("LineaSepEth")
         State.setCurrency("lEth");
       } else if (chainId === "0x4") {
         State.setChain("Rinkeby");
         State.setSymbol("RinkebyEth")
         State.setCurrency("rEth");
       } else if (chainId === "0x13881") {
         State.setChain("Polygon");
         State.setSymbol("PolygonEth");
         State.setCurrency("pEth")
       } else if (chainId === "0xaa36a7") {
         State.setChain("Sepolia");
         State.setSymbol("SepoliaEth")
         State.setCurrency("sEth")
       } else {
         State.setLogin(false);
         seterror(
           "Can only access with: Polygon, Sepolia, Rinkeby, or Ropsten."
         );
       }
      console.log(chainId)
      setTimeout(() => {
        seterror(false);
      }, 5000);
    } catch (error) {
      seterror(`${error.message}`)
    }
  };
  return (
    <div
      className="w-100 d-flex justify-content-center flex-column align-items-center"
      style={{ height: " 80 %" }}
    >
      <img
        src="./paypal.png"
        alt="Paypal"
        className="h-20"
        style={{ height: "80px" }}
      />
      <div
        className="mt-4 p-2 rounded shadow-lg border-dark d-flex flex-column justify-content-center align-items-center"
        style={boxStyle}
      >
        <h1 className="text-white">Login</h1>
        {typeof window.ethereum !== "undefined" ? (
          <div className="custom-button" onClick={LoginMetamask}>
            Conect to metamask
            <img
              src="./metamask.png"
              alt="Paypal"
              className="h-20"
              style={{ height: "20px" }}
            />
          </div>
        ) : (
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm?refid=bingshortanswersdownload"
            >
              <div className="custom-button">
                Install metamask
                <img
                  src="./metamask.png"
                  alt="Paypal"
                  className="h-20"
                  style={{ height: "20px" }}
                />
              </div>
            </a>
            <p className="text-danger pt-2">
              Login requires Metamask Instalation
            </p>
          </div>
        )}
        <p className="text-danger mt-3">{error}</p>
      </div>
    </div>
  );
};

export default Login;

