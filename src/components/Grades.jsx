import React from "react";
import "../index.css";
import { preSchool, Grades_K_4, High_School_Young_Adult, Grades_5_8 } from "./Data/data";

const Grades = ({ setData }) => {
  return (
    <div className="m-5">
      <h1
        style={{ fontWeight: "550" }}
        className="row p-4 display-4 heading"
      >
        What grade is the person in?
      </h1>
      <p className="row lead text-dark" style={{ padding: "1.5rem 73px 1.5rem 2.5rem" }}>
        Signs of LDs can be detected in children as young as 4. But often, signs
        don’t show up (or are not noticed) until grades 3-5 —or even later in
        life. And of course, no two people are exactly alike, even if they have
        the same type of LD.
      </p>

      <div className="row">
        <div className="col-md-8" >
          <button
            onClick={() => setData(preSchool)}
            className="p-5 m-2 grade"
          >
            <h5 style={{ fontWeight: 400 }}>Pre School</h5>
          </button>
          <button onClick={() => setData(Grades_K_4)} className="p-5 m-2 grade">
            <h5 style={{ fontWeight: 400 }}>Grades K-4</h5>
          </button>
          <button onClick={() => setData(Grades_5_8)} className="p-5  m-2 grade">
            <h5 style={{ fontWeight: 400 }}>Grades 5-8</h5>
          </button>
          <button onClick={() => setData(High_School_Young_Adult)} className="p-5 m-2 grade">
            <p style={{ fontWeight: 470 ,color:"black",fontSize:"16px"}}>High School / Young Adult</p>
          </button>
        </div>
        <div className=" pe-5 col-md-4 text-center did_you">
          <h1 className="p-2 mt-4" style={{ color: "white" }}>Did you know?</h1>
          <br />
          <p className="m-2 did_you_know" >
            Researchers have used brain imaging technology to study the
            structure of the brain and how it works. Comparing people with and
            without LDs, they found differences in brain structures and in how
            the brain works when reading and doing math.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Grades;
