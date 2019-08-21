import React from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./data";
import { useState } from "react";
import Form from "./Form";

const App = props => {
  const [member, setMember] = useState(data);

  return (
    <div className="App">
      {console.log(member)}
      <Form />
      {member.map(item => {
        return (
          <div>
            <h2>
              {item.firstName} {item.lastName}
            </h2>
            <p>Email: {item.email}</p>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default App;

//List of if I have time: want to build a unique key value for each, like in Christina's walkthrough from today.
