import React,{useState,useEffect} from "react";
import Header from "./header.jsx"
import Login from "./login.jsx"
import Register from "./register.jsx"
import User from "./user.jsx"
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
const Wrapper = ()=>{

    const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")) || {})

    const [auth,setAuth] = useState(false);

    useEffect(()=>{
        if(Object.keys(user).length){
            setAuth(true);
            return
        }
        setAuth(false)
    },[])

    return(
        <div className="wrapper">
            <div className="conteiner">
            <div className="content">                      
            <Router>
                <Header/> 
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/login"/>
                        </Route>
                        <Route path="/login">
                            {auth ? <Redirect to="/user"/>: <Login/>}                 
                        </Route>
                        <Route path="/register">
                            <Register/>
                        </Route>
                        <Route path="/user">
                            <User/>
                        </Route>
                    </Switch>
            </Router>
            </div>
            </div>
           
    </div>
    )
}
export default Wrapper;