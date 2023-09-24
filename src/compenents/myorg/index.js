import { useState } from "react"
import "./myorg.css"

const MyOrg = (props) => {

    //Status - Hooks
    //useState
    // const [variableName,functionUpdates] = useState (initialValue)
    
    
    const [show, updateDisplay] = useState(true)

    const manageClick = () => {
        console.log("Show-Hide element", !show)
        updateDisplay(!show)
    }

    return <section className="org-section">
        <h3 className="title">My Organization </h3>
        <img src="/img/add.png" alt="add" onClick={props.changeDisplay}/>
    </section>
}

export default MyOrg