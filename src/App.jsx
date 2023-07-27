import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Jobs from './components/page/Jobs';
import Home from './components/page/Home';
import JobItem from './components/page/JobItem';
import UpdateJob from './components/page/UpdateJob';

function App() {
  return (
    <>
      <div>
        <Router>
          <NavigationBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/jobs' element={<Jobs />} />
            <Route exact path='/job/:jobId' element={<JobItem />} />
            <Route exact path='/job/update/:jobId' element={<UpdateJob />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
