import { useState } from 'react'

const Signup = ()=>{
    const[email, setEmail]  = useState('')
    const[username, setUsername]  = useState('')
    const[password, setPassword]  = useState('')


    const handleSubmit = async (e) =>{
        e.preventDefault()
        setEmail("")
        setPassword("")
        setUsername("")
    }
    return(
        <form  className='signup' onSubmit={handleSubmit} >
            <h3>Sign Up</h3>
            <label>Email:</label>
            <input
                type='email'
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="Email"
                autocomplete="off"
                value={email}
            />
            <label>Username:</label>
            <input
                type='text'
                onChange={(e)=> setUsername(e.target.value)}
                placeholder="Username"
                autocomplete="off"
                value={username}
            />
            <label>Password:</label>
            <input
                type='password'
                onChange={(e)=> setPassword(e.target.value)}
                placeholder="Password"
                autocomplete="off"
                value={password}
            />
                <button>Sign Up</button>
        </form>
    )
}

export default Signup