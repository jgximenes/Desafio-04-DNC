import { useParams } from "react-router-dom"
import Home_header from "../../components/home_header/home_header"
import Home_main from "../../components/home_main/home_main"
import Task_details from "../../components/task_details/task_details";


const Details = ({data}) => {
  const {detailsId} = useParams();
  const selectedTask = data.find((task) => task.id == detailsId);
  
  return (
    <div>
      <Home_header />
      <Home_main />
      <Task_details data={selectedTask}/>
    </div>
  )
}

export default Details