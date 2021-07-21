import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
const ProfilesCard = ({profile}) => {
     
    if(profile === null ){
        return <div>Carregando...</div>
    }
    if(profile.length === 0){
        return <div>Nenhum resultado encontrado.</div>
    }
    return (
        
        <Link style={{ textDecoration: 'none', color: 'black' }} to={`/profile/${profile.login}`}>
    <div className="profiles-card">
            
            <img className="profiles-card__image" src={profile?.avatar_url} alt={`Foto de ${profile?.name}`}/>
            <div className="profiles-card__text">
            <h1 className="profiles-card__text__title">{profile?.name}</h1>
            <p className="profiles-card__text__bio">{profile?.bio}</p>
            </div>
        </div>
        </Link>  
        )
}

export default ProfilesCard
