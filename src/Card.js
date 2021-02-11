import React, { Component } from 'react'
import './Card.css'
function Card(props)  {
    
        const {eventName , location , date1 , date2} = props 
        
        return (
            
        <div className="card shadow2">
        <p className="time">{date1}-{date2}</p>
        <h4 className="title">{eventName}</h4>
        <p className="location">{location}</p>
        </div>
                
        )
    
}

export default Card


