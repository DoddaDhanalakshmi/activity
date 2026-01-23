import React, { useContext } from 'react'
import { Recipescontext } from '../main'
import { Link } from 'react-router-dom'

const Products = () => {
    const data=useContext(Recipescontext)
  return (
    <>
    
        {data.map(each=>(
            <div>
                <h1>{each.name}</h1>
               <Link to={`/recipes/${each.id}`}> <img src={each.image} alt="" width="10%" /></Link>
            </div>
        ))}
    
    </>
  )
}

export default Products