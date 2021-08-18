import React, { useState } from "react";
import { Link, useHistory }           from "react-router-dom";





export default function SignUp () {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        phone_number: "",
    });
    const [errors, setErrors] = useState( {
        username: "",
        password: "",
        phone_number: "",
    } );

    const history = useHistory();

    const onInputChange = event => {
        const newForm = { ...formData, [event.target.name]: event.target.value };
   
        setFormData( newForm );
    };

    const handleSubmit = event => {
        
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
                  
                    
                    <label className="sign-up-label" htmlFor="phone_number"> Phone Number:
                        <input className="sign-up-input"
                               onChange={onInputChange}
                               name="phone_number"
                               placeholder="telephone_number, please"
                               id="phone_number"
                               type="text"
                               value={formData.phone_number}
                        />  

                    </label>
                      

                    <label className="sign-up-label" htmlFor="password">Password:
                        <input className="sign-up-input"
                               onChange={onInputChange}
                               name="password"
                               placeholder="password"
                               id="password"
                               type="password"
                               value={formData.password}
                        />
                        
                    </label>
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
}