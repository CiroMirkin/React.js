# React

Para correr el servidor de desarrollo:

```
npm run dev
```

El servidor esta en el puerto [5173](http://localhost:5173/).

## Docs

* Las *Props* deberian ser inmutables, es una buena practica.

* Entre { } se intruducen sentencias que retornan un valor.

* Un componente retorna un elemento, React renderiza un elemento no un componente.

### Primer componente

```jsx
const IconButton = ({text}) => {
  return (
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
      </svg>
      {text}
    </button>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <IconButton text="iwi" />
    <IconButton text="owo"></IconButton>
  </React.Fragment>
)
```

### Comentarios en JSX

```jsx
<>
    {/* Comentario */}
</>
```

### Estilos en linea

```jsx
<button style={{color: "#000099"}}>Seguir</button>
```

### Template literals (Template strings)

```jsx
const avatarSrcImage = `https://unavatar.io/${userName}`

<img className='followCard-avatar' src={avatarSrcImage} alt={`El avatar de ${userName}`} />
```

### Parametro Booleano

```jsx
<>
    <FollowCard isFollowing={true} />
    <FollowCard isFollowing={false} />
    <FollowCard isFollowing />
</>
```

Por defecto es *True*.

### Elemento como parametro

```jsx
function App() {
    const formattedUserName = () => (<span>@react</span>)

    return (
        <FollowCard formattedUserName={formattedUserName} userName="react" />
    )
}
```

```jsx
export function FollowCard({ formatUserName, userName }) {
    return (
        <div className='followCard-info'>
            <span className='followCard-infoUserName'>
                {formatUserName}
            </span>
        </div>
    )
}
```

### Parametro por defecto

```jsx
export function FollowCard({ name="No hay un nombre" }) {
    return (
        <strong>{name}</strong>
    )
}
```

### children

* Es una pabra reservada.

*children* es el contenido de un elemento, todo lo que esta dentro.

```jsx
<FollowCard>OwO</FollowCard>
```
```jsx
export function FollowCard({ children }) {
    return (
        <strong>{children}</strong>
    )
}
```

### Callbacks

```jsx
function App() {
    const formatUserName = (userName) => `@${userName}`

    return (
        <FollowCard formatUserName={formatUserName} userName="react" />
    )
}
```

```jsx
export function FollowCard({ formatUserName, userName }) {
    return (
        <span className='followCard-infoUserName'>{formatUserName(userName)}</span>
    )
}
```

### Renderizar una lista de elementos

```jsx
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
```

* Usar como *key* el index de un elemento solo si sabes que ese inde no va a cambiar, osea que el elemento siempre estara en el mismo sitio. <br>
Un *uuid* solo tiene sentido si se han establecido anteriormente, cada vez que se renderizen deben ser los mismos id.

```jsx
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
```

### useState - Estado interno en un componente

```jsx
import { useState } from 'react'

export function FollowCard(props) {
    const [ isFollowing, setIsFollowing ] = useState(false)

    const text = isFollowing ? "Siguiendo" : "Seguir"
    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <button className='followCard-button' onClick={handleClick}>
            {text}
        </button>
    )
}
```

**Puedes** inicializar un *state* con un *prop*, no se pueden llamar igual y es por eso que se suele usar el prefijo *initial* (inicial).

* Un estado en el padre se pasa como prop a un hijo y el hijo lo usa para inicializar su propio estado. <br>
    Al cambiar el estado en el padre no va a cambiar el estado en el hijo, **los estados se inicializan una sola vez**. 

```jsx
import { useState } from 'react'

export function FollowCard({ initialIsFollowing}) {
    const [ isFollowing, setIsFollowing ] = useState(initialIsFollowing)

    const text = isFollowing ? "Siguiendo" : "Seguir"
    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <button className='followCard-button' onClick={handleClick}>
            {text}
        </button>
    )
}
```