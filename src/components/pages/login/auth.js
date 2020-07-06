import React, {Component} from 'react' 
import Login from './login'
import Signup from './signup'

export default class Auth extends Component {
    constructor(props) {
        super(props)

        this.state = {
            authMethod: 'login'
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({authMethod: 'signup'})
    }

render() {
        return (
            <div className = 'auth-wrapper'>
                {this.state.authMethod === 'login' ? <Login /> : <Signup />}
                <p >Don't have an account? Shame on you! Click <span style = {{cursor: 'pointer', color: 'blue'}} onClick = {this.handleClick}>HERE</span> to sign up.</p>
            </div>
        )
    }
}