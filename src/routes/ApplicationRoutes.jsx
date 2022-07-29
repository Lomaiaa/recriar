import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sobre from '../pages/Sobre/Sobre'
import Dicas from '../pages/Dicas/Dicas'
import Cadastro from '../pages/Cadastro/Cadastro'
import Equipe from '../pages/Equipe/Equipe'
import Menu from '../components/Menu/Menu'
import Footer from '../components/Footer/Footer'


function ApplicationRoutes () {
    return(
        <BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/" element={<Sobre/>} />
            <Route path="dicas" element={<Dicas/>} />
            <Route path="cadastro" element={<Cadastro/>} />
            <Route path="equipe" element={<Equipe/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default ApplicationRoutes