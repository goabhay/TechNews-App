import React, { useContext } from 'react'; // Import 'React' from 'react' and destructure 'useContext'
import { AppContext } from './Context';

export default function Stories() {
  const { hits,isLoading,removePost } = useContext(AppContext);  // will be reading the values of  Hits and removePost function 
  
  
if(isLoading){
  return (
    <h1>Loading...</h1>
  );
}

    return(
      <>
       {/* ideally each returning component should have it's unique key */}
      <div className="stories-div" >  
      { hits.map((curPost)=>{
        const {title,author,objectID,url,num_comments}=curPost;   // every object has unique objectID

        return (
         <div className="card" key={objectID}>
          <h2> {title}   </h2>
          <p> 
            By <span> {author} </span>| <span>{num_comments}</span>
            comments
          </p>
          <div className="card-button">
            <a href={url} target="_blank">
              Read More
            </a>
  
  {/* to identify which post has to be deleted , the objectID of that post is passed as argument in function */}

         <a href="#" onClick={()=>removePost(objectID)}>
          Remove
          </a>          
           </div>    
         </div>
        )
      })}
      </div>
      </>
    )
}

