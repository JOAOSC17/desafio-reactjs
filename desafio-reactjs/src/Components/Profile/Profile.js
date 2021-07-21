import React, { useEffect, useState } from 'react'
import api from 'Services/api';
import ProfilesRepository from './Repository/Repository';
import { IoPeopleSharp } from 'react-icons/io5'
import { BsHeart, BsStar } from 'react-icons/bs'
import { FaRegBuilding } from 'react-icons/fa'
import { FiMapPin, FiTwitter, FiLink } from 'react-icons/fi'
import { GoMail } from 'react-icons/go'
import './Profile.css'
import { Link, useHistory } from 'react-router-dom';

const ProfilesProfile = ({login}) => {
    const [profileSingle, setProfileSingle] = useState([])
    
    const history = useHistory();
        
    useEffect(()=>{
        
    console.log(login);
        api
       .get(`/${login}`)
       .then((response) => {
           console.log(response.data);
           setProfileSingle(response.data)
        })
       .catch((err) => {
         console.error("ops! ocorreu um erro" + err);
       })
       
        // eslint-disable-next-line react-hooks/exhaustive-deps

    },[])
    function backToSearch(){
        history.push('/');
    }
    return (
        <div className="profiles-profile">
            <div className="profiles-profile-side-bar"> 
                <img className="profiles-profile-side-bar__image" src={profileSingle.avatar_url} alt={`Foto de ${profileSingle.name}`}/>
            <h1 className="profiles-profile-side-bar__name">{profileSingle.name} </h1>
           <span className="profiles-profile-side-bar__username">@{profileSingle.login}</span>
           <p className="profiles-profile-side-bar__bio">{profileSingle.bio}</p>
           <div className="profiles-profile-side-bar__info">
               <span><IoPeopleSharp/> {`${profileSingle.followers} followers`}</span>
               <span><BsHeart/> {`${profileSingle.following} following`}</span>
               <span><BsStar/> {`${profileSingle.star} stars`}</span>
               </div> 
               <div className="profiles-profile-side-bar__connect">
                   <span><FaRegBuilding className="icons-connect"/>{(profileSingle.orgs_url!==undefined)?(`${profileSingle.organizations_url}`) :('nao tem orgs')}</span>
                   <span><FiMapPin className="icons-connect"/>{(profileSingle.location!==null)?(`${profileSingle.location}`) :('Location')}</span>
                   <span><GoMail className="icons-connect"/>{(profileSingle.email!==null)?(`${profileSingle.email}`) :('Email')}</span>
                   <span><FiLink className="icons-connect"/>{(profileSingle.blog!=='')?(`${profileSingle.blog}`) :('www.mywebsite.com')}</span>
                   <span><FiTwitter className="icons-connect"/>@{(profileSingle.twitter_username!==null)?(`${profileSingle.twitter_username}`) :('myTwitter')}</span>
               </div>
               <button  onClick={backToSearch} className="profiles-profile-side-bar__button">Voltar</button>
               </div>
          
               <ProfilesRepository login={login}/>
        </div>
    )
}

export default ProfilesProfile
