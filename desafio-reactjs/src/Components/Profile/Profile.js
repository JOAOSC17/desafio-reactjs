import React, { useEffect, useState } from 'react'
import api from 'Services/api';
import ProfilesRepository from './Repository/Repository';
import { IoPeopleSharp } from 'react-icons/io5'
import { BsHeart } from 'react-icons/bs'
import { FiMapPin, FiTwitter, FiLink } from 'react-icons/fi'
import { VscArrowSmallLeft } from 'react-icons/vsc'
import './Profile.css'
import { useHistory } from 'react-router-dom';
import ProfilesPagination from 'Components/Profile/Pagination/Pagination';

const ProfilesProfile = ({login}) => {
    const [profileSingle, setProfileSingle] = useState([])
    const [repositories, setRepositories]= useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const limitsOfPage = 5;
    const startIndex = ( page - 1 ) * limitsOfPage;
    const limitOfRepo = [...repositories].slice(startIndex, startIndex + limitsOfPage);
    const history = useHistory();
        
    useEffect(()=>{
        api
       .get(`/${login}`)
       .then((response) => {
           setProfileSingle(response.data)
        })
       .catch((err) => {
         console.error("ops! ocorreu um erro" + err);
       })
       
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[login]);
    function backToSearch(){
        history.push('/');
    }
    function nextPage(){
        if(page < totalPages){
            setPage(page+1);
        }
    }
    function prevPage(){
        if(page > 1){
            setPage(page-1);
        }
    }
    useEffect(()=>{
              api
             .get(`/${login}/repos`)
             .then((response) => response.data).then((data)=>{
                const sorted = [...data].sort((a,b)=>{
                    return b.stargazers_count - a.stargazers_count
                });
                setRepositories(sorted);
                setTotalPages(Math.ceil(data.length / limitsOfPage));
             })
             .catch((err) => {
               console.error("ops! ocorreu um erro" + err);
             })
          // eslint-disable-next-line react-hooks/exhaustive-deps
      },[login])
      if (!repositories || !login){
        return <div className="profiles-repository__name">Loading...</div>
    }
    return (
        <div className="profiles-profile">
            <div className="profiles-profile-side-bar"> 
            <span onClick={backToSearch} className="profiles-profile__icon-back"><VscArrowSmallLeft/></span>
                <img className="profiles-profile-side-bar__image" src={profileSingle.avatar_url} alt={`Foto de ${profileSingle.name}`}/>
            <h1 className="profiles-profile-side-bar__name">{profileSingle.name} </h1>
           <span className="profiles-profile-side-bar__username"><a href={`https://github.com/${login}`}>@{profileSingle.login}</a></span>
           <p className="profiles-profile-side-bar__bio">{profileSingle.bio}</p>
           <div className="profiles-profile-side-bar__info">
               <span><IoPeopleSharp/> {`${profileSingle.followers} followers`}</span>
               <span><BsHeart/> {`${profileSingle.following} following`}</span>
               </div> 
               <div className="profiles-profile-side-bar__connect">
                   <span><FiMapPin className="icons-connect"/>{(profileSingle.location!==null)?(`${profileSingle.location}`) :('Location')}</span>
                   <span><FiLink className="icons-connect"/><a target="_blank" rel="noreferrer" href={`https://${profileSingle.blog}`}>{(profileSingle.blog!=='')?(`${profileSingle.blog}`) :('mywebsite.com')}</a></span>
                   <span><FiTwitter className="icons-connect"/><a target="_blank" rel="noreferrer" href={`https://twitter.com/${profileSingle.twitter_username}`}>@{(profileSingle.twitter_username!==null)?(`${profileSingle.twitter_username}`) :('myTwitter')}</a></span>
               </div>
               <button  onClick={backToSearch} className="profiles-profile-side-bar__button">Voltar</button>
               </div>
              {limitOfRepo.map((repository, index) =>
             <ProfilesRepository login={login} page={page} key={index} repository={repository}/>
            )}
           {!repositories ?('') : (<ProfilesPagination data={[...repositories]} page={page} totalPages={totalPages} nextPage={nextPage} prevPage={prevPage} />)}
        </div>
    )
}

export default ProfilesProfile
