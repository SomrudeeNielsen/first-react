import { useState } from "react";


function Form() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const email = event.target.email;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:
                <input
                type="text"
                name="FirstName"
                value={inputs.FirstName || ""}
                onChange={handleChange} />
            </label>
            <br></br>
            <label>E-mail:
                <input
                type="email"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange} />
            </label>
            <br></br>
            <label>Message:
                <input
                type="text"
                name="message"
                value={inputs.message || ""}
                onChange={handleChange} />
            </label>
            <br></br>
            <br></br>
            <input type="submit" />
            
        </form>
    );
};


export default Form;