import React from 'react'

function Card (props){
        
    return (
        <>
            <div className="card">
                <img src={props.data.imgsr} alt="" />
                <span className='cardheadingspan'> {props.data.heading} </span>
                <span className='cardquotespara'> {props.data.para}  </span> 
            </div>
        </>
    )
}

export default Card;
