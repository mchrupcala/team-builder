import React, {useState} from "react";


const Form = props => {
    const [userData, setUserData] = useState({firstName: '', lastName: '', email: '', role: ''});

const changeHandler = event => {
    console.log(event.target.value);

    setUserData({...userData, [event.target.name]: event.target.value })
}
const submitForm = event => {
    event.preventDefault();
    const newMember = {
        ...userData,
        id: Date.now()
    };
    
    props.addMember(newMember);
    setUserData({firstName: "", lastName: "", email: "", role: ""});

};
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
