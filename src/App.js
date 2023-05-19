import './App.css'
import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
// import Home from './components/Home/index'
// import Player from './components/Player/index'
// import Product from './components/Product/index'
// import TestComp from './components/TestC/TestComp'
import Header from './components/Header'
const Home = lazy(() =>
  import('./components/Home/index' /* webpackChunkName: "HomeChunk" */)
)
const Player = lazy(() =>
  import('./components/Player/index' /* webpackChunkName: "PlayerChunk" */)
)
const Product = lazy(() =>
  import('./components/Product/index' /* webpackChunkName: "ProductChunk" */)
)
const TestComp = lazy(() =>
  import( 
    './components/TestC/TestComp'
    /* webpackChunkName: "TestCompChunk" */
  )
)

function App() {
  return (
    <div>
      <Header/>
      <Suspense fallback={<h2>...Loading</h2>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/test' element={<TestComp />} />
          <Route path='*' element={<Player />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
