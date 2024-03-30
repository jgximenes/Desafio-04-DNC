import { Link } from 'react-router-dom'
import './style.scss'

const Task_details = ({data}) => {
  return (
    <div className='task_details'>
        <div className='task_details__header'>
            <p>Detalhes da tarefa</p>
        </div>
        <div className='task_detail__description'>
            <p>Tarefa: {data.title}</p>
            <p>Descrição: {data.description}</p>
            <p>Status: {data.completed ? "Feito" : "Pendente"}</p>
            <p>Deadline: {data.deadline}</p>
        </div>
        <div className='confirm_buttons'>
            <Link to={"/"}><button className='negative_button'>Voltar</button></Link>
        </div>
    </div>
  )
}

export default Task_details