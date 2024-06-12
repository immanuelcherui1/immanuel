import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer'
import Navbar from './components/navbar'
import { ScrollToTop } from './components/scrollToTop'
import Home from './pages/Home'

function App() {

  return (
    <>
      <div className='bg-gray-900'>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <div className='md:m-8 m-4 lg:mx-28 md:mx-16 text-gray-200'>
          <Routes>
              <Route path='/' element={ <Home /> } />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
