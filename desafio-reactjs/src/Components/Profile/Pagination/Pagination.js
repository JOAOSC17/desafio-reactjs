import React from 'react'
import './Pagination.css'
const ProfilesPagination = ({data, page, pages, totalPages, prevPage, nextPage}) => {
    
    if(!data){
        return <span></span>
    }
    return (
        <div className="profiles-pagination">
        <button type="button" className={(page > 1)?` profiles-pagination__prev ` : ('profiles-pagination__prev disable ')} onClick={()=>prevPage()}>Prev</button>
        <span className="profiles-pagination__line">.</span>
        <button type="button" className={(page < pages.length)?` profiles-pagination__prev ` : ('profiles-pagination__prev disable ')} onClick={()=>nextPage()}>Next</button>
        </div>
    )
}

export default ProfilesPagination
