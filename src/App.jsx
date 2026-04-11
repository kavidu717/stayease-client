import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Dashboard from './user/Dashboard'
import DashboardHome from './user/DashboardHome'
import DashboardSeller from './user/DashboardSeller'
import ProtectedRoute from './routes/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path="seller" element={<DashboardSeller />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
