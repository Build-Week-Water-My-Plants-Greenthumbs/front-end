import React, { useEffect, useState } from "react";
import { Link, useHistory }           from "react-router-dom";


//InitialState
const initialState = {
    username: "",
    phone: "",
    password: "",
};


// SignIn component
const SignIn = () => {
    const [formState, setFormState]           = useState( initialState );
    // const [buttonDisabled, setButtonDisabled] = useState( true );
    const [errors, setErrors]                 = useState( initialState );

    
    const change = ( e ) => {
        const { name, value } = e.target;
        setFormState( { ...formState, [name]: value } );
        setErrors( name, value );
    };

    
    return (
        <>
            <header>
                <h1 className="sign-in-header">Water Your Plants!</h1>
            </header>
            <div className="sign-in-img-container">
                {/* <img className="sign-in-image"
                    /> */}
                <section className="sign-in-container">
                    <form className="sign-in-form" >
                        <h2 className='sign-in-title'>Sign in</h2>
                        <label className="sign-in-label" htmlFor="username">
                            Username:
                        </label>
                        <input className="sign-in-input"
                               type="text"
                               name="username"
                               placeholder="Enter your username"
                               value={formState.username}
                               onChange={change}
                        />
                        <p>{errors.username}</p>

                        <label className="sign-in-label" htmlFor="phone">
                            Phone Number:
                        </label>
                        <input className="sign-in-input"
                               type="text"
                               name="phone"
                               placeholder="Enter your phone number"
                               value={formState.phone}
                               onChange={change}
                        />
                        <p>{errors.phone}</p>

                        <label className="sign-in-label" htmlFor="password">
                            Password:
                        </label>
                        <input className="sign-in-input"
                               type="password"
                               name="password"
                               placeholder="Enter your password"
                               value={formState.password}
                               onChange={change}
                        />
                        <p className="error">{errors.password}</p>

                        <Link id='signUpLink' to="/sign-up">
                            Need an account? <span className='sign-up-cta'>Sign-up</span>
                        </Link>
                        <button className="sign-in-btn" >
                            Sign In
                        </button>
                    </form>
                </section>
            </div>
        </>
    );
};

export default SignIn;