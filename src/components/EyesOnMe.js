// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component {

    render (){
        return (
            <button onFocus={this.handleFocus} onBlur={this.handleBlur}>BUTTON</button>
        )
    }
    
    handleFocus (){
        console.log("Good!")
    }

    handleBlur (){
        console.log("Hey! Eyes on me!")
    }
}

