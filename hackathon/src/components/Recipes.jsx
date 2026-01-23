import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Recipes = () => {
    const {id}=useParams()
    const [recipeid,setrecipeid]=useState([])
    const idrecipe=async()=>{
        const response=await axios.get(`https://dummyjson.com/recipes/${id}`)
        setrecipeid(response.data)
        
        
    }
    useEffect(()=>{
        idrecipe()
    },[])
    console.log(recipeid)
  return (
   <>
   <h1>{recipeid.name}</h1>
    <img src={recipeid.image} alt=""  width="10%"/>
    <p>{recipeid.rating}
    </p>
   </>
  )
}

export default Recipes