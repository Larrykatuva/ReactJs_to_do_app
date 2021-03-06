import { useState } from 'react'
import logo from './logo.svg';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
    const [tasks, setTasks] = useState(
      [
          {   
              id: 1,
              text: 'Dorctor`s appointment',
              day: 'Feb 5th at 2:30pm',
              reminder: true,
          },
          {   
              id: 2,
              text: 'Meeting at school',
              day: 'Feb 6th at 1:30pm',
              reminder: true,
          },
          {   
              id: 3,
              text: 'Food shopping',
              day: 'Feb 7th at 2:30pm',
              reminder: false,
          },
      ]
  )

  //Hide or show form
  const[showAddTask, setShowAddTask] = useState(false)

  //Add Task
  const addTask = (task) => {
    console.log(task)
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task }
    setTasks([...tasks, newTask])
  }


  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? {...task, reminder: 
        !task.reminder } : task
        )
      )
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks}
       onDelete={deleteTask}
       onToggle={toggleReminder}/> : 'No tasks to show'}
    </div>
  );
}

export default App;
