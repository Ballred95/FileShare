import React, {Component} from 'react' 
import Login from './login'
import Signup from './signup'

export default class Auth extends Component {
    constructor(props) {
        super(props)

        this.state = {
            authMethod: 'login',
            usernameInput: '',
            passwordInput: ''    
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSignup = this.handleSignup.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleSignup(event) {
        event.preventDefault()
        fetch('http://127.0.0.1:5000/user/create', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                username: this.state.usernameInput,
                password: this.state.passwordInput
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }

    handleLogin(event) {
        event.preventDefault()
        console.log('login!')
    }

    handleClick() {
        this.setState({authMethod: 'signup'})
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

render() {
        return (
            <div className = 'auth-wrapper'>
                {this.state.authMethod === 'login' 
                ? <Login
                handleChange = {this.handleChange} 
                handleSubmit = {this.handleLogin}
                usernameInput = {this.state.usernameInput}
                passwordInput = {this.state.passwordInput}
                /> 
                : <Signup 
                handleChange = {this.handleChange} 
                handleSubmit = {this.handleSignup}
                usernameInput = {this.state.usernameInput}
                passwordInput = {this.state.passwordInput}
                />}
                <p >Don't have an account? Shame on you! Click <span style = {{cursor: 'pointer', color: 'blue'}} onClick = {this.handleClick}>HERE</span> to sign up.</p>
            </div>
        )
    }
}