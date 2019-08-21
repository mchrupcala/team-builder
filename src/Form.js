import React, {useState} from "react";


const Form = props => {
    //Sets state of the input I receive from user. Initially blank.
    const [userData, setUserData] = useState({firstName: '', lastName: '', email: '', role: ''});

    //Receives previous past data (from where?...userData should be keys + blank values initially (above)). Anyway, then sets userData to the user's input.
const changeHandler = event => {
    console.log(event.target.value);

    setUserData({...userData, [event.target.name]: event.target.value })
}

// Prevents page from loading. Adds previous array of data + a timestamped id to new member. Receives addMember() from App.js, then adds newest member to the list of past members (newMember) and clears input fields.
const submitForm = event => {
    event.preventDefault();
    const newMember = {
        ...userData,
        id: Date.now()
    };
    
    props.addMember(newMember);
    setUserData({firstName: "", lastName: "", email: "", role: ""});

};
    //Input field to receive new user data.
    return (
  <form onSubmit={submitForm}>
    <input 
    type="text" 
    name="firstName" 
    placeholder="First Name here."
    value= {props.firstName}
    onChange={changeHandler} 
    /> <br></br>

    <input 
    type="text" 
    name="lastName" 
    placeholder="Last Name here."
    value={props.lastName}
    onChange={changeHandler} 
     /> <br></br>

    <input 
    type="text" 
    name="email"
    placeholder="Email here." 
    value={props.email} 
    onChange={changeHandler} 
    /> <br></br>

    <input
    type="text" 
    name="role" 
    placeholder="Role here."
    value={props.role}
    onChange={changeHandler} 
    /> <br></br>

    <button type="submit">Add Team!</button>
  </form>
  );
}

export default Form;
