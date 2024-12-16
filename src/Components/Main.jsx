import React,{useState} from 'react'
import Send from "./Send"
import GlobalTx from './GlobalTx'
import Recipients from './Recipients'
import RecentTx from './RecentTx'

const Main = () => {
  const [route, setRoute] = useState('send');
  return (
    <div class="container mt-5 d-flex flex-column justify-content-center align-items-center">
      <div class="d-flex justify-content-around text-muted font-weight-medium align-items-center bg-dark border border-2 border-bottom-0 text-white border-opacity-50 border-primary rounded-top w-50">
        <li
          onClick={() => setRoute("send")}
          className={`list-unstyled cursor-pointer py-2 w-25 ${
            route == "send" ? "bg-black bg-opacity-60" : "bg-dark"
          } text-center text-white pointer rounded-top-left hover:bg-black hover:bg-opacity-60`}
        >
          Send
        </li>

        <li
          onClick={() => setRoute("recipients")}
          className={`list-unstyled cursor-pointer py-2 w-25 ${
            route == "recipients" ? "bg-black bg-opacity-60" : "bg-dark"
          } text-center pointer rounded-top-left text-white hover:bg-black hover:bg-opacity-60`}
        >
          Recipients
        </li>

        <li
          onClick={() => setRoute("recent_tx")}
          className={`list-unstyled cursor-pointer py-2 w-25 ${
            route == "recent_tx" ? "bg-black bg-opacity-60" : "bg-dark"
          } text-center text-white pointer rounded-top-left hover:bg-black hover:bg-opacity-60`}
        >
          Recent Tx
        </li>

        <li
          onClick={() => setRoute("global_tx")}
          className={`list-unstyled cursor-pointer py-2 w-25 ${
            route == "global_tx" ? "bg-black bg-opacity-60" : "bg-dark"
          } text-center text-white pointer rounded-top-left hover:bg-black hover:bg-opacity-60`}
        >
          Global Tx
        </li>
      </div>

      <div class="bg-black bg-opacity-60 pb-5 overflow-auto border border-2 border-top-0 shadow-lg border-opacity-50 border-primary rounded-bottom w-50">
        {(() => {
          if (route == "send") {
            return <Send />;
          } else if (route == "recipients") {
            return <Recipients />;
          } else if (route == "recent_tx") {
            return <RecentTx />;
          } else if (route == "global_tx") {
            return <GlobalTx />;
          }
        })()}
      </div>
    </div>
  );
}

export default Main;
