import Home_header from '../../components/home_header/home_header'
import Home_main from '../../components/home_main/home_main'
import New_task from '../../components/new_task/new_task'
import './style.scss'

const Add = () => {
  return (
    <div>
        <Home_header />
        <Home_main />
        <New_task />
    </div>
  )
}

export default Add