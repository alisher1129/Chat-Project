import React from 'react'
import { useParams } from 'react-router-dom';


function SearchUser() {
    const { data } = useParams();
    return (
    <>
    
    <div>{data}</div>
    <div>SearchUser</div>
        
    </>

    )
}

export default SearchUser