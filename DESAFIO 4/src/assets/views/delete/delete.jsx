import { useParams } from "react-router-dom"
import Delete_task from "../../components/delete_task/delete_task";
import Home_header from "../../components/home_header/home_header"
import Home_main from "../../components/home_main/home_main"


const Delete = ({data}) => {
  const {deleteId} = useParams();
  const selectedTask = data.find((task) => task.id == deleteId);

  return (
    <div>
      <Home_header />
      <Home_main />
      <Delete_task data={selectedTask} />
    </div>
  )
}

export default Delete