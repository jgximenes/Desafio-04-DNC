import { Link } from 'react-router-dom'
import './style.scss'

const Delete_task = ({data}) => {
  return (
    <div className='delete_task'>
    <div className='deleting_task'>
      <p>Deseja excluir esse item?</p>
    </div>
    <div className='deleting_task_description'>
      <p>Tarefa: {data.title}</p>
      <p>Descrição: {data.description}</p>
      <p>Status: {data.completed ? "Feito" : "Pendente"}</p>
      <p>Deadline: {data.deadline}</p>
    </div>
    <div className='confirm_buttons'>
      <Link to={"/"}><button className='negative_button'>Não</button></Link>
      <button className='afirmative_button'>Sim</button>
    </div>
</div>
  )
}

export default Delete_task