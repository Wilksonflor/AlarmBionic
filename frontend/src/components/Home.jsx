
import './Home.module.css'
import AlarmList from './AlarmList'
import InserirAlarm from './InserirAlarm'
const Home = () => {
  return (
    <div>
       <InserirAlarm/>
       <AlarmList/>
    </div>
  )
}

export default Home