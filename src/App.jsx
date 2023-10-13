import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import {Home,Footer,Navbar} from './Components'
import Temporary from './Pages/Temporary';
function App() {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='coming-soon' element={<Temporary/>}/>
    </Routes>
    <Footer/>
   </Router>
  )
}
export default App;
