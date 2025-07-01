import PeopleForm from './components/peopleForm'
import PeopleList from './components/PeopleList'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
function App() {

  return (
    // <div className="max-w-md mx-auto p-4">
    //   <h1 className="text-xl font-bold mb-4">People Manager</h1>
    //   <PeopleForm onPersonAdded={() => window.location.reload()} />
    //   <PeopleList />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/form" element={<PeopleForm onPersonAdded={() => {window.location.reload()}}/>}></Route>
        <Route path="/list"  element={<PeopleList/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

