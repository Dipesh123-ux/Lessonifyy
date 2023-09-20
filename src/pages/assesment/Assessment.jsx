import React from "react";
import { NavLink } from "react-router-dom";

const Assessment = () => {
  const st = {
    display: "flex",
    height: "20vw",
    width: "auto",
    border: "2px solid black",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px",
    borderRadius: "30px",
  };

  return (
    <div style={{ marginTop: "200px" }}>
      <h1>Assessment</h1>
      <div
        type="circle"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="col-md-6">
          <div style={st}>
            <NavLink
              title="Test for the students having Specific Language Impairment "
              to="/wordGame"
            >
              <h3>Decision-Making</h3>
            </NavLink>
          </div>
          <div style={st}>
            <NavLink
              title="Test for the students having dyslexia"
              to="/memory"
            >
              <h3>Memory</h3>
            </NavLink>
          </div>
        </div>
        <div className="col-md-6">
          <div style={st}>
            <NavLink
              title="Test for the students having  dyscalculia"
              to="/problemSolving"
            >
              <h3>Problem-Solving</h3>
            </NavLink>
          </div>
          <div style={st}>
            <NavLink to="/writing">
              <h3>Speech</h3>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
