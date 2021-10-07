import {NavLink} from "react-router-dom";
const Header = ()=>{
    return (
        <div className="header">
            <NavLink  to="/login" className="link " activeClassName="active__link">
                Login
            </NavLink>
            <NavLink  to="/register" className="link " activeClassName="active__link">
                Register
            </NavLink>
        </div>
    )
};
export default Header;