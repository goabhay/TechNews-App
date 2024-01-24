import {React,useContext} from 'react'
import { AppContext } from './Context'


export default function Search() {
 const {query,searchPost}=useContext(AppContext);
  return (
    <>
      <h1>Tech Website</h1>

      <form >
        <div>
      <input 
      type="text" 
      placeholder='search here'
      value={query}
      onChange={ (e)=>searchPost(e.target.value)}
      />
      </div>
      </form>
     
    </>
  )
}
