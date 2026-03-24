
const UserGreeting = props => {

    const username = props.username || 'Guest';
    const isLoggedIn = props.isLoggedIn || false;

    const welcomeGreet = <h2 style={{
        backgroundColor: 'yellow',
        textAlign: 'center'
    }}>Welcome {username}</h2>

    const loginGreet = <h2 style={{
        backgroundColor: 'red',
        textAlign: 'center',
        color: 'white'
    }}>Please log in to access</h2>

    return (isLoggedIn ? welcomeGreet : loginGreet)
}

export default UserGreeting
