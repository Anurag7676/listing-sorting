import './App.css'
import React, { useState, lazy, Suspense } from 'react'
import Listing from './components/SortablList'


import { Routes, Route } from 'react-router-dom'
// import Home from './components/Home/index'
// import Player from './components/Player/index'
// import Product from './components/Product/index'
// import TestComp from './components/TestC/TestComp'
import Header from './components/Header'
import List from './components/SortablList/List'
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
  const [items, setItems] = useState(['Apple', 'Banana', 'Orange', 'Mango'])

  return (
    <div>
      <Header />
     <List/>
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
