import React , {useState} from "react";

import './components/App.css'
import backgroundImage from './assets/backgroud.jpg'
import Header from './components/Header'

/**
 * Componente 
 * Propriedade
 * Estado & Imutabilidade 
 */
 function App( ){
    const [projects , setProjects]= useState(['Desenvolvimento de App', 'Front-end web'])


     
       function handleAddProject (){
         //projects.push(`Novo Projeto ${Date.now()} `)
         setProjects([...projects , `Novo Projeto ${Date.now()}`])

         console.log(projects)
       }

     return (
        //fragment = <> </>
        <> 
   
     <Header title= 'Projects'/>

     <img width={300} src={backgroundImage}/>
        
        <ul>
          {projects.map(project => <li key={project}>{project}</li>)}
        </ul>
        <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>

        </>
        

     )
 }  

 export default App;