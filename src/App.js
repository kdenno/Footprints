import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Log";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";

const App = () => {
  useEffect(() => {
    // Init materialize Js
    M.AutoInit();
  }, []);
  return (
    <div>
      <SearchBar />
      <div className="container">
        <AddLogModal />
        <AddBtn />
        <Logs />
      </div>
    </div>
  );
};

export default App;
