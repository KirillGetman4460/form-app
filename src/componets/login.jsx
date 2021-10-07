import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
const Login = ()=>{
    const { register, handleSubmit, formState: { errors } } = useForm();

    const dispatch = useDispatch()

    const[user,setUser] = useState(JSON.parse(localStorage.getItem("user")))

    const [errorMessage,setErrorMessage] = useState(false)

    const history = useHistory()

    const onSubmit = data => {
        if(user){
            if(data.name === user.name && data.password === user.password) {
                setErrorMessage(false)
                dispatch({type:"active_user",payload:true})
                history.push('/user')
                return;
            }
            dispatch({type:"active_user",payload:false})    
        } 
        setErrorMessage(true)
    };
    return (
        <div className="login">
            <h1 className="title">Login</h1>
            <form id="hook-form" onSubmit={handleSubmit(onSubmit)} className="login__form">
                 <label className="login__name__label">
                    <input type="text" placeholder="Full Name" className={errors.name?.type === 'required' ? "login__name__empty":null}
                        {...register("name", {
                        required: true,
                        pattern: /^[A-Za-z]+$/i})}
                    /> 
                    {errors.name?.type === 'required' && <span className="error__message">Name is required</span>} 
                    {errors.name?.type === 'pattern' && <span className="error__message">English only and characters only</span>}
                    {errorMessage ? <span className="error__message">The username or password you entered is incorrect</span>:null} 
                 </label>  

                 <label className="login__email__label">
                    <input {...register("email", { 
                        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        required: true                
                    })} placeholder="Email Address" className={errors.name?.type === 'required' ? "login__email__empty":null}/> 
                    {errors.email?.type === 'required' && <span className="error__message">Email is required</span>} 
                    {errors.email?.type === 'pattern' && <span className="error__message">English only and characters only</span>}  
                </label>  

                <label className="login__password__label">
                    <input {...register("password", { 
                        minLength:8,
                        required: true                
                    })} placeholder="Password" 
                        type="password"
                        className={errors.password?.type === 'required' ? "login__password__empty":null}/>  
                     {errors.password?.type === 'required' && <span className="error__message">Password is required</span>} 
                     {errors.password?.type === 'minLength' && <span className="error__message">Min length password 8</span>} 
                     {errorMessage ? <span className="error__message">Wrong password</span>:null} 
                </label>  

                <button type="submit" form="hook-form" className="login__btn__submit">
                    Login
                </button>
                
            </form>
            </div>
    )
}
export default Login;