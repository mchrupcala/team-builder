import React from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./data";
import { useState } from "react";

const App = props => {
  const [member, setMember] = useState(data);

  return (
    <div className="App">
      {console.log(member)}

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
