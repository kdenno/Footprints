import React, { useEffect, useState } from "react";
import LogItem from "./LogItem";

function Log() {
  const [log, setLog] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getLogs();
  }, []);
  const getLogs = async () => {
    // get logs
    setLoading(true);
    try {
      const logs = await fetch("/logs");
      const logData = await logs.json();
      setLog(logData);
      setLoading(false);
    } catch (error) {}
  };

  return (
   
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">System Logs</h4>
        </li>
        {!loading && log.length == 0 ? (
          <p>No logs to show...</p>
        ) : (
          log.map((log) => <LogItem log={log} key={log.id}/>)
        )}
      </ul>
  
  );
}

export default Log;
