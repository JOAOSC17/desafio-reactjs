import React from 'react'
import { Link } from 'react-router-dom'
import ProfilesCard from '../Card/Card'
import './List.css'
const ProfilesList = () => {
    return (
        <div className="profiles-list">
         <Link style={{ textDecoration: 'none', color: 'black' }} to="/profile" ><ProfilesCard/></Link>  
         <Link style={{ textDecoration: 'none', color: 'black' }} to="/profile" ><ProfilesCard/></Link> 
         
         <Link style={{ textDecoration: 'none', color: 'black' }} to="/profile" ><ProfilesCard/></Link>  
         <Link style={{ textDecoration: 'none', color: 'black' }} to="/profile" ><ProfilesCard/></Link>
         
         <Link style={{ textDecoration: 'none', color: 'black' }} to="/profile" ><ProfilesCard/></Link>  
         <Link style={{ textDecoration: 'none', color: 'black' }} to="/profile" ><ProfilesCard/></Link>
         
         <Link style={{ textDecoration: 'none', color: 'black' }} to="/profile" ><ProfilesCard/></Link>  
         <Link style={{ textDecoration: 'none', color: 'black' }} to="/profile" ><ProfilesCard/></Link>
        </div>
    )
}

export default ProfilesList
