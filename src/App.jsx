import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AdvocatePage from './pages/AdvocatePage'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route element={<HomePage />} path="" />
        <Route element={<AdvocatePage />} path="/advocates/:username" />
      </Routes>
    </Router>
  )
}

export default App
