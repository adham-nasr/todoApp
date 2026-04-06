import Home from "./pages/Home.jsx"
import Tasks from "./pages/Tasks.jsx"
import { BrowserRouter, Routes , Route , NavLink } from "react-router-dom"
import './App.css'
import Profile from "./pages/Profile.jsx"
import TaskDetails from "./pages/TaskDetails.jsx"
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile/> } />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/:id" element={<TaskDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
