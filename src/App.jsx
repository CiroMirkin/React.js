import './App.css'
import { FollowCard } from './FollowCard'

function App() {
    const formattedUserName = (userName) => <span>@{userName}</span>

    const users = [
        {
            userName: "react",
            name: "React.js"
        },
        {
            userName: "midudev",
            name: "Miguel Ángel Duran"
        },
        {
            userName:"freecodecamp",
            name:"Free Code Camp"
        }
    ]

    return (
        <>
            <section className='followCardContainer'>
                {
                    users.map(({ userName, name }) => (
                        <FollowCard 
                            key={userName} 
                            formattedUserName={formattedUserName(userName)} 
                            userName={userName} 
                            name={name}  
                        />
                    ))
                }
            </section>
        </>
    )
}

export default App
