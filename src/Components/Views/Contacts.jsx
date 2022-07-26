import { useState } from "react";
import { useDispatch } from "react-redux"

const Contacts = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch()
        setName('')
        setNumber('')
    }
    
    return (
        <div className="contacts">
            <h1>Список моих контактов</h1>

            <form className="form-contacts" onSubmit={handleSubmit}>
                <fieldset>
                    <legend className="form-contacts__legend">Создать новый контакт</legend>
                    <label>
                        <p>ФИО</p> 
                        <input
                            type="text"
                            onChange={e => setName(e.currentTarget.value)}
                        />
                        <p>Контактный номер телефона</p>
                        <input
                            type="number"
                            onChange={e => setNumber(e.currentTarget.value)}
                        />
                    </label>
                </fieldset>
                <button type="submit">Создать контакт</button>
            </form>
        </div>
    )
}

export default Contacts