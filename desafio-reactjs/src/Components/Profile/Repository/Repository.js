import React, { useEffect } from 'react'
import './Repository.css'
import { BsFillCircleFill, BsStar } from 'react-icons/bs'

const ProfilesRepository = ({repository}) => {
      const dateOne = new Date();
      const dateTwo = new Date(repository.updated_at);
      const timeDiff = Math.abs(dateTwo.getTime() - dateOne.getTime());
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
      console.log(diffDays);
    return ( 
            <div className="profiles-repository">
              <a className="profiles-repository__link" href={`https://github.com/${repository.full_name}`} rel="noreferrer"  target='_blank'>
         <h4 className="profiles-repository__name">{repository.name}</h4>
                         
      <p className="profiles-repository__description">{(repository.description!==null)?(`${repository.description}`) :('No description, website, or topics provided')}</p>
                <div className="profiles-repository-info">
                <span><BsStar/> {(repository.stargazers_count < 2 )?  (`${repository.stargazers_count} star`) : (`${repository.stargazers_count} stars`) }</span>
                  <span><BsFillCircleFill/> {`Updated ${diffDays} days ago`}</span>
                 </div>
     </a>
     </div>
    )
}

        

                    

export default ProfilesRepository
