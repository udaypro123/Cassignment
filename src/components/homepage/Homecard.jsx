import React from 'react'

function Homecard (props){
        
    return (
        <>
            <div className="homecard">
                <img src={props.data.imgsr} alt="" />
                <span className='cardheadingspan'> {props.data.heading} </span>
                <span className='cardquotespara'> {props.data.para}  </span> 
            </div>
        </>
    )
}
export default Homecard
