import {React,useContext} from 'react'
// import Search from './Components/Search'
import Stories from './Components/Stories'
import { AppContext } from './Components/Context';
import Pagination from './Components/Pagination';
import "./App.css"
import Search from './Components/Search'


export default function App() {
  return (
    <div>
      <Search/>
      <Pagination/>
      <Stories/>
    </div>
  )
}


