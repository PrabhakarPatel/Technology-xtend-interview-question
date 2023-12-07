import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./css/home.css";
const Home = () => {
  const [questionBank, setQuestionBank] = useState([]);
  const [isVisble, SetIsVisble] = useState(false);
  const visbleBtn = () => {
    SetIsVisble(!isVisble);
  };

  const getData = async () => {
    const response = await fetch("http://localhost:8080/demo", {
      method: "GET",
    });
    const data = await response.json();
    // console.log(data);
    setQuestionBank(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Navbar />
      <h1 className="heading__tag">Question Bank MCQ</h1>
      {questionBank.map((item) => {
        return (
          <div key={item._id}>
            <h1>{item.question}</h1>
            <ul>
              <li>{item.choiceA}</li>
              <li>{item.choiceB}</li>
              <li>{item.choiceC}</li>
              <li>{item.choiceD}</li>
              {isVisble ? <li>{item.answer}</li> : <li></li>}
            </ul>
          </div>
        );
      })}
      <button className="btn" onClick={visbleBtn}>
        Answer
      </button>
    </div>
  );
};

export default Home;
