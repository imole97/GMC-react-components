import React from 'react'
import MyProfile from './profile.jpg'

function ProfilePhoto() {
    return (
        <div>
            <img src={MyProfile} alt='myprofile' width='400' height='400'/>
        </div>
    )
}

export default ProfilePhoto
