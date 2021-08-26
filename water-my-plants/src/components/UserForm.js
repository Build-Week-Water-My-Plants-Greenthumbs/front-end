import React from 'react'

const UserForm = (props) => {

    const { onInputChange,formData } = props

    return (
        <div>
               
                    <label className="sign-up-label" htmlFor="username"></label>
                    <input className="sign-up-input"
                           onChange={onInputChange}
                           name="username"
                           placeholder="User Name"
                           id="username"
                           type="text"
                           value={formData.username}
                           
                    />
                    <div className="sign-up-style">
                    <label className="sign-up-label" htmlFor="phone"> </label>
                        <input className="sign-up-input"
                               onChange={onInputChange}
                               name="phone"
                               placeholder="Telephone Number"
                               id="phone_number"
                               type="text"
                               value={formData.phone}
                        />  
                        </div>
                    <label className="sign-up-label" htmlFor="password"></label>
                        <input className="sign-up-input"
                               onChange={onInputChange}
                               name="password"
                               placeholder="Password"
                               id="password"
                               type="password"
                               value={formData.password}
                        />
        </div>
    )
}

export default UserForm;
