import React, { useContext } from 'react';
import { AppContext } from './Context';


export default function Pagination(props){

    const {page,nbPages,getNextPage,getPrevPage}= useContext(AppContext);
    return (
        <>
        <div className="pagination-btn">
            <button onClick={()=> getPrevPage()}>Prev</button>
            <p>
                {page+1} of {nbPages}
            </p>
            <button onClick={()=>getNextPage()}>Next</button>
        </div>
        </>
    )
}