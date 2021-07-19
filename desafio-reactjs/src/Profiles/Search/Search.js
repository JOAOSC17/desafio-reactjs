import ProfilesCard from 'Profiles/Card/Card'
import React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom'
import api from 'Services/api'
import {BiSearch} from 'react-icons/bi'
const ProfilesSearch = () => {
    const [profile, setProfile] = useState([]);
    const [search, setSearch] = useState(""); 
    
    function onSubmit(ev){
        ev.preventDefault();
        console.log(search);
        api
      .get(`/users/${search}`)
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
            <header className="profiles-search__header">
                <h1>Search Devs</h1>
            </header>
            <form onSubmit={onSubmit}>
                <input 
                type="search" 
                className="profiles-search__input"
                placeholder="Type the username here..." value={search} onChange={(ev)=> setSearch(ev.target.value)}/>
                <button type="submit"><BiSearch/>Buscar</button>
                </form>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/profile" ><ProfilesCard profile={profile}/></Link>  
         
        </div>
    )
}

export default ProfilesSearch
