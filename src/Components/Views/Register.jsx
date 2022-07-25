const Register = () => {
    return (
       
            <form className="form">
                <fieldset className="form-fieldset">
                    <legend className="form-legend">Регистрация пользователя</legend>
                    <label className="form-label">
                        Введите имя пользователя
                        <input type="text" placeholder="Имя" />
                        Введите почтовый адрес
                        <input type="email" placeholder="Email" />
                        Придумайте пароль
                        <input type="password" placeholder="Enter password" />
                        Подтвердите пароль
                        <input type="password" placeholder="Confirm password" />
                    </label>
                </fieldset>
                <button className="form-button" type="submit">Регистрация</button>
            </form>
            
        
    )
}
export default Register