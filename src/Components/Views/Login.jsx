import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../Redux/auth/auth-operations";

const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


      const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(authOperations.login({email, password}))
        setEmail('')
        setPassword('')
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
                <fieldset className="form-fieldset">
                    <legend className="form-legend">Авторизация пользователя</legend>
                    <label className="form-label">
                        Введите электронную почту
                    <input
                        type="email"
                        placeholder="Enter email"
                        name={email}
                        onChange={e => setEmail(e.currentTarget.value)}
                    />
                        Введите пароль учетной записи
                    <input
                        type="password"
                        placeholder="Enter password"
                        name={password}
                        onChange={e => setPassword(e.currentTarget.value)}
                    />
                    </label>
                </fieldset>
                <button className="form-button" type="submit">Войти</button>
            </form>
    )
}
export default Login