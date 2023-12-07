import React, { useState } from "react";
import Navbar from "./Navbar";
import "./css/form.css";

const From = () => {
  const [data, SetData] = useState({});
  const inputHolder = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    SetData({ ...data, [name]: value });
  };
  const submitHolder = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/demo", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let formData = await response.json();
    // console.log(formData);
  };
  return (
    <div>
      <Navbar />
      <div>
        <h1 className="heading">Multiple Choice Question Form</h1>
        <form className="form__folder" onSubmit={submitHolder}>
          <label htmlFor="question">Question</label>
          <input
            type="text"
            name="question"
            onChange={inputHolder}
            placeholder="Create a Multiple choice Question ?"
          />
          <label htmlFor="ChoiceA">Choice A</label>
          <input
            type="text"
            name="ChoiceA"
            onChange={inputHolder}
            placeholder="A : Answer"
          />
          <label htmlFor="ChoiceB">Choice B</label>
          <input
            type="text"
            name="ChoiceB"
            onChange={inputHolder}
            placeholder="b : Answer"
          />
          <label htmlFor="ChoiceC">Choice C</label>
          <input
            type="text"
            name="ChoiceC"
            onChange={inputHolder}
            placeholder="C : Answer"
          />
          <label htmlFor="ChoiceD">Choice D</label>
          <input
            type="text"
            name="ChoiceD"
            onChange={inputHolder}
            placeholder="D : Answer"
          />
          <label htmlFor="CorrectAnswer">CorrectAnswer</label>
          <input
            type="text"
            name="CorrectAnswer"
            onChange={inputHolder}
            placeholder="CorrectAnswer"
          />
          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default From;
