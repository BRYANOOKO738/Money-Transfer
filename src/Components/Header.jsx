import React, { useContext, useState } from "react";
import { AppState } from "../App";

const Header = () => {
  const State = useContext(AppState);
  const [showChain, setShowChain] = useState(false); // Fixed here, state should be an array
  const { ethereum } = window;
 const ChangeTORinkeby = async () => {
   await ethereum.request({
     method: "wallet_switchEthereumChain",
     params: [{ chainId: "0x4" }],
   });
   setShowChain(false);
 };
   const ChangeToPolygon = async () => {
     await ethereum.request({
       method: "wallet_switchEthereumChain",
       params: [{ chainId: "0x13881" }],
     });
     setShowChain(false);
   };
   const ChangeToLinea = async () => {
     await ethereum.request({
       method: "wallet_switchEthereumChain",
       params: [{ chainId: "0xe705" }],
     });
     setShowChain(false);
  };
  const ChangeTOSepolia = async () => {
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0xaa36a7" }],
    });
    setShowChain(false);
  };
  return (
    <div className="w-100 h-25 pt-4 d-flex justify-content-between align-items-start">
      <img
        src="./paypal.png"
        alt="Paypal"
        className=" ms-2"
        style={{ height: "48px" }}
      />
      <div className="d-flex justify-content-between align-items-start">
        <div className="d-flex justify-content-between align-items-center text-lg ms-2 border border-2 border-opacity-60 border-primary font-medium cursor-pointer bg-dark px-4 py-2 text-white rounded">
          {State.address.slice(0, 8)}...{State.address.slice(38)}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-wallet2 mx-2"
            viewBox="0 0 16 16"
          >
            <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z" />
          </svg>
        </div>
      </div>
      <div
        onClick={() => setShowChain(!showChain)} // Toggle the state
        className=" fs-5 py-2 px-4 me-2 fw-medium border border-2 border-primary text-bg-dark rounded-3 d-flex justify-content-between align-items-center"
      >
        {State.chain === "Ropsten" ||
        State.chain === "Rinkeby" ||
        State.chain === "Sepolia" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="me-2 cursor-pointer"
            style={{ height: "1.5rem" }}
            viewBox="0 0 32 32"
          >
            <g fill="none" fillRule="evenodd">
              <circle cx="16" cy="16" r="16" fill="#627EEA" />
              <g fill="#FFF" fillRule="nonzero">
                <path fillOpacity=".602" d="M16.498 4v8.87l7.497 3.35z" />
                <path d="M16.498 4L9 16.22l7.498-3.35z" />
                <path fillOpacity=".602" d="M16.498 21.968v6.027L24 17.616z" />
                <path d="M16.498 27.995v-6.028L9 17.616z" />
                <path
                  fillOpacity=".2"
                  d="M16.498 20.573l7.497-4.353-7.497-3.348z"
                />
                <path fillOpacity=".602" d="M9 16.22l7.498 4.353v-7.701z" />
              </g>
            </g>
          </svg>
        ) : (
          <img
            className="me-2"
            style={{ height: "1.5rem" }}
            src="./public/polygon.png"
            alt="Polygon Logo"
          />
        )}

        {State.chain}
      </div>
      <div
        className={`position-absolute end-0 ${showChain ? "" : "d-none"}`} // Conditionally show the dropdown
        style={{ zIndex: 50 }}
      >
        <div
          onClick={ChangeToLinea}
          className="fs-5 custom-hover-bg-dark py-2 px-4 me-2 fw-medium border border-2 border-primary text-bg-dark rounded-3 d-flex justify-content-between align-items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="me-2"
            style={{ height: "1.5rem" }}
            viewBox="0 0 32 32"
          >
            <g fill="none" fillRule="evenodd">
              <circle cx="16" cy="16" r="16" fill="#627EEA" />
              <g fill="#FFF" fillRule="nonzero">
                <path fillOpacity=".602" d="M16.498 4v8.87l7.497 3.35z" />
                <path d="M16.498 4L9 16.22l7.498-3.35z" />
                <path fillOpacity=".602" d="M16.498 21.968v6.027L24 17.616z" />
                <path d="M16.498 27.995v-6.028L9 17.616z" />
                <path
                  fillOpacity=".2"
                  d="M16.498 20.573l7.497-4.353-7.497-3.348z"
                />
                <path fillOpacity=".602" d="M9 16.22l7.498 4.353v-7.701z" />
              </g>
            </g>
          </svg>
          Linea Sepolia
        </div>
        <div
          onClick={ChangeTORinkeby}
          className="fs-5 my-1 custom-hover-bg-dark py-2 px-4 me-2 fw-medium border border-2 border-primary text-bg-dark rounded-3 d-flex justify-content-between align-items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="me-2"
            style={{ height: "1.5rem" }}
            viewBox="0 0 32 32"
          >
            <g fill="none" fillRule="evenodd">
              <circle cx="16" cy="16" r="16" fill="#627EEA" />
              <g fill="#FFF" fillRule="nonzero">
                <path fillOpacity=".602" d="M16.498 4v8.87l7.497 3.35z" />
                <path d="M16.498 4L9 16.22l7.498-3.35z" />
                <path fillOpacity=".602" d="M16.498 21.968v6.027L24 17.616z" />
                <path d="M16.498 27.995v-6.028L9 17.616z" />
                <path
                  fillOpacity=".2"
                  d="M16.498 20.573l7.497-4.353-7.497-3.348z"
                />
                <path fillOpacity=".602" d="M9 16.22l7.498 4.353v-7.701z" />
              </g>
            </g>
          </svg>
          Rinkeby
        </div>
        <div
          onClick={ChangeTOSepolia}
          className="fs-5 my-1 custom-hover-bg-dark py-2 px-4 me-2 fw-medium border border-2 border-primary text-bg-dark rounded-3 d-flex justify-content-between align-items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="me-2"
            style={{ height: "1.5rem" }}
            viewBox="0 0 32 32"
          >
            <g fill="none" fillRule="evenodd">
              <circle cx="16" cy="16" r="16" fill="#627EEA" />
              <g fill="#FFF" fillRule="nonzero">
                <path fillOpacity=".602" d="M16.498 4v8.87l7.497 3.35z" />
                <path d="M16.498 4L9 16.22l7.498-3.35z" />
                <path fillOpacity=".602" d="M16.498 21.968v6.027L24 17.616z" />
                <path d="M16.498 27.995v-6.028L9 17.616z" />
                <path
                  fillOpacity=".2"
                  d="M16.498 20.573l7.497-4.353-7.497-3.348z"
                />
                <path fillOpacity=".602" d="M9 16.22l7.498 4.353v-7.701z" />
              </g>
            </g>
          </svg>
          Sepolia
        </div>
        <div
          onClick={ChangeToPolygon}
          className="fs-5 custom-hover-bg-dark py-2 px-4 me-2 fw-medium border border-2 border-primary text-bg-dark rounded-3 d-flex justify-content-between align-items-center"
        >
          <img
            className="me-2"
            style={{ height: "1.5rem" }}
            src="./public/polygon.png"
            alt="Polygon Logo"
          />
          Polygon
        </div>
        <div
          onClick={() => setShowChain(false)} // Close the dropdown on click
          className=" cursor-pointer fs-5 my-1 custom-hover-bg-dark py-2 px-4 me-2 fw-medium border border-2 border-primary text-bg-danger rounded-3 d-flex justify-content-between align-items-center"
        >
          Close
          <i className="bi bi-x-circle-fill"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
