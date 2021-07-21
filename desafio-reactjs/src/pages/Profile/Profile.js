import ProfilesProfile from 'Components/Profile/Profile'
import React from 'react'
import { useParams } from 'react-router-dom'

const PageProfile = () => {
    const {login} = useParams();
    return (
        <ProfilesProfile login={login}/>
    )
}

export default PageProfile
