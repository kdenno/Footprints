import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTechs } from "../../actions/techActions";

function TechSelectOptions({ tech, getTechs }) {
  const { techs, loading } = tech;
  useEffect(() => {
    getTechs();
  }, []);

  return (
    !loading &&  techs.map((t) => (  <option key={t.id} value={`${t.firstname}} {${t.lastname}`}>  {t.firstname} {t.lastname} </option>
    ))
  );
}
const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
