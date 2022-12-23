import React, { Component } from 'react'
import './LoginForm.css';

export default class LoginForm extends Component {

    constructor(props){
        super(props)

        this.state = {
           firstNameData: '',
            lastNameData : '',
            emailData : '' ,
            submitted : false ,
            allValid : false 
          }
          this.submitHandler= this.submitHandler.bind(this) 
          this.firstNameValidation= this.firstNameValidation.bind(this) 
          this.lastNameValidation= this.lastNameValidation.bind(this) 
          this.emailValidation= this.emailValidation.bind(this) 

    }
    submitHandler(event){
      event.preventDefault()
      this.setState ({submitted: true})

      if (this.state.firstNameData.length !==0 &&
         this.state.lastNameData.length !==0 && 
        this.state.emailData.length !==0  ){
          this.setState ({allValid: true})

          setTimeout(()=> {
            this.setState ({allValid: false})
          },3000)
    
        } 
  }


    firstNameValidation(event){
        console.log(event);
        this.setState({firstNameData:event.target.value})
    }

    lastNameValidation(event){
        console.log(event);
        this.setState({lastNameData:event.target.value})
    }

    emailValidation(event){
        console.log(event);
        this.setState({emailData:event.target.value})
    }
    
  
     
  render() {


    return (
      <div className="content">

        <form   onSubmit={this.submitHandler}>
           
            {this.state.submitted && this.state.allValid &&(              
                 <div className="success-message"> Success! Thank You for Your Registering</div> )}          
                 
        

          <input  type="text" placeholder='First Name' name="firstName"  value={this.state.firstNameData}
         onChange={this.firstNameValidation} />
          {this.state.submitted && this.state.firstNameData.length === 0 &&  (
           <span className="first-name-error" >Please Enter FirstName</span>  )}

          <input  type="text" placeholder='Last Name' name="lastName"  value={this.state.lastNameData}
         onChange={this.lastNameValidation} />
         {this.state.submitted && this.state.lastNameData.length === 0 && (
           <span className="last-name-error" >Please Enter  LastName</span>  )}

          <input  type="text" placeholder='Email'  name="email" value={this.state.emailData}
         onChange={this.emailValidation} />
         {this.state.submitted && this.state.emailData.length === 0 && (
           <span className="email-error" >Please Enter an Email address</span>  )}
        

          <button type="submit"> Register</button>

        </form>
 
      </div>
    )
  }
}
