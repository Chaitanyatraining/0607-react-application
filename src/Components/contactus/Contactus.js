import React, { Component } from 'react'
class Contactus extends Component{

    state = {
        firstName : "",
        lastName : "",
        email : "",
        phoneNumber : "",
        firstNameErr :"",
        lastNameErr:"",
        emailErr:"",
        phoneNumberErr:""
    }

    handleChange = (e)=>{
        const {name,value} = e.target;
        this.setState({[name]:value})
        // console.log(this.state)
    }

    //validation
    //firstname > 4
    // lastname > 2
    // email include @
    // phoneNumber 10

    validateForm = ()=>{
        let firstNameErr = '';
        let lastNameErr = '';
        let emailErr = '';
        let phoneNumberErr = '';

        if(this.state.firstName.length<=4){
            firstNameErr = "first name should be atleast 4 char";
        }
        if(this.state.lastName.length<=2){
            lastNameErr = "last name should be atleast 2 char";
        }
        if(!this.state.email.includes('@')){
            emailErr = "Enter a valid email";
        }
        if(this.state.phoneNumber.length < 10){
            phoneNumberErr = "Enter a valid phoneNumber";
        }

        //falsy value
        //false,0,"",undefined,null

        if(firstNameErr || lastNameErr || emailErr || phoneNumberErr){
            this.setState({firstNameErr,lastNameErr,emailErr,phoneNumberErr})
            return false;
        }else{
            this.setState({firstNameErr,lastNameErr,emailErr,phoneNumberErr})
            return true;
        }
    }

    handleSubmit=(e)=>{
    e.preventDefault();
        // console.log(this.state)
        this.validateForm();
    }
   render(){
    return (
        <div>
            <h2>Contactus</h2>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8'>
                        <form onSubmit={this.handleSubmit}>
                            <div className='my-2'>
                            <input type="text" onChange={this.handleChange} name="firstName"
                             placeholder='Enter your first name'
                             value= {this.state.firstName}
                             />
                             <p className='text-danger'>{this.state.firstNameErr}</p>
                            </div>
                            <div className='my-2'>
                            <input type="text" onChange={this.handleChange} name="lastName"
                             placeholder='Enter your last name'
                             value= {this.state.lastName}
                              />
                            <p className='text-danger'>{this.state.lastNameErr}</p>
                            </div>
                            <div className='my-2'>
                            <input type="text" onChange={this.handleChange} name="email"
                             placeholder='Enter your email'
                             value= {this.state.email}
                             />
                            <p className='text-danger'>{this.state.emailErr}</p>
                            </div>
                            <div className='my-2'>
                            <input type="contact" onChange={this.handleChange} name="phoneNumber"
                             placeholder='Enter your phonenumber'
                             value= {this.state.phoneNumber}
                             />
                            <p className='text-danger'>{this.state.phoneNumberErr}</p>
                            </div>
                            <button className='btn btn-primary'>Submit</button>
                        </form>
                    </div>
                    <div className='col-md-2'></div>
                </div>  
            </div>
        </div>
      )
   }
 
}

export default Contactus