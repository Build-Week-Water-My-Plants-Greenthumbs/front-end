import React from 'react'

const UserForm = (props) => {

    const { onInputChange,formData } = props

    return (
        <div>
                    <label className="sign-up-label" htmlFor="username">Username:</label>
                    <input className="sign-up-input"
                           onChange={onInputChange}
                           name="username"
                           placeholder="name, please"
                           id="username"
                           type="text"
                           value={formData.username}
                    />
                    <label className="sign-up-label" htmlFor="phone"> Phone Number:</label>
                        <input className="sign-up-input"
                               onChange={onInputChange}
                               name="phone"
                               placeholder="telephone number, please"
                               id="phone_number"
                               type="text"
                               value={formData.phone}
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
        </div>
    )
}

export default UserForm;
