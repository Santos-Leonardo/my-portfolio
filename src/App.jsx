import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ContextStorage } from './context/Context'
import Header from './layout/header/Header'
import Body from "./pages/body/Body"
import Projects from "./pages/projects/Projects"
import About from "./pages/about/About"
import Footer from './layout/footer/Footer'
import NotFound404 from "./pages/notfound404/NotFound404"

function App() {

    return (
        <BrowserRouter>
            <ContextStorage>
                <Header />
                <Routes>
                    <Route path='/' element={<Body />}></Route>
                    <Route path='projects' element={<Projects />}></Route>
                    <Route path='about' element={<About />}></Route>
                    <Route path='*' element={<NotFound404 />} />
                </Routes>
                <Footer />
            </ContextStorage>
        </BrowserRouter>
    )
}

export default App;
