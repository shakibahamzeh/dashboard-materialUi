import React from 'react';
import "./newUser.css";

const NewUser = () => {
  return (
    <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
            <div className="newUserItem">
              <label>UserName</label>
              <input type="text" placeholder="John" className="newUserInput"/>
            </div>
              <div className="newUserItem">
              <label>FullName</label>
              <input type="text" placeholder="John Smith" className="newUserInput"/>
            </div>
              <div className="newUserItem">
              <label>Email</label>
              <input type="email" placeholder="John@gmail.com" className="newUserInput"/>
            </div>
            <div className="newUserItem">
              <label>PassWord</label>
              <input type="password" placeholder="password" className="newUserInput"/>
            </div>
            <div className="newUserItem">
              <label>Phone</label>
              <input type="text" placeholder="+1 234 567 89" className="newUserInput"/>
            </div>
            <div className="newUserItem">
            <label>Address</label>
              <input type="text" placeholder="NewYork | Usa" className="newUserInput"/>
            </div>
            <div className="newUserItem">
              <label>Gender</label>
              <div className="newUseGender">
                   <input type="radio" name="gender" id="male" value="male"/>
                   <label for="male" className="newUserLabel">Male</label>
                   <input type="radio" name="gender" id="female" value="female"/>
                   <label for="female" className="newUserLabel">Female</label>
                   <input type="radio" name="gender" id="others" value="others"/>
                   <label for="others" className="newUserLabel">Others</label>
              </div>
            </div>
            <div className="newUserItem">
                <label>Active</label>
                <select className="newUserSelect" name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
           <div className="newUserItem">
                <button className="newUserButton">Create</button>
           </div>
        </form>
    </div>
  )
}

export default NewUser;