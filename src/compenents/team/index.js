import "./team.css"
import Collaborator from "../collaborator"
import hexToRgba from 'hex-to-rgba';


const Team = (props) => {

    //destructuration 
    const { mainColor, secondColor, title, id} = props.data
    const {collaborators, deleteCollaborator, updateColor, like} = props
    const obj = {
        backgroundColor: hexToRgba(mainColor, 0.6)
    }

    const titleStyle = { borderColor: mainColor}

    return <>
        { collaborators.length > 0 &&
            <section className="team" style={obj}>
                <input
                    type='color'
                    className="input-color"
                    value={mainColor}
                    onChange={(event) => {
                        updateColor(event.target.value, id)
                    }}
                /> 
            <h3 style={titleStyle}> {title}</h3>
            <div className="collaborators">

                {
                    collaborators.map( (collaborator, index) => <Collaborator 
                        data={collaborator} 
                        key={index} 
                        mainColor={mainColor}
                        deleteCollaborator={deleteCollaborator}
                        like={like}
                    />)    
                }

            </div>
        </section>
        }
    </>
}

export default Team