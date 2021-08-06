import ProfilesCard from 'Components/Card/Card'
import React, { useState }  from 'react'
import api from 'Services/api'
import {BiSearch} from 'react-icons/bi'
import './Search.css'
const ProfilesSearch = () => {
    const [profile, setProfile] = useState([]);
    const [search, setSearch] = useState('');
    const [fetch, setFetch] = useState(false);
    function onHandleChange (ev){
      setSearch(ev.target.value);
   }
   async function onSubmit(ev){
      ev.preventDefault();
      api
    .get(`/${search}`)
    .then(
      (response) =>{ 
        setProfile(response.data)
        setFetch(true);
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err)
    });
    setSearch('');   
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
         {fetch && profile &&(<ProfilesCard profile={profile} />)}
        </div>
    )
}

export default ProfilesSearch
