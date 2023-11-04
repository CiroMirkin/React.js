import './App.css'
import { FollowCard } from './FollowCard'

function App() {
    const formattedUserName = (userName) => <span>@{userName}</span>

    return (
        <>
            <section className='followCardContainer'>
                <FollowCard formattedUserName={formattedUserName("react")} isFollowing={true} userName="react" name="React.js" />
                <FollowCard formattedUserName={formattedUserName("midudev")} isFollowing={false} userName="midudev" name="Miguel Ángel Duran"  />
                <FollowCard formattedUserName={formattedUserName("freecodecamp")} isFollowing userName="freecodecamp" name="Free Code Camp"  />
            </section>
        </>
    )
}

export default App
