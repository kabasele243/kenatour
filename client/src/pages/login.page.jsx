import { useState } from 'react';
import Header from '../components/header/header.component';

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email, password)
        setEmail('')
        setPassword('')
    
      }

    return (
        <div >
            <Header/>
            <div className="basic-form">
                <h2 className="heading-secondary ma-bt-lg"> Log into your account</h2>
                <form className="form form--login">
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

                    <div className="form__group">
                        <button className="btn btn--green" onClick={handleLogin}>Login</button>
                    </div>

                </form>
            </div>
            
        </div>
    )
}