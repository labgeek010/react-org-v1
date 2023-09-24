import "./optionlist.css"

const OptionsList = (props) => {

    //Map Method -> array.map( (team, index) => {
    //  return <option></option>
    // } )
   

    const manageChange = (e) => {
        console.log("change", e.target.value)
        props.updateTeam(e.target.value)
    }


    return <div className="option-list">
        <label>Teams</label>
        <select value={props.value} onChange={manageChange}>
            <option value="" disabled defaultValue="" hidden>Select the team</option>
            { props.teams.map( (team, index) => <option key={index} value={team}>{team}</option> ) }

        </select>
    </div>
}

export default OptionsList