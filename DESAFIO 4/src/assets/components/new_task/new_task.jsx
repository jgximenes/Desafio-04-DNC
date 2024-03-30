import { Link } from 'react-router-dom'
import './style.scss'

const New_task = () => {
  return (
    <div className='new_task'>
        <div className='creating_task'>
            <p>Qual tarefa deseja adicionar?</p>
        </div>
        <div className='creating_task_description'>
          <p>Tarefa: <input type="text" /></p>
          <p>Descrição: <input type="text" /></p>
          <p>Deadline: <input type="text" /></p>
          <p>Feita? <input type="checkbox" name="" id="" /></p>
        </div>
        <div className='confirm_buttons'>
          <Link to={"/"}><button className='negative_button'>Não</button></Link>
          <button className='afirmative_button'>Sim</button>
        </div>
    </div>
  )
}

export default New_task