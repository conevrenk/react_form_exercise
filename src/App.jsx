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
  return (
    <div className='App'>
      <TaskCreate onCreate={createTask}/>
      <h1>Görevlerim</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} />
    </div>
  )
}

export default App
