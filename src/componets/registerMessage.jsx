import {Link} from "react-router-dom";
const RegisterMessage = () =>{
    return (
        <div className="regiter__message">     
            <span className="register__message__title">
                You have successfully Registered
            </span>
            <Link to="/login" className="register__message__bnt">
                OK
            </Link>
        </div>
    )
}
export default RegisterMessage;