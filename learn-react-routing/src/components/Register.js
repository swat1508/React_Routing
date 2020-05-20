import React,{useState} from 'react'
import ShowUserList from './ShowUserList';

function Register() {
    
    const [name, setname] = useState({
        first_name:'',
        last_name:''
    })
    const setNameAsInTextbox = (event) =>{
        setname({...name,[event.target.id] : event.target.value});
    }

    return (
        <div>            
            Name is : {name.first_name} and Surname is :{name.last_name}
            <form>
                <legend>
                    <div>
                        <label>First Name : </label>
                        <input type="text" id='first_name' className='inputCls' onChange={setNameAsInTextbox}/>
                    </div>
                    <div>
                        <label>Last Name : </label>
                        <input type="text" id='last_name' className='inputCls' onChange={setNameAsInTextbox}/>
                    </div>
                    <div>
                        <input type="button" value='OK'/>
                    </div>
                </legend>
            </form>
        </div>
    )
}

export default Register
