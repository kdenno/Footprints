import React, { Fragment, useRef } from "react";
import { connect } from "react-redux";
import { searchLogs } from "../../actions/logActions";

function SearchBar({searchLogs}) {
  const text = useRef("");
  const onChange = () => {
    searchLogs(text.current.value);
  };
  return (
    <Fragment>
      <nav style={{ marginBottom: "20px", backgroundColor: "teal" }}>
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input
                id="search"
                type="search"
                placehoder="Search Logs"
                ref={text}
                onChange={onChange}
              />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    </Fragment>
  );
}

export default connect(null, { searchLogs })(SearchBar);
