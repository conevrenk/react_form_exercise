import { useState } from 'react'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'



const App = () => {
  const [tasks, setTasks] = useState([])
  const createTask = (title, taskDesc) => {
    const createTasks = [...tasks, {
      id: Math.round(Math.random() * 9999999),
      title,
      taskDesc
    }];
    setTasks(createTasks);
  }
  const deleteTaskById = (id) => {
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    })
    setTasks(afterDeletingTasks);
  }
  
  const editTaskById = (id, updatedTitle, updatedTaskDesc) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id)
      {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc }
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  return (
    <div className='App'>
      <TaskCreate onCreate={createTask}/>
      <h1>Görevlerim</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById}/>
    </div>
  )
}

export default App
