import React,{useState} from 'react';
import { useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom";
const User = ()=>{

    const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")))

    const history = useHistory()

    const dispatch = useDispatch();

    const logoutUser = ()=>{
        history.push("/login")
        dispatch({type: 'logout_user'})
        history.go(0)
    }  
    return(
        <div className="user">
           {user ? 
            <div className="user__conteiner">
                <span className="user__title">User name : {user.name}</span>
                <span className="user__email">User email : {user.email}</span>
                <button className="logout__bnt" onClick={()=> logoutUser()}>log out</button>
            </div>
           :null}
        </div>
    )
}
export default User;