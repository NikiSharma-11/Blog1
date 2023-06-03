import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const navigate=useNavigate();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[error,setError]=useState('');

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const userData={email,password};
        const url="http://localhost:4001/api/logIn"
        const response=await fetch(url,{
            method:'POST',
            body:JSON.stringify(userData),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json=await response.json();
        if(!response.ok){
            setError(json.msg)
        }else{
            localStorage.setItem('token',json.accessToken);
            setEmail('');
            setPassword('');
            navigate('/');
            alert("Logged in successfully");
        }
    }


  return (
    <>
   <div className="container">
            <h1>Login form</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label><br />
                <input type="text" onChange={(e)=>{setEmail(e.target.value)}} value={email}/><br />
                <label>Password</label><br />
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password}/><br />
                <button className="btn btn-primary my-3">Login</button>
            </form>
            {error && <div>{error}</div>}

        </div>
    
    </>
  )
}
 export default LogIn;