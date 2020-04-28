import React, { useEffect, useState } from "react";
import TechItem from "./TechItem";
import { connect } from "react-redux";
import { getTechs } from "../../actions/techActions";

function TechListModal({ tech, getTechs }) {
  const { techs, loading } = tech;
  useEffect(() => {
    getTechs();
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading && techs.map((tech) => ( <TechItem tech={tech} key={tech.id}></TechItem> ))}
        </ul>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  tech: state.tech,
});
export default connect(mapStateToProps, { getTechs })(TechListModal);
