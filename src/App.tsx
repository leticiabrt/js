import React, {useState} from 'react';
import {Lits} from "./components/List"

function App(){
  const [projects, setProjects] = useState([]);
  function handleAddProject(){
    setProjects([...projects, `Ǹovo projeto ${Date.now()}`]);
  }
  return(
    <>
      <header>Conteúdo da Home</header>
      <main>
        <ul>
          {projects.map(item => <Lits key={item}>{item}</Lits>)}
        </ul>
        <button></button>
      </main>
    </>
  );
}


export default App

