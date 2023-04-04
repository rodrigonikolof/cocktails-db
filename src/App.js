import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/cocktails-db/' element={<Home/>} />
          <Route path='/cocktails-db/about' element={<About/>} />
          <Route path='/cocktails-db/cocktail/:id' element={<SingleCocktail/>} />
          <Route path='cocktails-db/*' element={<Error/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
