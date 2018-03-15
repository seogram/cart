import React from 'react'

export  const Image =({src})=>{
    return (
        <div className="image-container">
         <img src={src}           
        className="product-img"
        />
        </div>
       
    )
}