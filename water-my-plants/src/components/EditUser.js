import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editUser } from '../actions';
import UserForm from './UserForm';

 const EditUser = (props) => {
    const [formData, setFormData] = useState(user)
    const history = useHistory();
    const { success, user, error } = props;

    useEffect(() => {
        success && history.push('/dashboard')
    }, [success])

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value});
    };

    const handleSubmit = e => {
        e.preventDefault();
        editUser(formData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <UserForm onChange={onChange} formData={formData} />
            { error && <p>{error}</p>} 
            <button>Submit Changes</button>
            </form>
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