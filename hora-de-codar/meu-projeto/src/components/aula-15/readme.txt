App

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/aula-15/pages/Home'
import Empresa from './components/aula-15/pages/Empresa'
import Contato from './components/aula-15/pages/Contato'
import Navbar from './components/aula-15/layout/Navbar'
import Footer from './components/aula-15/layout/Footer'



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact='true' element={<Home />}></Route>
        <Route path='/empresa' element={<Empresa />}></Route>
        <Route path='/contato' element={<Contato />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}
export default App;
