
import { React,createContext, useReducer,useEffect } from 'react';
import Reducer from './Reducer.js'

const api='http://hn.algolia.com/api/v1/search?';


const intialState={     // defining inital state
  
  isLoading:true,
  query:"",
  page:0,
  nbPages:0,
  hits:[]
};
const AppContext = createContext();   // creating context

const AppProvider=({children})=>{

const [state,dispatch]=useReducer(Reducer,intialState)   // useReducer hook is an advance hook used to update the cur_state, whenever required , the dispatch 
                                                        // function is called with the action determining object percieving which reducer
                                                        // function perform the necessary action

const fetchApiData= async (url)=>{ 

  dispatch({type:"SET_LOADING"});
  try{
    const res=await fetch(url);
    const data=await res.json();
     console.log(data);
    
    dispatch({
      type:"GET_STORIES",
      payload:{
        hits:data.hits,
        nbPages:data.nbPages,
      },
    });
   
  }catch(error){
    console.log(error);
  }
};

//to remove the post creating removePOST function which will be made available using the hook useContext in stories.js file

const removePost = (post_ID) => {
  dispatch({ type:"REMOVE_POST", payload:post_ID })
};

const searchPost = (searchQuery)=>{
  dispatch({type:"SEARCH_QUERY",payload:searchQuery})
}


const getNextPage = ()=>{
  dispatch({type:"NEXT_PAGE"})
}

const getPrevPage = ()=>{
  dispatch({type:"PREV_PAGE"})
}

// to call the api function
useEffect(()=>{
  fetchApiData(`${api}query=${state.query}&page=${state.page}`); 
},[state.query,state.page]);


  return(     // returning the context 

    <AppContext.Provider value={{...state,removePost,searchPost,getNextPage,getPrevPage}}>
    {children}
    </AppContext.Provider>
  )  
}


  export { AppContext,AppProvider }; 
  