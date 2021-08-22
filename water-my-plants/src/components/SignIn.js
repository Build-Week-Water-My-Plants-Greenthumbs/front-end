import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../actions";

//InitialState
const initialState = {
    username: "",
    password: ""
};

// SignIn component
const SignIn = (props) => {
    const [formState, setFormState] = useState( { //temporary hardcoded user for testing
        username: "user1",
        password: "securepassword1"
    });
    // const [buttonDisabled, setButtonDisabled] = useState( true );
    const [errors, setErrors] = useState( initialState );
    const history = useHistory();
    const { success, error, loginUser } = props;
    
    const change = ( e ) => {
        const { name, value } = e.target;
        setFormState( { ...formState, [name]: value } );
        setErrors( name, value );
    };

    const handleSubmit = e => {
        e.preventDefault();
        loginUser(formState);
    }

    useEffect(() => {
        success && history.push('/dashboard')
        console.log(error)
        console.log(success)
    },[error, success])

    
    return (
        <>
            <div className="sign-in-img-container">
                {/* <img className="sign-in-image"
                    /> */}
                <section className="sign-in-container">
                    <form className="sign-in-form" onSubmit={handleSubmit}>
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
                        {error && <p>{error}</p>} 
                    </form>
                </section>
            </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        success: state.user.loggedIn,
        error: state.user.logInFail
    };
};

export default connect(mapStateToProps, { loginUser })(SignIn);