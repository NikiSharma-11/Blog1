import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

 const AddBlog = () => {
    const[title,setTitle]=useState('');
    const[slugData,setSlugData]=useState('');
    const[image,setImage]=useState(null);
    const[description,setDescription]=useState('');
    const[categoryData,setCategory]=useState('');
    const[error,setError]=useState('');
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const token=localStorage.getItem('token');
        const formData=new FormData();

        const slug=slugData.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/-+/g, '-');
        formData.append('image',image);
        formData.append('title',title);
        formData.append('slug',slug);
        formData.append('description',description);
        formData.append('categoryData',categoryData);
        formData.append('user',token);
        const url="http://localhost:4001/api/createBlog";
        const response=await fetch(url,{
            method:'POST',
            body:formData
        });
        const json=await response.json();
        if(!response.ok){
            console.log(error);
            setError(json.error);
        }
        else{
            setTitle('');
            setSlugData('');
            setImage('null');
            setDescription('');
            setCategory('');
            navigate('/')
            alert('Blog added successfully');
        }
        }
  return (
    <>
    <div className="container">
      <h1>Add Blog</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label><br/>
        <input type="text" onChange={(e)=>{setTitle(e.target.value)}} value={title}/><br/>
        <label>Slug</label><br/>
        <input type="text" onChange={(e)=>{setSlugData(e.target.value)}} value={slugData}/><br/>
        <label>Image</label><br/>
        <input type="file" onChange={(e)=>{setImage(e.target.files[0])}}/><br/>
        <label>Description</label><br/>
        <textarea rows={"7"} cols={"50"} onChange={(e)=>{setDescription(e.target.value)}} value={description}/><br/>
        <label>Category</label><br/>
        <select onChange={(e) => setCategory(e.target.value)} value={categoryData}>
        <option value="">Select a category</option>
        <option value="Technology">Technology</option>
        <option value="Nepali">Nepali</option>
        <option value="Entertainment">Entertainment</option>
    
</select>
<br/> 
        
        <button className="btn btn-success my-3">Submit</button>
      </form>
    </div>
    {error && <div>{error}</div>}
    </>
  )
}
export default AddBlog;