import React , {useState, useEffect } from "react";
import api from './services/api'


 
import './components/App.css'

import Header from './components/Header'

/**
 * Componente 
 * Propriedade
 * Estado & Imutabilidade 
 */
 function App( ){
    const [projects , setProjects]= useState(['Desenvolvimento de App', 'Front-end web'])

   useEffect(() => {
      api.get('projects').then(response => {
         console.log(response)
      })
   } , [])
     
       function handleAddProject (){
         //projects.push(`Novo Projeto ${Date.now()} `)
         setProjects([...projects , `Novo Projeto ${Date.now()}`])

         console.log(projects)
       }

     return (
        //fragment = <> </>
        <> 
   
     <Header title= 'Projects'/>

    
        
        <ul>
          {projects.map(project => <li key={project}>{project}</li>)}
        </ul>
        <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>

        </>
        

     )
 }  

 export default App;