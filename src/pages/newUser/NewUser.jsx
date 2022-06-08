import React from "react";
import "./newUser.scss";

export default function NewUser() {
  return (
    <div className='newUser'>
      <h1 className='newUserTitle'>New User</h1>
      <form className='newUserForm'>
        <div className='newUserItem'>
          <label>Username</label>
          <input type='text' placeholder='john' />
        </div>
        <div className='newUserItem'>
          <label>Full Name</label>
          <input type='text' placeholder='John Smith' />
        </div>
        <div className='newUserItem'>
          <label>Email</label>
          <input type='email' placeholder='john@gmail.com' />
        </div>
        <div className='newUserItem'>
          <label>Password</label>
          <input type='password' placeholder='john@gmail.com' />
        </div>
        <div className='newUserItem'>
          <label>Phone</label>
          <input type='password' placeholder='+1 234 4567' />
        </div>
        <div className='newUserItem'>
          <label>Address</label>
          <input type='password' placeholder='Florida | USA' />
        </div>
        <div className='newUserItem'>
          <div className='newUserGender'>
            <label>Gender</label>
            <input type='radio' name='gender' id='male' value='male' />
            <label for='male'>Male</label>
            <input type='radio' name='gender' id='female' value='female' />
            <label for='female'>Female</label>
          </div>
        </div>
        <div className='newUserItem'>
          <label>Active</label>
          <select name='active' id='active' className='newUserSelect'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <button className='button newUserButton'>Create</button>
      </form>
    </div>
  );
}
