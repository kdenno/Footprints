import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import { updateLog, clearCurrent } from "../../actions/logActions";

function EditLogModal({ current, updateLog, clearCurrent }) {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = () => {
    if (message === " " || tech === "") {
      M.toast({ html: " Please Enter a message and Tech" });
    } else {
      updateLog({ id: current.id, message, tech, attention });
      setMessage("");
      setAttention(false);
      setTech("");
      clearCurrent();
    }
  };

  useEffect(() => {
    // set fields
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select a technician
              </option>
              <option value="Sam Smith">Sam Smith</option>
              <option value="John Doe">John Doe</option>
              <option value="Gilbert Smith">Gilbert Smith</option>
              <option value="Sarah Wilson">Sarah Wilson</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
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
  );
}
const modalStyle = {
  width: "75%",
  height: "75%",
};
const mapStateToProps = (state) => ({
  current: state.log.current,
});
export default connect(mapStateToProps, { updateLog, clearCurrent })(
  EditLogModal
);
