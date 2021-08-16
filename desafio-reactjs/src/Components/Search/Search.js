import ProfilesCard from 'Components/Card/Card'
import React, { useState }  from 'react'
import api from 'Services/api'
import {BiSearch} from 'react-icons/bi'
import './Search.css'
const ProfilesSearch = () => {
    const [profile, setProfile] = useState([]);
    const [search, setSearch] = useState('');
    const [fetch, setFetch] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    function onHandleChange (ev){
      setSearch(ev.target.value);
   }
   
  function afterSearch(){
    if(isLoading){
      return <span>Loading...</span>
    }else if(fetch && profile.length===0 && !isLoading){
      return <span>Not found</span>
    }
    else if(fetch && profile && !isLoading){
     return <ProfilesCard profile={profile} />
    }
  }
   async function onSubmit(ev){
      ev.preventDefault();
      setProfile([]);
      setFetch(false); 
      setIsLoading(true); 
      api
    .get(`/${search}`)
    .then(
      (response) =>{ 
        setProfile(response.data);
        setFetch(true); 
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err)
    });
    setSearch(''); 
    setIsLoading(false);
  } 
    return (
        <div className="profiles-search">
                <h1 className="profiles-search__title">Search Devs</h1>
            <form className="profiles-search-form" onSubmit={onSubmit}>
                <input 
                type="text" 
                autoComplete="off"
                className="profiles-search-form__input"
                placeholder="Type the username here..." value={search} name="search" onChange={onHandleChange} />
                <button  className="profiles-search-form__button" type="submit"><BiSearch className="profiles-search-form__button__search"/>Buscar</button>
                </form>
                {afterSearch()}
        </div>
    )
}

export default ProfilesSearch
