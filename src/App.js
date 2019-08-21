import React from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./data";
import { useState } from "react";
import Form from "./Form";

 function App() {
   //setting the state --> member receives the initial data from data.js
  const [member, setMember] = useState(data);

  //calls setMember to update the state. Includes all original data, adds new input.
  const addMember = newMember => {
    setMember([...member, newMember])
  };

  const [memberToEdit, setMemberToEdit] = useState();

  return (
    <div className="App">
      {console.log(member)}

      <Form 
      //Passes the addMember function as a prop to Form.js.
      addMember={addMember}
      memberToEdit={memberToEdit}/>
      

      {member.map(item => {
        //Receives the array of objects from member...then renders it as a card for each team member.
      return (
          <div>
            <hr></hr>
            <h2>
              {item.firstName} {item.lastName}
            </h2>
            <p>Email: {item.email}</p>
            <br />
            <button>Edit</button>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};

export default App;