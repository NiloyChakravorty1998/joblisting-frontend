
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavigationBar from './components/NavigationBar'
import Jobs from './components/page/Jobs'
import Home from './components/page/Home'

function App() {

  return (
    <>
      <div>
      <Router>
        <NavigationBar/>
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/jobs' element={<Jobs />} />
        </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
