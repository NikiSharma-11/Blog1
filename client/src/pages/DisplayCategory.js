import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

 const DisplayCategory = () => {
  const navigate=useNavigate();
    const[categories, setCategories]=useState([]);
    useEffect(() => {
        const fetchCategory = async () => {
            const url = "http://localhost:4001/api/displayAllCategory";
            const response = await fetch(url);
            const data = await response.json();
            if(response.ok){
              setCategories(data)
            }
        }      
        fetchCategory();
      }, []);

      const handleDelete=async(_id)=>{
        try{
          const url=`http://localhost:4001/api/deleteCategory/${_id}`;
          const response=await fetch(url,{
            method:'Delete'
          })
          if(response.ok){
            setCategories(prevCategory=>prevCategory.filter(category=>category._id!==_id))
          }

        }catch(error){
          console.log(error);
        }
        
      }

      const handleUpdate=(id)=>{
        navigate(`/updateCategory/${id}`);
        
      }

  return (
    <>
<div className="container">
<table className="table">
                <thead>
                        <tr>
                        <th scope="col"> Category</th>
                        <th scope="col"> Action</th>
                        </tr>
                    </thead>  
            {
                categories.map((category) => (
                    <tbody key={category._id}>
                        <tr>
                        <td>{ category.name}</td>
                        <td><button className="btn btn-danger" onClick={()=>handleDelete(category._id)}>Delete</button></td>
                        <td><button className="btn btn-primary" onClick={()=>handleUpdate(category._id)}>Update</button></td>
                        </tr>
                    </tbody>
                   
             ))
        }
         </table>
        </div>
      
    </>
  )
}

export default DisplayCategory;