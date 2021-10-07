import React,{useState} from 'react';
import RegisterMessage from './registerMessage';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'

const Register = ()=>{

    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const[repeatPassword,setPasswordRepeat] = useState(false);

    const [registerMessage,setRegisterMessage] = useState(false);

    const [passwordTest,setPassword] = useState('');

    const onSubmit = data => { 
        setRegisterMessage(true)
        dispatch({type:"set_user",payload:data})
    };
    return (
        
        <div className="login">
            {registerMessage ? <RegisterMessage/> : 
            <div>
            <h1 className="title">Register</h1>
            <form id="hook-form" onSubmit={handleSubmit(onSubmit)} className="login__form">
                 <label className="login__name__label">
                    <input type="text" placeholder="Full Name" className={errors.name?.type === 'required' ? "login__name__empty":null}
                        {...register("name", {
                        required: true,
                        pattern: /^[A-Za-z]+$/i})}
                    /> 
                    {errors.name?.type === 'required' && <span className="error__message">Name is required</span>} 
                    {errors.name?.type === 'pattern' && <span className="error__message">English only and characters only</span>} 
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
                    })}     
        
                        placeholder="Password" 
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className={errors.password?.type === 'required' ? "login__password__empty":null}/>  
                        {errors.password?.type === 'required' && <span className="error__message">Password is required</span>} 
                        {errors.password?.type === 'minLength' && <span className="error__message">Min length password 8</span>} 
                </label>  
                <label className="login__repeat__label">
                    <input {...register("confirmPassword", { 
                        minLength:8,
                        required: true,
                        validate: value=>{
                            value === passwordTest ? setPasswordRepeat(false):setPasswordRepeat(true)
                        }     
                    })} placeholder="Confirm password" 
                        type="password"
                        className={errors.password?.type === 'required' ? "login__password__empty":null}  
                        />  
                        {errors.confirmPassword?.type === 'required' && <span className="error__message">Confirm password is required</span>} 
                        {repeatPassword ? <span className="error__message">Password mismatch</span>:null}
                </label>  
                <button type="submit" form="hook-form" className="login__btn__submit">
                    Register
                </button>
                
            </form>
                </div>
            }
            
        </div>
    )
}
export default Register;