import { useDispatch, useSelector } from "react-redux"
import authSelectors from '../../Redux/auth/auth-selectors'
import authOperations from '../../Redux/auth/auth-operations'

const UserMenu = () => {
    const name = useSelector(authSelectors.getUserName)
    const dispatch = useDispatch()

    return (
        <ul className="nav-list__user">
            <li className="nav-item__user">Добро пожаловать, { name }</li>
            <li className="nav-item__user">
                <button type="button" onClick={ () => dispatch(authOperations.logout()) }>
                    Logout
                </button>
            </li>
        </ul>
    )
}
export default UserMenu