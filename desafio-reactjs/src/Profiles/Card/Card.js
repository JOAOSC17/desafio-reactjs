import React from 'react'
import './Card.css'
const ProfilesCard = () => {
    const api= {
        "login": "JOAOSC17",
        "id": 77072063,
        "node_id": "MDQ6VXNlcjc3MDcyMDYz",
        "avatar_url": "https://avatars.githubusercontent.com/u/77072063?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/JOAOSC17",
        "html_url": "https://github.com/JOAOSC17",
        "followers_url": "https://api.github.com/users/JOAOSC17/followers",
        "following_url": "https://api.github.com/users/JOAOSC17/following{/other_user}",
        "gists_url": "https://api.github.com/users/JOAOSC17/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/JOAOSC17/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/JOAOSC17/subscriptions",
        "organizations_url": "https://api.github.com/users/JOAOSC17/orgs",
        "repos_url": "https://api.github.com/users/JOAOSC17/repos",
        "events_url": "https://api.github.com/users/JOAOSC17/events{/privacy}",
        "received_events_url": "https://api.github.com/users/JOAOSC17/received_events",
        "type": "User",
        "site_admin": false,
        "name": "João Costa",
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": true,
        "bio": "Desenvolvedor Web Front-End.\r\nEm constante aprendizado.",
        "twitter_username": null,
        "public_repos": 23,
        "public_gists": 0,
        "followers": 1,
        "following": 2,
        "created_at": "2021-01-06T18:12:18Z",
        "updated_at": "2021-07-19T12:36:11Z"
      };
    return (
        <div className="profiles-card">
            <img className="profiles-card__image" src={api.avatar_url} alt={`Foto de ${api.name}`}/>
            <div className="profiles-card__text">
            <h1 className="profiles-card__text__title">{api.name}</h1>
            <p className="profiles-card__text__bio">{api.bio}</p>
            </div>
        </div>
    )
}

export default ProfilesCard
