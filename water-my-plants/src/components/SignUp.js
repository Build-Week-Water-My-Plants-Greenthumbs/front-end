import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { createUser } from "../actions";

const SignUp = (props) => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        phone: "",
    });
    // const [errors, setErrors] = useState( {
    //     username: "",
    //     password: "",
    //     phone_number: "",
    // } );

    const history = useHistory();
    const { success, createUser } = props;

    useEffect(() => {
        success && history.push('/signIn')
    }, [success])

    const onInputChange = event => {
        const newForm = { ...formData, [event.target.name]: event.target.value };
   
        setFormData( newForm );
    };

   
    const handleSubmit = event => {
        event.preventDefault();
        createUser(formData);
    }

    return (
        <>
            <div className="sign-up-img-container">
                <div className='sign-up-container'>
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <h2 className="sign-up-title">Sign up</h2>
                    <label className="sign-up-label" htmlFor="username">Username:</label>
                    <input className="sign-up-input"
                           onChange={onInputChange}
                           name="username"
                           placeholder="name, please"
                           id="username"
                           type="text"
                           value={formData.username}
                    />
                    <label className="sign-up-label" htmlFor="phone_number"> Phone Number:</label>
                        <input className="sign-up-input"
                               onChange={onInputChange}
                               name="phoneNumber"
                               placeholder="telephone number, please"
                               id="phone_number"
                               type="text"
                               value={formData.phoneNumber}
                        />  
                    <label className="sign-up-label" htmlFor="password">Password:</label>
                        <input className="sign-up-input"
                               onChange={onInputChange}
                               name="password"
                               placeholder="password"
                               id="password"
                               type="password"
                               value={formData.password}
                        />
                    { props.error && <p>{props.error}</p>}
                    <br>
                    </br>
                    <Link id='signInLink' to="/signIn">
                        Already a user? <span className='sign-in-cta'>Sign-in!</span>
                    </Link>
                    <button className='sign-up-btn' > Register</button>
                </form>
                </div>
                {/* <img className="sign-in-image"/> */}
            </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        success: state.user.signedUp,
        error: state.user.signUpFail
    }
}

export default connect(mapStateToProps, { createUser })(SignUp);
