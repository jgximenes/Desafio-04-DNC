import './style.scss'
import plus from '../../images/plus.svg'
import { Link } from 'react-router-dom'

const Add_task = () => {
  return (
    <div className='add_task'>
        <table>
            <tbody>
                <tr>
                    <td colSpan="2">Nova tarefa...</td>
                    <td></td>
                    <td><Link to={"/add"}><img src={plus} alt="add_task" /></Link></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Add_task