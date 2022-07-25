import { useState } from "react";
// import { useDispatch } from "react-redux";
// import register from "../../Redux/auth/auth-operations";


const Register = () => {
    // const dispatch = useDispatch()
   
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // dispatch(register({name, email, password}))
        setName('')
        setEmail('')
        setPassword('')
    }

    return (
            <form className="form">
                <fieldset className="form-fieldset">
                    <legend className="form-legend">Регистрация пользователя</legend>
                    <label className="form-label">
                        Введите имя пользователя
                    <input
                        type="text"
                        placeholder="Имя"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.currentTarget.value)}
                    />
                        Введите почтовый адрес
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                        Придумайте пароль
                    <input
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.currentTarget.value)}
                    />
                    </label>
                </fieldset>
                <button className="form-button" type="submit">Регистрация</button>
            </form>
    )
}

export default Register