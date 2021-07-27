import React from 'react'
import './Repository.css'
import { BsFillCircleFill, BsStar } from 'react-icons/bs'

const ProfilesRepository = ({repository}) => {
    return ( 
            <div className="profiles-repository">
              <a className="profiles-repository__link" href={`https://github.com/${repository.full_name}`} rel="noreferrer"  target='_blank'>
         <h4 className="profiles-repository__name">{repository.name}</h4>
                         
      <p className="profiles-repository__description">{(repository.description!==null)?(`${repository.description}`) :('No description, website, or topics provided')}</p>
                <div className="profiles-repository-info">
                <span><BsStar/> {(repository.stargazers_count < 2 )?  (`${repository.stargazers_count} star`) : (`${repository.stargazers_count} stars`) }</span>
                  <span><BsFillCircleFill/> Updated n days ago</span>
                 </div>
     </a>
     </div>
    )
}

        

                    

export default ProfilesRepository
