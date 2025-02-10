import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext);
    if(!user) return (<div></div>)

    return (
        <div>
            <h3>Welcome {user.userName}</h3>
        </div>
    )
}

export default Profile
