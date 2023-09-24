import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
import Header from './compenents/header/header';
import Form from './compenents/form/form';
import MyOrg from './compenents/myorg';
import Team from './compenents/team';
import Footer from './compenents/footer';


function App() {
  const [showForm, updateDisplay] = useState(false)
  const [collaborators, updateCollaborators] = useState([ {
    id: uuid(),
    team: "Front-End",
    photo: "https://github.com/harlandlohora.png",
    name: "Harland Lohora",
    position: "Instructor",
    fav:true
  },
  {
    id: uuid(),
    team: "Programing",
    photo: "https://github.com/genesysaluralatam.png",
    name: "Genesys Rondón",
    position: "Desarrolladora de software e instructora",
    fav:false
  },
  {
    id: uuid(),
    team: "UX & Design",
    photo: "https://github.com/JeanmarieAluraLatam.png",
    name: "Jeanmarie Quijada",
    position: "Instructora en Alura Latam",
    fav:false
  },
  {
    id: uuid(),
    team: "Programing",
    photo: "https://github.com/christianpva.png",
    name: "Christian Velasco",
    position: "Head de Alura e Instructor",
    fav:false
  },
  {
    id: uuid(),
    team: "Innotavation & Management",
    photo: "https://github.com/JoseDarioGonzalezCha.png",
    name: "Jose Gonzalez",
    position: "Dev FullStack",
    fav:false
  } ])

  const [teams, updateTeams] = useState ([
    {
      id: uuid(),
      title: "Programing",
      mainColor:"#57C278",
      secondColor:"#D9F7E9"
    },
    {
      id: uuid(),
      title: "Front-End",
      mainColor:"#82CFFA",
      secondColor:"#E8F8FF"
    },
    {
      id: uuid(),
      title: "Data Science",
      mainColor:"#A6D157",
      secondColor:"#F0F8E2"
    },
    {
      id: uuid(),
      title: "Devops",
      mainColor:"#E06B69",
      secondColor:"#FDE7E8"
    },
    {
      id: uuid(),
      title: "UX & Design",
      mainColor:"#DB6EBF",
      secondColor:"#FAE9F5"
    },
    {
      id: uuid(),
      title: "Mobile",
      mainColor:"#FFBA05",
      secondColor:"#FFF5D9"
    },
    {
      id: uuid(),
      title: "Innotavation & Management",
      mainColor:"#FF8A29",
      secondColor:"#FFEEDF"
    }
  ])



  //Ternary --> condition ? displayed : notDiplayed
  //condition && displayed

  const changeDisplay = () => {
    updateDisplay(!showForm)
  }

  //register collaborator

  const registerCollab = (collaborator) => {
    console.log("New collaborator ", collaborator)
    //Spread operator
    updateCollaborators([...collaborators, collaborator])
  }

  //delete collaborator

  const deleteCollaborator = (id) => {
    console.log("Collaborator deleted", id)
    const newCollaborators = collaborators.filter((collaborator) => collaborator.id !== id)
    updateCollaborators(newCollaborators)
  }

  //Update team color
  const updateColor = (color, id) => {
    console.log("Update: ", color, id)
    const updatedTeams = teams.map((team) => {
      if(team.id === id){
        team.mainColor = color
      }
      return team
    })

    updateTeams(updatedTeams)
  }

  //create team

  const createTeam =(newTeam) => {
    console.log(newTeam)
    updateTeams([...teams, {...newTeam, id:uuid()}])
  }

  //like function

  const like = (id) => {
    console.log("Like: ", id)
    const updatedCollaborators = collaborators.map((collaborator) => {
      if(collaborator.id === id){
        collaborator.fav = !collaborator.fav
      }
      return collaborator
    })

    updateCollaborators(updatedCollaborators)
  }

  return (
    <div>
      <Header/>
      {/* { showForm ? <Form/> : <></> } */}
      {
        showForm && <Form
          teams={teams.map((team) => team.title)}
          registerCollab={registerCollab}
          createTeam={createTeam}
          />
      }

      <MyOrg changeDisplay={changeDisplay} 
      
        />
      {
        teams.map( (team) => <Team 
          data={team} 
          key={team.title}
          collaborators={collaborators.filter( collaborator => collaborator.team === team.title)}
          deleteCollaborator={deleteCollaborator}
          updateColor={updateColor}
          like={like}
          />
        )
      }

      <Footer></Footer>

    </div>
    
  );
}

export default App;
