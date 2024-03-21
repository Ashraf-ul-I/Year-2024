import React, { useEffect, useState } from 'react'

const FormControl = () => {
    const initialValues = {
        username: "",
        email: "",
        password: ""
    };
    const [formValues, setFormvalues] = useState(initialValues);
    const [formErrors, setFormerrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormvalues({ ...formValues, [name]: value })
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        setFormerrors(validate(formValues))
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formErrors)
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues)
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {};
        const usernameRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{4,}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{4,}$/;


        if (!values.username) {
            errors.username = "Username is required";
        } else if (!usernameRegex.test(values.username)) {
            errors.username = "This is not valid username"
        }
        if (!values.email) {
            errors.email = "Email is required"; // Corrected key to 'email'
        } else if (!emailRegex.test(values.email)) {
            errors.email = "This is not a valid email"
        }
        if (!values.password) {
            errors.password = "Password is required"; // Corrected key to 'password'
        } else if (!passwordRegex.test(values.password)) {
            errors.password = "This is not a valid password";
        }

        return errors; // Return the errors object
    }


    return (
        <div>
            <pre>{JSON.stringify(formValues)}</pre>
            <form onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <div className='ui_divider'></div>
                <div className='ui-form'>
                    <div className='field'>
                        <label htmlFor="">Username</label>
                        <input type="text" name='username' placeholder='UserName'
                            value={formValues.username}
                            onChange={handleChange} />
                    </div>
                    <p>{formErrors.username}</p>
                    <div className='field'>
                        <label htmlFor="">Email</label>
                        <input type="email" name='email' placeholder='Email' value={formValues.email}
                            onChange={handleChange} />
                    </div>
                    <p>{formErrors.email}</p>
                    <div className='field'>
                        <label htmlFor="">Password</label>
                        <input type="password" name='password' placeholder='Enter Password' value={formValues.password}
                            onChange={handleChange} />
                    </div>
                    <p>{formErrors.password}</p>
                    <div>
                        <button className='ui-button-submit'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormControl