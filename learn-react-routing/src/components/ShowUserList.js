import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function ShowUserList(props) {
    console.log('props : ' ,props);
    const [userList, setuserList] = useState([])
useEffect(() => {
        /*
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            console.log(res.data)
            setuserList(res.data);      
        })    */
//
    fetch('https://jsonplaceholder.typicode.com/users')
        //.then(res=> res.json())
            .then((res) => {
                return res.json();
            })
            .then(response =>{
                console.log(response)
                setuserList(response);          
            })
    }, []);

    const clickHandler = (name) =>{
        console.log('click item is : ' , name);
    }
    return (
        <div>
            
            {
            userList.length==0 ? 'loading...' :
            userList.map((user,index) => {
                const url=`/user/${user.id}`;
                console.log('URL : ', url);
                return (
                    <div key={index}> 
                    <span  className='userCls'>{user.name}</span>                   
                    <Link to={url}>User</Link>
                    </div>   
                    )
            })
}
            
        </div>
    )
}

export default ShowUserList
