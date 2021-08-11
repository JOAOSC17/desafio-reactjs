import React, { useEffect, useState } from 'react'
import api from 'Services/api';
import ProfilesRepository from './Repository/Repository';
import { IoPeopleSharp } from 'react-icons/io5'
import { BsHeart, BsStar } from 'react-icons/bs'
import { FaRegBuilding } from 'react-icons/fa'
import { FiMapPin, FiTwitter, FiLink } from 'react-icons/fi'
import { VscArrowSmallLeft } from 'react-icons/vsc'
import { GoMail } from 'react-icons/go'
import './Profile.css'
import { useHistory } from 'react-router-dom';
import ProfilesPagination from 'Components/Profile/Pagination/Pagination';
import { LIMITS_OF_PAGE } from './consts';

const ProfilesProfile = ({login}) => {
    const [profileSingle, setProfileSingle] = useState([])
    const [repositories, setRepositories]= useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const startIndex = ( page - 1 ) * LIMITS_OF_PAGE;
    const limitOfRepo = [...repositories].slice(startIndex, startIndex + LIMITS_OF_PAGE);
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
    },[]);
    function backToSearch(){
        history.push('/');
    }
    const pages = [...Array(totalPages).keys()];
    function nextPage(){
        if(page < pages.length){
            setPage(page+1);
        }else{

        }
    }
    function prevPage(){
        if(page > 1){
            setPage(page-1);
        }else if(page===1){
            
        }
    }
    console.log(page);
    useEffect(()=>{
              api
             .get(`/${login}/repos`)
             .then((response) => response.data).then((data)=>{
                const sorted = [...data].sort((a,b)=>{
                    return b.stargazers_count - a.stargazers_count
                });
                setRepositories(sorted);
                setTotalPages(Math.ceil(data.length / LIMITS_OF_PAGE));
             })
             .catch((err) => {
               console.error("ops! ocorreu um erro" + err);
             })
          // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
      if (!repositories){
        return <div className="profiles-repository__name">Loading...</div>
    }
    return (
        <div className="profiles-profile">
            <div className="profiles-profile-side-bar"> 
            <span onClick={backToSearch} className="profiles-profile__icon-back"><VscArrowSmallLeft/></span>
                <img className="profiles-profile-side-bar__image" src={profileSingle.avatar_url} alt={`Foto de ${profileSingle.name}`}/>
            <h1 className="profiles-profile-side-bar__name">{profileSingle.name} </h1>
           <span className="profiles-profile-side-bar__username">@{profileSingle.login}</span>
           <p className="profiles-profile-side-bar__bio">{profileSingle.bio}</p>
           <div className="profiles-profile-side-bar__info">
               <span><IoPeopleSharp/> {`${profileSingle.followers} followers`}</span>
               <span><BsHeart/> {`${profileSingle.following} following`}</span>
               <span><BsStar/> {`${profileSingle.starred_count} star`}</span>
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
              {limitOfRepo.map((repository, index) =>
             <ProfilesRepository login={login} page={page} key={index} repository={repository}/>
            )}
           {!repositories ?('') : (<ProfilesPagination data={[...repositories]} page={page} pages={pages} totalPages={totalPages} nextPage={nextPage} prevPage={prevPage} />)}
        </div>
    )
}

export default ProfilesProfile
