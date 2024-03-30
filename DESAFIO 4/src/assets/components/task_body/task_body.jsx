// Para usar o if, utilizar operador ternário : e ?
// Por exemplo {variável ? (valor para verdadeiro) : (valor para falso)}

import './style.scss'
import checked from '../../images/checked.svg'
import unchecked from '../../images/unchecked.svg'
import pencil from '../../images/pencil.svg'
import trash from '../../images/trash.svg'
import { Link } from 'react-router-dom'

const Task_body = ({data}) => {
  return (
    <div className='task_body'>
        <table>
            <tbody>
                <tr>
                    <td colSpan="2"><Link to={`/details/${data.id}`}>{data.title}</Link></td>
                    <td>{data.completed ? <img src={checked} alt="error"/> : <img src={unchecked} alt="error"/>}</td>
                    <td>{data.deadline}</td>
                    <td>
                      <Link to={`/edit/${data.id}`}><img src={pencil} alt="edit" /></Link>
                      <Link to={`/delete/${data.id}`}><img src={trash} alt="delete" /></Link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Task_body