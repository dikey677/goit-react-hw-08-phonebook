import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import contactsOperations from "../../Redux/contacts/contacts-operations";
import contactSelectors from "../../Redux/contacts/contacts-selectors";

const Contacts = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const dispatch = useDispatch()


      useEffect(() => {
        dispatch(contactsOperations.fetchContacts())
    }, [dispatch])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(contactsOperations.createContacts({ name, number }))

        setName('')
        setNumber('')
    }

    // const result = useSelector(contactSelectors.getFetchContacts)
    // console.log('РЕЗУЛЬТАТ', result)

    return (
        <div className="contacts">
            <h1>Список моих контактов</h1>

            <form className="form-contacts" onSubmit={handleSubmit}>
                <fieldset className="form-contacts__fieldset">
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

            <ul>
                <li>{}: {}</li>
            </ul>
            
        </div>
    )
}

export default Contacts