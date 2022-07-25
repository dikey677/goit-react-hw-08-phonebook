const Login = () => {
    return (
            <form className="form">
                <fieldset className="form-fieldset">
                    <legend className="form-legend">Авторизация пользователя</legend>
                    <label className="form-label">
                        Введите имя пользователя
                        <input type="text" placeholder="Имя" />
                        Введите пароль учетной записи
                        <input type="password" placeholder="Enter password" />
                    </label>
                </fieldset>
                <button className="form-button" type="submit">Войти</button>
            </form>
    )
}
export default Login