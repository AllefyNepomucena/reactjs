import React from "react";
import Header from './components/Header'

/**
 * Componente 
 * Propriedade
 * Estado & Imutabilidade 
 */
 function App( ){
    const projects= ['Desenvolvimento de App', 'Front-end web']

     return (
        //fragment = <> </>
        <> 
   
     <Header title= 'Projects'/>
        
        <ul>
          {projects.map(project => <li key={project}>{project}</li>)}
        </ul>
        </>
        

     )
 }  

 export default App;