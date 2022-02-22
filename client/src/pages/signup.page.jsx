import { useState } from 'react';

function Signup() {
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [passwordConfirm, setPasswordConfirm]= useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        console.log({
            name,
            email,
            password,
            passwordConfirm
        })
    }

    return(
        <div className="main">
            <div className="basic-form">
                <h2 className="heading-secondary ma-bt-lg"> Sign up</h2>
                <form className="form form--login">
                    <div className="form__group">
                        <label htmlFor="" className="form__label">User Name</label>
                        <input 
                            type="tect" 
                            placeholder="User Name"
                            className="form__input"
                            onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="form__group">
                        <label htmlFor="" className="form__label">Email Address</label>
                        <input 
                            type="email" 
                            placeholder="Email"
                            className="form__input"
                            onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form__group ma-bt-md">
                        <label htmlFor="" className="form__label">Password</label>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="form__input"
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="form__group ma-bt-md">
                        <label htmlFor="" className="form__label">Password Confirmation</label>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="form__input"
                            onChange={(e) => setPasswordConfirm(e.target.value)}/>
                    </div>

                    <div className="form__group">
                        <button className="btn btn--green" onClick={handleSignup}>Login</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Signup;