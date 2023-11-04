# React

Para correr el servidor de desarrollo:

```
npm run dev
```

## Docs

* Las *Props* son inmutables.

* Entre { } se intruducen sentencias que retornan un valor.

### Primer componente:

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

### Estilos en linea:

```jsx
<button style={{color: "#000099"}}>Seguir</button>
```

### Template literals (Template strings)

```jsx
const avatarSrcImage = `https://unavatar.io/${userName}`

<img className='followCard-avatar' src={avatarSrcImage} alt={`El avatar de ${userName}`} />
```

### Parametro Booleano:

```jsx
<>
    <FollowCard isFollowing={true} />
    <FollowCard isFollowing={false} />
    <FollowCard isFollowing />
</>
```

Por defecto es *True*.

### Elemento como parametro:

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

## children

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

### Callbacks:

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