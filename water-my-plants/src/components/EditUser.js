// import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import { editUser } from '../actions';
// import UserForm from './UserForm';

//  const EditUser = (props) => {
//     const [formData, setFormData] = useState({})
//     const history = useHistory();
//     const { success, user, error } = props;

    

//     useEffect(() => {
//         success && history.push('/dashboard');
//     }, [success])

//     const onChange = e => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value});
//     };

//     const handleCancel = () => {
//         history.push('/dashboard');
//     }

//     const handleSubmit = e => {
//         e.preventDefault();
//         editUser(formData.userId)
//     };

//     useEffect(() => {
//         setFormData(user)
//     }, [handleCancel])

//     return (
//         <div>
//             <h2>Edit User Info</h2>
//             <form onSubmit={handleSubmit}>
//             <UserForm onChange={onChange} formData={formData} />
//             { error && <p>{error}</p>} 
//             <button type='reset' onClick={handleCancel}>Cancel</button>
//             <button type='submit'>Submit Changes</button>
//             </form>
//         </div>
//     )
// }

// const mapStateToProps = state => {
//     return {
//         user: state.user.user,
//         error: state.user.editFail,
//         success: state.user.edited
//     }
// }

// export default connect(mapStateToProps, { editUser })(EditUser);