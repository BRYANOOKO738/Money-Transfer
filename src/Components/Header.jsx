import React,{useContext} from 'react'
import { AppState } from "../App";
const Header = () => {
  const State = useContext(AppState);
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
      <div className="fs-5 py-2 px-4 me-2 fw-medium border border-2 border-primary text-bg-dark rounded-3 d-flex justify-content-between align-items-center"></div>
    </div>
  );
}

export default Header