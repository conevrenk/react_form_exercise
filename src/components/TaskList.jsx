import TaskShow from "./TaskShow"

const TaskList = ({tasks,onDelete}) => {
  return (
    <div className="task-list">
      {tasks.map((task,index) => {
        return (
          <TaskShow key={index} task={task} onDelete={onDelete} />
        )
      })}
    </div>
  )
}

export default TaskList
