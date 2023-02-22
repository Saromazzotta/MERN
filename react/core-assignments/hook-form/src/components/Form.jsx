import React, {useState} from 'react'

const Form = () => {

// using state with each one individually written out
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");

//using state within one object for more dry code
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "", 
        password: "",
        confirmPassword: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(user.firstName, user.lastName, user.email, user.password, user.confirmPassword);
    }

    const changeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <form action="" className="form col-md-4 mx-auto" onSubmit={handleSubmit}>
                <div className="form-group">
                    { //ternary operator                                       // true                                         // false
                        user.firstName && user.firstName.length < 2 ? <p className-="text-danger">First Name must be at least 2 characters</p> : ""
                    }
                    <label htmlFor="" className="form-label">First Name:</label>
                    <input type="text" name="firstName" className="form-control" onChange={changeHandler} />
                </div>
                <div className="form-group mt-3">
                    {
                        user.lastName && user.lastName.length < 2 ? <p className-="text-danger">Last Name must be at least 2 characters</p> : ""
                    }
                    <label htmlFor="" className="form-label">Last Name:</label>
                    <input type="text" name="lastName" className="form-control" onChange={changeHandler} />
                </div>
                <div className="form-group mt-3">
                    {
                        user.email && user.email.length < 2 ? <p className-="text-danger">Email must be at least 2 characters</p> : ""
                    }
                    <label htmlFor="" className="form-label">Email:</label>
                    <input type="email" name="email" className="form-control" onChange={changeHandler} />
                </div>
                <div className="form-group mt-3">
                    {
                        user.password && user.password.length < 8 ? <p className-="text-danger">Password must be at least 8 characters</p> : ""
                    }
                    <label htmlFor="" className="form-label">Password:</label>
                    <input type="password" name="password" className="form-control" onChange={changeHandler} />
                </div>
                <div className="form-group mt-3">
                    {
                        user.confirmPassword && user.confirmPassword !== user.password ? <p className-="text-danger">Passwords must match</p> : ""
                    }
                    <label htmlFor="" className="form-label">Confirm Password:</label>
                    <input type="password" name="confirmPassword" className="form-control" onChange={changeHandler} />
                </div>
                <div className="btn btn-primary mt-3">Submit</div>
                <p>Your Form Data</p>
                <div className="col-12">
                <p>First Name {user.firstName}</p>
                <p>Last Name {user.lastName}</p>
                <p>Email {user.email}</p>
                <p>Password {user.password}</p>
                <p>Confirm Password {user.confirmPassword}</p>
                </div>
            </form>

        </div>
    )
}

export default Form