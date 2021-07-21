import React, { useEffect, useState } from 'react'
import api from 'Services/api';
import ProfilesRepository from './Repository/Repository';

const ProfilesProfile = ({login}) => {
    const [profileSingle, setProfileSingle] = useState([])
        
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
    return (
        <div>
            <div> 
                <img src={profileSingle.avatar_url} alt={`Foto de ${profileSingle.name}`}/>
            <h1>{profileSingle.name}</h1>
           <span>@{profileSingle.login}</span>
           <p>{profileSingle.bio}</p>
           <div>
               <span>{`${profileSingle.followers}followers`}</span>
               <span>{`${profileSingle.following}following`}</span>
               <span>{`${profileSingle.starred_url}`}stars</span>
               </div> 
               <div>
                   <span>{(profileSingle.organizations_url!==undefined)?(`${profileSingle.organizations_url}`) :('')}</span>
                   <span>{(profileSingle.location!==null)?(`${profileSingle.location}`) :('')}</span>
                   <span>{(profileSingle.email!==null)?(`${profileSingle.email}`) :('')}</span>
                   <span>{(profileSingle.blog!=='')?(`${profileSingle.blog}`) :('www.mywebsite.com')}</span>
                   <span>@{(profileSingle.twitter_username!==null)?(`${profileSingle.twitter_username}`) :('myTwitter')}</span>
               </div>
               <button>Voltar</button>
               </div>
              <ProfilesRepository login={login}/>
          
        </div>
    )
}

export default ProfilesProfile
