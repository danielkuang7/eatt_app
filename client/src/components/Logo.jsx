import React from 'react'
import logoimage from '../images/cook7.jpg'

function Logo(){
    return (
        <div className="logo">
           <img src={logoimage} alt="" className="logo__image"/>
        </div>
    )
}
export default Logo