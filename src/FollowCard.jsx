import { useState } from 'react'
import './FollowCard.css'

export function FollowCard({ formattedUserName, userName, name }) {
    const [ isFollowing, setIsFollowing ] = useState(false)

    const avatarSrcImage = `https://unavatar.io/${userName}`
    const avatarImageAlt = `El avatar de ${userName}`

    const text = isFollowing ? "Siguiendo" : "Seguir"
    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='followCard'>
            <header className='followCard-header'>
                <img className='followCard-avatar' src={avatarSrcImage} alt={avatarImageAlt} />
                <div className='followCard-info'>
                    <strong>{name}</strong>
                    <span className='followCard-infoUserName'>
                        {formattedUserName}
                    </span>
                </div>
            </header>

            <aside>
                <button className='followCard-button' onClick={handleClick}>
                {text}
                </button>
            </aside>
        </article>
    )
}