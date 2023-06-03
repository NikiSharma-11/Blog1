
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'; 

 const SignUp = () => {
    const navigate=useNavigate();
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[error,setError]=useState('');

    const handleSubmit=async(e)=>{
    e.preventDefault();
    const userData={name,email,password};
    const url="http://localhost:4001/api/signUp";
    const response=await fetch(url,{
        method:'POST',
        body:JSON.stringify(userData),
        headers:{
        'Content-Type':'application/json'
        }
    });
    const json=await response.json();
    if(!response.ok){
        console.log(error);
        setError(json.error);
    }
    else{
        setName('');
        setEmail('');
        setPassword('');
        navigate('/login')
        alert("Signup successfully");
    }
    }
  return (
    <>
    <div className="container">
      <h1>SignUp form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label><br/>
        <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name}/><br/>
        <label>Email</label><br/>
        <input type="text"onChange={(e)=>{setEmail(e.target.value)}} value={email}/><br/>
        <label>Passowrd</label><br/>
        <input type="password"onChange={(e)=>{setPassword(e.target.value)}} value={password}/><br/>
        <button className="btn btn-success my-3">Submit</button>
      </form>
    </div>
    {error && <div>{error}</div>}
    </>
  )
}

export default SignUp;
