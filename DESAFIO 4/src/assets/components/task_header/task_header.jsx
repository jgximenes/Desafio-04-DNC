// Para usar o if, utilizar operador ternário : e ?
// Por exemplo {variável ? (valor para verdadeiro) : (valor para falso)}

import './style.scss'

const Task_header = () => {
  return (
    <div className='task_header'>
        <table>
          <thead>
            <tr>
              <th colSpan="2">Tarefa</th>
              <th>Status</th>
              <th>Deadline</th>
              <th>Opções</th>
              </tr>
          </thead>
          <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Task_header