import React, { useEffect, useState } from 'react'
import api from 'Services/api';
import './Repository.css'
const ProfilesRepository = ({login}) => {
    const [repository, repositoryInfo]= useState();

    useEffect(()=>{
      
          console.log(login)
              api
             .get(`/${login}/repos`)
             .then((response) => {
                 console.log(response.data);
                 repositoryInfo(response.data);
              })
             .catch((err) => {
               console.error("ops! ocorreu um erro" + err);
             })
          // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
      if (!repository){
          return <div>Carregando...</div>
      }
    return (
          <div> 
         <h4>{repository[0].name}</h4>
                         
      <p>{(repository[0].description!==null)?(`${repository.description}`) :('No description, website, or topics provided')}</p>
                <div>
                 <span>stars</span>
                 <span>Updated n days ago</span>
                 </div>
                 
     </div>
    )
}

        

                    

export default ProfilesRepository
