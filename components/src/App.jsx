import Header from './components/Header'
import UserCard from './components/UserCard'

function App() {

  return (
    <>
      <Header/>
      <UserCard name="Linda" age={40} gender="Female" occupation="Teacher"/>
      <UserCard name="Liam" age={30} gender="Male" occupation="Pilot"/>
      <UserCard name="Lucious" age={20} gender="Male" occupation="Nurse"/>
      <UserCard name="Lucy" age={10} gender="Female" occupation="Pupil"/>
      
    </>
  )
}

export default App
