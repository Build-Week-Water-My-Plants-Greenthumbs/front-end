import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editUser } from '../actions';


 const EditUser = (props) => {
    const [formData, setFormData] = useState({})
    const history = useHistory();
    const { success, user, error, editUser } = props;

    

    useEffect(() => {
        success && history.push('/dashboard');
    }, [success])

    const onInputChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value});
    };

    const handleCancel = () => {
        history.push('/dashboard');
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData);
        editUser(formData)
    };

    useEffect(() => {
        setFormData(user)
    }, [])

    

    return (
        <div className="edit-user-form">
            <h2>Edit User Info</h2>
            <form onSubmit={handleSubmit}>
                <label className="edit-label" htmlFor="phone"> Phone Number:</label>
                            <input className="edit-input"
                                onChange={onInputChange}
                                name="phone"
                                id="phone"
                                type="text"
                                value={formData.phone}
                            /> 
            { error && <p>{error}</p>} 
            
            <button type='submit'>Submit Changes</button>
            </form>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user.user,
        error: state.user.editFail,
        success: state.user.edited
    }
}

export default connect(mapStateToProps, { editUser })(EditUser);
