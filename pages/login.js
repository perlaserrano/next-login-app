 import { useState } from "react";
 import axios from "axios";
 
 function LoginPage() {
  const [credentials, setCredentials] = useState({
    email:'',
    password:''

    
})

    const handleChange = (e) => {
     setCredentials({
     ...credentials,
     [e.target.name]: e.target.value  
     })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(credentials);

        const response = await axios.post('/api/auth/login', credentials)
        console.log(response);
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input name="email" onChange={handleChange} type={"email"} placeholder={"email"}/>
                <input name="password" onChange={handleChange} type={"password"} placeholder={"password"}/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginPage