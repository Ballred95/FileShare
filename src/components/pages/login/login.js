import React from 'react' 

export default function Login(props){

        
    

    


        return (
            
                      <form onSubmit = {props.handleSubmit}>
                      <input 
                      type="text" 
                      name = 'usernameInput'
                      placeholder = 'username' 
                      value = {props.usernameInput}
                      onChange = {props.handleChange}
                      />
                        <input 
                        type="password" 
                        name = 'passwordInput'
                        placeholder = 'password' 
                        value = {props.passwordInput}
                        onChange = {props.handleChange}
                        />

                        <button>Login</button>
                      </form>
           
        )
    
}
