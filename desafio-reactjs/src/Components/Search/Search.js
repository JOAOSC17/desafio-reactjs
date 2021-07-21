import ProfilesCard from 'Components/Card/Card'
import React, { useState }  from 'react'
import api from 'Services/api'
import {BiSearch} from 'react-icons/bi'
import './Search.css'
const ProfilesSearch = () => {
    const [profile, setProfile] = useState([]);
    const [search, setSearch] = useState(""); 
    
    function onSubmit(ev){
        ev.preventDefault();
        console.log(search);
        api
      .get(`/${search}`)
      .then((response) => setProfile(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
       setSearch('');
       clearInput();
    }
    function clearInput(){

    }
 /* useEffect(() => {
    api
      .get(`/users/${search}`)
      .then((response) => setProfile(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    
  }, []);*/

    return (
        <div className="profiles-search">
                <h1 className="profiles-search__title">Search Devs</h1>
            <form className="profiles-search-form" onSubmit={onSubmit}>
                <input 
                type="text" 
                autocomplete="off"
                className="profiles-search-form__input"
                placeholder="Type the username here..." value={search} onChange={(ev)=> setSearch(ev.target.value)}/>
                <button className="profiles-search-form__button" type="submit"><BiSearch className="profiles-search-form__button__search"/>Buscar</button>
                </form>
                <ProfilesCard profile={profile}/>
         
        </div>
    )
}

export default ProfilesSearch
