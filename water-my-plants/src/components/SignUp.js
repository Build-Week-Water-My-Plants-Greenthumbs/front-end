import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { createUser } from "../actions";
import UserForm from "./UserForm";

const initialState = {
    username: '',
    password: '',
    phone: ''
};

const SignUp = (props) => {
    const [formData, setFormData] = useState(initialState);
   
    const history = useHistory();
    const { success, error, createUser } = props;

    useEffect(() => {
        success && history.push('/signIn')
    }, [success])

    const onInputChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value});
    };

   
    const handleSubmit = event => {
        event.preventDefault();
        console.log(formData);
        createUser(formData);
    }

    return (
 <>
            <div className="sign-up-img-container">
                <div className='sign-up-container'>
                <h2 className="sign-up-title">Sign up</h2>
                
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <UserForm onInputChange = {onInputChange} formData = {formData} />
                { error && <p>{error}</p>} 
          

                <button className='sign-up-btn' > Register</button>
          <div className="sign-up-link">
                    <Link id='signUpLink' to="/signIn">
                        Already a user? <span className='sign-in-cta'>Sign-in!</span>
                    </Link>
                    </div>
                 
                   
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
