 import React from 'react';

import { connect } from 'react-redux';
import { signIn , signOut } from '../actions';


class GoogleAuth extends React.Component {
    // state = { isSignedIn : null};
     componentDidMount()
    {
         window.gapi.load('auth2' , () => {
            window.gapi.auth2.init({
                clientId : '344557030320-fkiainv6g1f082pib8aeafvtkfsu9p56.apps.googleusercontent.com',
                scope : 'email',
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                // event listener -> get called every time when the sign in status of the user changes 
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        
        });
    }
    onAuthChange = (isSignedIn) =>
    {   
        if(isSignedIn)
        {
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else
        this.props.signOut(this.auth.currentUser.get().getId());
        
    }
    renderAuthButton()
    {
        if(this.props.isSignedIn === null)
        return (<div>I don't know if we are signed in or not</div>);
        else if(this.props.isSignedIn === true)
        {
            return <button className = "btn btn-success" onClick = {this.onSignOutClick}>Sign Out</button>;
        }
        else
        return <button className = "btn btn-danger" onClick = {this.onSignInClick}>Sign In </button>;
    }
    onSignInClick = () => {
        this.auth.signIn();

    }
    onSignOutClick = () => {
        this.auth.signOut();
    }
    render()
    {   console.log(this.props);
        return (
        <div>
            {this.renderAuthButton()}
        </div>
        );
    }
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
        isSignedIn : state.auth.isSignedIn
    }
        
   
}

export default connect(mapStateToProps , { 
    signIn , signOut
})(GoogleAuth);

