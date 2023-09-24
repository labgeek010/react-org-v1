import { useState } from "react"
import "./field.css"

const Field = (props) => {
    const modPH = `${props.placeholder}...`

    //destructuration

    const { type = "text" } = props

    console.log(type)

    const manageChange = (e) =>{
        props.updateValue(e.target.value)
    }

    return <div className={`field ${type}-field`}>
        <label>{props.title}</label>
        <input 
        placeholder={modPH} 
        required={props.required} 
        value={props.value}
        onChange={manageChange}
        type={type}
        />
    </div>
}

export default Field