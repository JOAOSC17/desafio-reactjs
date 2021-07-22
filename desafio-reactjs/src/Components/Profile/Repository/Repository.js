import React, { useEffect, useState } from 'react'
import api from 'Services/api';
import './Repository.css'
import { BsFillCircleFill, BsStar } from 'react-icons/bs'
import { Link } from 'react-router-dom';
function showDate(dateString, daysMonthsYears){
    const dateToShow = new Date(dateString);
    if(!dateString || !dateToShow.getTime()) return '';
    const { days, months, years} = daysMonthsYears;
    if (days) dateToShow.setDate(dateToShow.getDate() + days);
    if (months) dateToShow.setMonth(dateToShow.getMonth() + months);
    if (years) dateToShow.setFullYear(dateToShow.getFullYear() + years);
    return dateToShow.toLocaleDateString();
}
const ProfilesRepository = ({login, repository}) => {
    const [ date, setDate ] = useState('');
    const [ daysMonthsYears, setDaysMonthsYears ] = useState({
        days:0,
        month:0,
        years:0,
    });
    return ( 
            <div className="profiles-repository">
              <a className="profiles-repository__link" href={`https://github.com/${repository.full_name}`} rel="noreferrer"  target='_blank'>
         <h4 className="profiles-repository__name">{repository.name}</h4>
                         
      <p className="profiles-repository__description">{(repository.description!==null)?(`${repository.description}`) :('No description, website, or topics provided')}loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet, augue et rutrum varius, orci nunc mollis leo, quis mollis risus erat in leo. Vivamus nec mauris quis ipsum mollis sollicitudin. Nullam et commodo elit. Mauris porta blandit urna, mattis blandit ante elementum sit amet. Quisque malesuada, enim molestie blandit vulputate, purus augue luctus turpis, vitae lacinia risus metus at nisl. Fusce aliquam sodales est a placerat. Fusce ultrices, elit vel ornare posuere, orci lorem tempus neque, et porta justo neque eget lorem. Mauris molestie feugiat pharetra.

Suspendisse sit amet magna mi. Etiam interdum massa leo, non iaculis ex sagittis non. Aenean facilisis lorem in ullamcorper consequat. Donec quis nisl ut magna hendrerit feugiat ac tincidunt ipsum. Nunc nec nunc eget odio lacinia cursus. Vestibulum eu luctus enim. Maecenas id ultricies libero. Nullam vel turpis suscipit, gravida elit quis, consequat quam. Nulla mattis enim eu consectetur volutpat. Phasellus pretium, urna eget maximus condimentum, erat eros egestas nibh, a sodales mi ex vitae leo. Curabitur nisi neque, tristique non est sit amet, pellentesque tristique neque.

Donec a pulvinar est. Vivamus et venenatis felis, sed sodales enim. Nulla hendrerit rutrum diam, </p>
                <div className="profiles-repository-info">
                 <span><BsStar/> {`${repository.star} stars`}</span>
                 <span><BsFillCircleFill/> Updated n days ago</span>
                 </div>
     </a>
     </div>
    )
}

        

                    

export default ProfilesRepository
