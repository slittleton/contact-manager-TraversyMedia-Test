import React, { Component } from 'react'
import { Consumer } from '../../context';
// import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

//EXAMPLE OF CONTROLED COMPONENT
 class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors:{},
  }
onChange = (e)=>{ this.setState({[e.target.name]: e.target.value})};

onSubmit = async (dispatch, e) =>{
  e.preventDefault();

  const { name, email, phone } = this.state;

  // Check For Errors
  if(name === ''){
    this.setState({errors:{name:'Name is required'}});
    return;
  }
  if(email === ''){
    this.setState({errors:{email :'Email is required'}});
    return;
  }
  if(phone === ''){
    this.setState({errors:{phone:'Phone is required'}});
    return;
  }

  const newContact = {
    // id: uuid(), // you need to install uuid to use this function to generate an id
    name, 
    email,
    phone
  };

  const res = await axios
    .post('https://jsonplaceholder.typicode.com/users', newContact)

  dispatch ({type: 'ADD_CONTACT', payload: res.data})
  

  //Clear State
  this.setState({
    name:'',
    email:'',
    phone:'',
    errors:{}
  })

  this.props.history.push('/')

}

  render() {
    const { name, email, phone, errors } = this.state;

    return(
      <Consumer>
        {value => {
          const { dispatch } = value;
          return(
            <div className="card mb-3">
            <div className="card-header">Add Contact</div>
            <form onSubmit={this.onSubmit.bind(this, dispatch)}>
              <TextInputGroup 
                label="Name"
                name="name"
                placeholder="Enter Name"
                value={name}
                onChange={this.onChange}
                error={errors.name}
              />
              <TextInputGroup 
                label="Email"
                name="email"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={this.onChange}
                error={errors.email}
              />
              <TextInputGroup 
                label="Phone"
                name="phone"
                placeholder="Enter Phone"
                value={phone}
                onChange={this.onChange}
                error={errors.phone}
              />
              <input type="submit" value="Add Contact" className="btn btn-block btn-light"/>
            </form>
          </div>
          )
        }}
      </Consumer>
    )
  }
}
export default AddContact;