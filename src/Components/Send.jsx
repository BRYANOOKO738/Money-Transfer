import React from "react";

const Send = () => {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center text-white">
        <div className="d-flex justify-content-around align-items-center w-75 mt-3">
          <div
            className="d-flex justify-content-center align-items-center cursor-pointer border border-2 border-primary bg-dark text-white rounded p-1"
            style={{ opacity: 0.7 }}
          >
            <i class="bi bi-cash-coin fs-2"></i>
            <h1 class="ms-2 fs-4 fw-medium mb-0">Eth</h1>
            <i class="bi bi-chevron-down ms-2 fs-3"></i>
          </div>
          <div
            className="d-flex align-items-center border border-2 border-primary bg-dark text-white rounded p-3"
            style={{ opacity: 0.7 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-wallet2 mx-2"
              viewBox="0 0 16 16"
            >
              <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z" />
            </svg>
            <h1 class="ms-2 fs-4 fw-medium">Balance :</h1>
            <h1 class="ms-2 fs-4 fw-medium">2.7 Eth</h1>
          </div>
            </div>
            {/* Erc20 token */}
            <div className="">

            </div>
      </div>
    );
};

export default Send;
