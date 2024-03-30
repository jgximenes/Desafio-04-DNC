import Add_task from "../../components/add_task/add_task"
import Home_header from "../../components/home_header/home_header"
import Home_main from "../../components/home_main/home_main"
import Task_body from "../../components/task_body/task_body"
import Task_header from "../../components/task_header/task_header"

const Tasks = ({data}) => {
  return (
    <div>
      <Home_header />
      <Home_main />
        <div className="tasks">
          <Task_header />
            <div className="tasks__list">
                {data.map ((tasks) => (
                <Task_body key={tasks.id} data={tasks}/>
                ))}
            </div>
        </div>
      <Add_task />
    </div>
  )
}

export default Tasks