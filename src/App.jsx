import React, { useState } from "react";
import dataPekerjaan from "../Tugas_Todo/Datapekerjaan";
import Tugas from "../Tugas_Todo/Tugas";
import './App.css'
import Datadiri from "../Tugas_Todo/Datadiri";

function App() {
  const [tasks, setTasks] = useState(dataPekerjaan);

  function handleChange(id) {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      });
      return updatedTasks;
    });
  }

  function handleDelete() {
    setTasks(prevTasks => prevTasks.filter(task => !task.completed));
  }

  return (
    <div className="app">
      <Datadiri/>
      {tasks.map(task => (
        <Tugas key={task.id} tugas={task} handleChange={handleChange} />
      ))}
      <button className='buttonclick' onClick={handleDelete}>Hapus yang Telah Selesai</button>
      <a href="https://www.instagram.com/krsnna_38?igsh=cXZ0aGw2ZWIxM2U3" target="_blank">
            <img src="./src/foto/ig.png" className="logo"/>
            </a>
            <a href='https://github.com/Byblee38' target='_blank'>
            <img src='./src/foto/github.png' className="logo"/></a>
    </div>
  );
}

export default App;
