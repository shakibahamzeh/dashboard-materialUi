import React from 'react';
import "./user.css";
import Anna from "../../assets/Anna.jpg";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { CalendarToday, LocationSearching, MailOutline, PhoneAndroid } from '@mui/icons-material';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from 'react-router-dom';

const User = () => {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
              <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src={Anna} alt="userShow" className="userShowImg"/>
                    <div className="userShowTopTitle">
                        <span className="userShowUserName">Anna Backer</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowBottomTitle">Account Detail</span>
                    <div className="userShowInfo">
                        <PermIdentityIcon className="userShowIcon"/>
                        <span className="userShowInfoTitle">annaback99</span>
                    </div>
                     <div className="userShowInfo">
                        <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoTitle">10.12.1999</span>
                    </div>
                    <span className="userShowBottomTitle">Account Detail</span>
                     <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon"/>
                        <span className="userShowInfoTitle">+1 234 567 78</span>
                    </div>
                     <div className="userShowInfo">
                        <MailOutline className="userShowIcon"/>
                        <span className="userShowInfoTitle">annaback99@gmail.com</span>
                    </div>
                      <div className="userShowInfo">
                        <LocationSearching className="userShowIcon"/>
                        <span className="userShowInfoTitle">New York | USA</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>UserName</label>
                            <input type="text" placeholder="annaback99" className="userUpdateInput"/>
                        </div>
                        <div className="userUpdateItem">
                            <label>FullName</label>
                            <input type="text" placeholder="Anna Backer" className="userUpdateInput"/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="email" placeholder="annaback99@gmail.com" className="userUpdateInput"/>
                        </div>
                        <div className="userUpdateItem">
                            <label>PhoneNumber</label>
                            <input type="text" placeholder="+1 234 567 78" className="userUpdateInput"/>
                        </div>
                         <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder="New York | USA" className="userUpdateInput"/>
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src={Anna} alt="" className="userUpdateImg"/>
                            <label htmlFor="file"><PublishIcon className="userUpdateIcon"/></label>
                            <input type="file" id="file" style={{display:"none"}}/>
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default User;