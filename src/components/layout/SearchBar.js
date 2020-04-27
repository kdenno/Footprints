import React, { Fragment } from "react";

function SearchBar() {
  return (
    <Fragment>
      <nav style={{marginBottom: '20px', backgroundColor: 'teal'}}>
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input id="search" type="search" />
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

export default SearchBar;
