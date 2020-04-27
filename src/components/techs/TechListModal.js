import React, { useEffect, useState } from "react";
import TechItem from "./TechItem";

function TechListModal() {
  const [Techs, setTech] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getTechs();
  }, []);
  const getTechs = async () => {
    // get logs
    setLoading(true);
    try {
      const techs = await fetch("/techs");
      const techData = await techs.json();
      setTech(techData);
      setLoading(false);
    } catch (error) {}
  };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading && Techs.map((tech) => <TechItem tech={tech} key={tech.id}></TechItem>)}
        </ul>
      </div>
    </div>
  );
}

export default TechListModal;
