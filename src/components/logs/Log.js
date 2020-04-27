import React, { useEffect } from "react";
import { connect } from "react-redux";
import LogItem from "./LogItem";
import { getLogs } from "../../actions/logActions";

function Log(props) {
  const { loading, logs } = props.log;
  useEffect(() => {
    props.getLogs();
  }, []);

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs && logs.length === 0 ? (
        <p>No logs to show...</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
}
const mapStateToProps = (state) => ({
  // bring the entire state from the reducer to this component

  log: state.log,

});

export default connect(mapStateToProps, {getLogs})(Log);
