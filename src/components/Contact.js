import React from 'react'

const Contact = (props) =>{
    const {name, heroName} = props
    // console.log(props)
    return(
        <div>
            <h1> 
                Hello {name} a.k.a {heroName} 
            </h1>
            {/* {props.children } */}
        </div>
        
    ) 
}

export default Contact