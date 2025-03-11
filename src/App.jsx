import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ContextStorage } from './context/Context'
import Header from './layout/header/Header'
import Home from "./pages/home/Home"
import Projects from "./pages/projects/Projects"
import About from "./pages/about/About"
import Footer from './layout/footer/Footer'
import NotFound404 from "./pages/notfound404/NotFound404"
import SmoothScroll from './components/SmoothScroll/SmoothScroll'

function App() {

    return (
        <BrowserRouter>
            <ContextStorage>
                {/* <SmoothScroll> */}
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='projects' element={<Projects />}></Route>
                        <Route path='about' element={<About />}></Route>
                        <Route path='*' element={<NotFound404 />} />
                    </Routes>
                    <Footer />
                {/* </SmoothScroll> */}
            </ContextStorage>
        </BrowserRouter>
    )
}

export default App;
