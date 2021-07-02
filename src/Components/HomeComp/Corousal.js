import React from "react";
import { Link } from "react-router-dom";
import "./Corousal.css";
function Corousal({ data }) {

  function abc(a) {
    return a.replace(/\s/g, "-");
  }

  return (
    <Link to={`/${abc(data.title)}/${data.id}`}>
      <div className="corousal-card">
        <img className="card-img" src={data.image} alt="img"></img>
        <div className="discr">{data.title}</div>
      </div>
    </Link>
  );
}

export default Corousal;
