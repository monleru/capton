import React, {useEffect, useState} from 'react';
import './style.css'

const Admin = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('')
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [login, setLogin] = useState(false)
    const clickLogin = (inpLogin:string, inpPassword:string) =>{
        fetch("http://localhost:5000/api/login",
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({login: inpLogin   , password: inpPassword})
            })
            .then(data => data.json()).then(data => setToken(data))
            .catch(data => {
                console.log(data)
            })
    }

    if ( token != null) {
        fetch("http://localhost:5000/api/getToken",
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({token: token})
            })
            .then(data => data.json()).then(data => setLogin(data))
            .catch(function(res){ console.log(res) })
    }
    return (
        <div>
            { login ?
            <div>

            </div>
            :
                <div className="login_div">
                    <form action="" onSubmit={(e) => {e.preventDefault() ; clickLogin(name, password)}}>
                        <input value={name} onChange={(e) => (setName(e.target.value))} placeholder="Login" type="text"/>
                        <input value={password} onChange={(e) => (setPassword(e.target.value))} placeholder="Password" type="password"/>
                        <button>Login</button>
                    </form>
                </div>
            }
        </div>
    );
};

export default Admin;