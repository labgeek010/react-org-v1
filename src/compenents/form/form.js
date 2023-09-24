import { useState } from "react"
import "./form.css"
import Field from '../field'
import OptionsList from "../optionslist"
import Button from "../button"


const Form = (props) => {

    const [name, updateName] = useState("")
    const [position, updatePosition] = useState("")
    const [photo, updatePhoto] = useState("")
    const [team, updateTeam] = useState("")

    const [title, updateTitle] = useState("")
    const [color, updateColor] = useState("")

    const {registerCollab, createTeam} = props


    const manageSend = (e) => {
        e.preventDefault()
        let shipData = {
            name,
            position,
            photo,
            team
        }
        props.registerCollab(shipData)
    }

    const manageNewTeam = (e) =>{
        e.preventDefault()
        createTeam( {title, mainColor: color} )
    }

    return <section className="formA">
        <form onSubmit={manageSend}>
            <h2>Complete this form to add a new collaborator</h2>
            <Field 
                title="Name" 
                placeholder="Entry your name" 
                required 
                value={name} 
                updateValue={updateName}/>
            <Field 
                title="Position" 
                placeholder="Provide the position" 
                required
                value={position}
                updateValue={updatePosition}/>
            <Field 
                title="Photo" 
                placeholder="Provide photo's link" 
                required
                value={photo}
                updateValue={updatePhoto}/>
            <OptionsList 
                title="Team" 
                placeholder="Select the team" 
                value={team}
                updateTeam={updateTeam}
                teams={props.teams}/>
                
            <Button>
                Create
            </Button>
        </form>

        <form onSubmit={manageNewTeam}>
            <h2>Complete this form to add a new team</h2>
            <Field 
                title="Title" 
                placeholder="Entry the team's title." 
                required 
                value={title} 
                updateValue={updateTitle}/>
            <Field 
                title="Color" 
                placeholder="Provide the team's color in Hex." 
                required
                value={color}
                updateValue={updateColor}
                type="color"/>
            
            <Button>
                Register Team
            </Button>
        </form>

    </section>
}

export default Form