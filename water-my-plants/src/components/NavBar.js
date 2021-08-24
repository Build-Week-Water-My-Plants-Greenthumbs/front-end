import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../actions';


const NavBar = (props) => {
    const { loggedIn, logOut } = props;
    const history = useHistory();

    const onClick = (e) => {
        e.preventDefault();
        history.push('/edit');
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        history.push('/signIn');
    }
    
    const handleSignOut = (e) => {
        e.preventDefault();
        logOut();
        localStorage.removeItem('token')
        history.push('/signIn');
        console.log('click');
        //this should be moved to an action when we get LogOut endpoint
        
        

    }

    return (
        <div>
           { loggedIn && <button onClick={onClick}>Edit User</button> }
           { loggedIn ? <button onClick={handleSignOut}>Sign Out</button> : <button onClick={handleSignIn}>Sign In</button>}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        loggedIn: state.user.loggedIn
    }
}

export default connect(mapStateToProps, { logOut })(NavBar);
