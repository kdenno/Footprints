import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { addTech } from "../../actions/techActions";

function AddTechModal({addTech}) {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const onSubmit = () => {
    if (firstname === " " || lastname === "") {
      M.toast({ html: " Please Enter a first and last name" });
    } else {
      addTech({ firstname, lastname });
      setFirstName("");
      setLastName("");
      M.toast({ html: "Tech Added" });
    }
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>Enter Tech</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstname" className="active">
              First Name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastname" className="active">
              Last Name
            </label>
          </div>
        </div>

        <div className="modal-footer">
          <a
            href="#!"
            onClick={onSubmit}
            className="modal-close waves-effect waves-green btn"
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { addTech })(AddTechModal);
