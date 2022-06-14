/*Biblioteca e tags usadas nos Routers */
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/aula-16/pages/Home'
import Empresa from './components/aula-16/pages/Empresa'
import Contato from './components/aula-16/pages/Contato'
import Navbar from './components/aula-16/layout/Navbar'
import Footer from './components/aula-16/layout/Footer'



function App() {
  return (
    <Router>
      {/* Criamos um navbar dinâmico */}
      <Navbar />
      {/* Antigamente usávamos o componente Switch, mas hj usamos o Routes */}
      <Routes>
        {/* Parâmetro exact necessário para o diretório raíz funcionar */}
        <Route path='/' exact='true' element={<Home />}></Route>
        <Route path='/empresa' element={<Empresa />}></Route>
        <Route path='/contato' element={<Contato />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}
export default App;
