import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router';
export default class Google_Login extends Component {
    constructor(props){
        super(props)
        this.state={
            loggin:false
        }
    }
    responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj);
        this.setState({
            loggin:true
        })
    }
       
    
    render() {
        if(this.state.loggin===true)
        {
            return <Redirect to='/home' />
        }
        return (
            <div style={{display:'flex',justifyContent:'center'}}>
                <GoogleLogin clientId="1082478479887-mvvhqvmo3av9pq69bufqjgs0o1s4pbgq.apps.googleusercontent.com" buttonText="Login" onSuccess={this.responseGoogle} 
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                />
                {/* {(Object)?<Redirect to='/home' />:null} */}
            </div>
        )
    }
}
