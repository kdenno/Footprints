import React from "react";
import { connect } from "react-redux";
import { deleteTech } from "../../actions/techActions";

function TechItem({ tech, deleteTech }) {
  return (
    <li className="collection-item">
      <div>
        {tech.firstname} {tech.lastname}
        <a href="#!" className="secondary-content">
          <i
            className="material-icons grey-text"
            onClick={() => deleteTech(tech.id)}
          >
            delete
          </i>
        </a>
      </div>
    </li>
  );
}

export default connect(null, { deleteTech })(TechItem);
