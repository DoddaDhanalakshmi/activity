import React, { useEffect, useState } from 'react'
import { Spinner } from './Customspinner'
import axios from 'axios'
import Products from './Products'
import { Recipescontext } from '../main'
const Datafetch = () => {
   
    const [data,setdata]=useState([])
    const api=async()=>{
        try{
           const response= await axios.get("https://dummyjson.com/recipes")
           setdata(response.data.recipes)

        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        api()
    },[])
  return (
   <>
   {data.length>0?<Recipescontext.Provider value={data}>
    <Products/>
   </Recipescontext.Provider>:<Spinner/>}
   </>
  )
}

export default Datafetch
