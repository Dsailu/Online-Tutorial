import React from 'react'

function my_profile() {
  return (
    <div className="profile-image">
        <img src="https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" alt="Upload image"/>
        <input type="text" placeholder="Enter name" />
        <input type="password" placeholder="Change password" />
        <input type="text" placeholder="Enter Email" />
        <input type="button" value="Submit" />
        <input type="button" value="Reset" />
        
    </div>
  )
}

export default my_profile