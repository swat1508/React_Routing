import React from 'react'

function User(props) {
    console.log('props : ' , props);
    return (
        <div>
            Welcome {props.userProp}
        </div>
    )
}

export default User
