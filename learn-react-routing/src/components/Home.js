import React from 'react'

function Home(props) {
    console.log('props ==>>>>>>>>>   ' ,props)
    return (
        <div>
            This is Home Page !!!
    <div>{props.msg}</div>
        </div>
    )
}

export default Home;