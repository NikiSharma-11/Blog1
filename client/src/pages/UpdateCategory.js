import React,{useEffect, useState} from 'react';
 import { useParams,useNavigate } from 'react-router-dom';
const UpdateCategory = () => {
    const navigate=useNavigate();
    const[name,setName]=useState('');
    const[error,setError]=useState('');
    const {id}=useParams();

    useEffect(()=>{
        const fetchCategory=async()=>{
            try{
                const url=`http://localhost:4001/api/displayCategory/${id}`;
                const response=await fetch(url);
                if(!response.ok){
                    throw new Error('Unable to fetch category')
                }
                const data=await response.json();
                setName(data.name);

            }catch(error){
                setError(error.message)
            }
        }
        fetchCategory();
    },[id])

    const handleUpdate=async(e)=>{
        e.preventDefault();
        const category={name};
        const url=`http://localhost:4001/api/updateCategory/${id}`;
        const response=await fetch(url,{
            method:'PATCH',
            body:JSON.stringify(category),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json=await response.json();
        if(!response.ok){
            setError(json.error)
        }
        else{
            setName('');
            navigate('/displayAllCategory')

        }
    }
  return (
    <>
    <div className='container'>
        <h2>Update Category</h2>
    <form onSubmit={handleUpdate}>
        <label>Name</label><br/>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/>
        <button className='btn btn-success my-3'>Update</button>
    </form>
    </div>
    {error && <div>{error}</div>}
   
    </>
  )
}

export default UpdateCategory;
