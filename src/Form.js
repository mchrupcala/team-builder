import React, {useState} from "react";


const Form = props => {
    const [userData, setUserData] = useState({firstName: '', lastName: '', email: '', role: ''});

const changeHandler = event => {
    console.log(event.target.value);

    setUserData({...userData, [event.target.name]: event.target.value })
}
    return (
  <form>
    <input 
    type="text" 
    name="firstName" 
    value="firstName"
    // onChange= 
    />

    <input 
    type="text" 
    name="lastName" 
    value="lastName" />

    <input 
    type="text" 
    name="email" 
    value="email" />

    <input
    type="text" 
    name="role" 
    value="role"
    />

    <button type="submit">Add Team!</button>
  </form>
  );
}

export default Form;
