import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'

function App() {
  return (
    
    <BrowserRouter>
  
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
         
         
            <Route path="/login" element={<Login />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
