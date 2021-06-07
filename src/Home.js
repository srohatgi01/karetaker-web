import React from 'react'

function Home (props){
    return (
        <div>
          <h1>Welcome {props.firstName}</h1><br />
            <h2>How are you feeling today?</h2>
        </div>
    )
}

export default Home;
