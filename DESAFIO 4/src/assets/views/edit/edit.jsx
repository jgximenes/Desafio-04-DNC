import { useParams } from "react-router-dom"
import Edit_task from "../../components/edit_task/edit_task"
import Home_header from "../../components/home_header/home_header"
import Home_main from "../../components/home_main/home_main"


const Edit = ({data}) => {
  const {editId} = useParams();
  const selectedTask = data.find((task) => task.id == editId);
  
  return (
    <div>
      <Home_header />
      <Home_main />
      <Edit_task data={selectedTask}/>
    </div>
  )
}

export default Edit