import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

 const AddCategory = () => {
    const[name, setName]=useState('');
    const navigate=useNavigate();
    const[error, setError]=useState('');

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const userData={name};
        const url="http://localhost:4001/api/addCategory";
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
            navigate('/displayAllCategory')
        }
        }
  return (
    <>
    <div className="container">
      <h1>Add Category</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label><br/>
        <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name}/><br/>
        <button className="btn btn-success my-3">Submit</button>
      </form>
    </div>
    {error && <div>{error}</div>}
    </>
    
  )
}

export default AddCategory;