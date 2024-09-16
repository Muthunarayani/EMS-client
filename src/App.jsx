
import './App.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'

import ListEmployee from './components/ListEmployee.jsx'
import Employee from './components/Employee.jsx'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
function App() {
 

  return (
    <>
    <BrowserRouter>
   <Header />
    <Routes>
      {/* // http://localhost:3000 */}
<Route path='/' element={<ListEmployee />}></Route>
<Route path='/employees'element={<ListEmployee />}></Route>
<Route path='/add-employee'element={<Employee />}></Route>
<Route path='/update-employee/:id'element={<Employee />}></Route>
    </Routes>
   
   <Footer />
   </BrowserRouter>
  
    </>
  )
}

export default App
