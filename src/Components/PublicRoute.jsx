import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import authSelectors from "../Redux/auth/auth-selectors"


const PublicRoute = ({ children, restricted }) => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    const shouldRedirect = isLoggedIn && restricted
    console.log("shouldRedirect:", shouldRedirect)
    
    return shouldRedirect ? <Navigate to="/contacts" /> : children 
            
}
 
export default PublicRoute