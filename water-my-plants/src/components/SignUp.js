import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { createUser } from "../actions";
import UserForm from "./UserForm";

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
    const { success, error, createUser } = props;

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
                    <UserForm onInputChange = {onInputChange} formData = {formData} />
                { error && <p>{error}</p>} 
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
