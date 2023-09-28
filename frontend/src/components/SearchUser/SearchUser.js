import React from 'react'
// import { useParams } from 'react-router-dom';


function SearchUser(props) {
    const data = props.location.dataToShare; // Access data from props

    // const { data } = useParams();
    // console.log("i want to see",data)
    return (
        <>
            <div>{data}</div>
            <div>SearchUser</div>

            <div>
                {Array.isArray(data) &&
                    data.map((item, index) => (
                        <li key={index}>
                            <div>
                                <h2>Username: {item.userId}</h2>
                                <img src={item.photo} alt={`User ${index + 1}`} />
                            </div>
                        </li>
                    ))}
            </div>


            {/* <div>{data.map((item, index) => (
          <li key={index}>
            <div>
              <h2>Username: {item.userId}</h2>
              <img src={item.photo} alt={`User ${index + 1}`} />
            </div>
          </li>
        ))}
    </div> */}


        </>

    )
}

export default SearchUser