import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Signup from './Pages/SignUp'

function App() {
  return (
  <>
   <div align='center'>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </BrowserRouter>
   </div>
  </>
  )
}

export default App
