import React, {useState} from 'react'

const Form = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName, lastName, email, password);
    }

    return (
        <div>
            <form action="" className="form col-md-4 mx-auto" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="" className="form-label">First Name:</label>
                    <input type="text" className="form-control" onChange={(e)=>{setFirstName(e.target.value)}} />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="" className="form-label">Last Name:</label>
                    <input type="text" className="form-control" onChange={(e) => { setLastName(e.target.value)}} />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="" className="form-label">Email:</label>
                    <input type="email" className="form-control" onChange={(e) => { setEmail(e.target.value)}} />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="" className="form-label">Password:</label>
                    <input type="password" className="form-control" onChange={(e) => { setPassword(e.target.value)}} />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="" className="form-label">Confirm Password:</label>
                    <input type="password" className="form-control" onChange={(e) => { setPassword(e.target.value)}} />
                </div>
                <div className="btn btn-primary mt-3">Submit</div>
                <p>Your Form Data</p>
                <div className="col-12">
                <p>First Name {firstName}</p>
                <p>Last Name {lastName}</p>
                <p>Email {email}</p>
                <p>Password {password}</p>
                <p>Confirm Password {password}</p>
                </div>
            </form>

        </div>
    )
}

export default Form