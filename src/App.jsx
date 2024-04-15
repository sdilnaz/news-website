import React from 'react'
import {useState} from 'react'
import Navbar from './components/Navbar'
import NewsPage from './components/NewsPage'

function App() {
const [category,setCategory] = useState("general")

  return (
    <div>
      <Navbar setCategory = {setCategory}/>
      <NewsPage category = {category}/>
    </div>
  )
}

export default App