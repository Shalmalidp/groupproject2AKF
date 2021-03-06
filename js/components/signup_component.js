import React from 'react';


let Signup = React.createClass({

  SubmitClickHandler(){
    this.props.onSubmitClick();
  },

  CancelClickHandler(){
    this.props.onCancelClick();

  },



  render() {
    return (
      <div className='sign-up'>
        <form>
          <label >Name</label>
          <input type='text' placeholder='Enter Name' className='newUserName'/>
          <label>Select User ID</label>
          <input type='text' placeholder='Create UserID' className='newUserID'/>
          <label> Password</label>
          <input type='password' placeholder='password' className='passcode'/>
          <label>Email</label>
          <input type='email' placeholder='Enter Email Address' className='emailAdd'/>
        </form>
        <button className='submit' onClick={this.SubmitClickHandler}>Submit</button>
        <button className='cancel' onClick={this.CancelClickHandler}>Cancel</button>
      </div>
      
    );
  }
});

export default Signup;