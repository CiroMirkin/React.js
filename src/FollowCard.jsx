import './FollowCard.css'

export function FollowCard({ formattedUserName, userName, name, isFollowing }) {
    const avatarSrcImage = `https://unavatar.io/${userName}`
    const avatarImageAlt = `El avatar de ${userName}`

    const text = isFollowing ? "Siguiendo" : "Seguir"
    
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
                <button className='followCard-button'>
                {text}
                </button>
            </aside>
        </article>
    )
}