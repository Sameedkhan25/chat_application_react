import React,{useState} from 'react'
import axios from 'axios'

const LoginForm = () => {
const projectID="0beb72cb-a5d6-4dba-955d-13c6556c7ef4"
const [userName, setUserName] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')

const handleSubmit = async (e)=>{
    e.preventDefault()
     
    const authObject ={
        'Project-ID':projectID,
        'User-Name':userName,
        'User-Secret':password,
    }
    try {
       await axios.get( 'https://api.chatengine.io/chats',{
            headers: authObject
        })

        localStorage.setItem('userName',userName)
        localStorage.setItem('password',password)
        window.location.reload()
    } catch (error) {
        console.log("error",error)
        setError("invald credentials")
    }

}

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text" 
                            value={userName}
                            placeholder="User Name"
                            onChange={(e)=>setUserName(e.target.value)}
                            className="input"
                            required
                        />
                         <input
                            type="text" 
                            value={password}
                            placeholder="Password"
                            onChange={(e)=>setPassword(e.target.value)}
                            className="input"
                            required
                        />
                        <div align="center">
                            <button type="submit"
                            className="button"
                            >
                            <span>sing in</span>
                            </button>
                        </div>
                    </form>
                    <h3>{error}</h3>
                </h1>
            </div>
        </div>
    )
}

export default LoginForm
