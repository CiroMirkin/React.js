import './App.css'
import { FollowCard } from './FollowCard'

function App() {
    const formattedUserName = (userName) => <span>@{userName}</span>

    return (
        <>
            <section className='followCardContainer'>
                <FollowCard formattedUserName={formattedUserName("react")} userName="react" name="React.js" />
                <FollowCard formattedUserName={formattedUserName("midudev")} userName="midudev" name="Miguel Ángel Duran"  />
                <FollowCard formattedUserName={formattedUserName("freecodecamp")} userName="freecodecamp" name="Free Code Camp"  />
            </section>
        </>
    )
}

export default App
