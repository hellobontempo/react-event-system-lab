// Code Keypad Component Here
import React from 'react'


export default class Keypad extends React.Component {

    render(){
        return (
            <input onKeyUp={this.typing} type="password" />
        )

    }

    typing(){
        console.log("Entering password...")
    }
}