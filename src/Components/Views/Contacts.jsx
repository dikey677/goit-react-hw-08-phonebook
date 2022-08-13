import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import contactsOperations from "../../Redux/contacts/contacts-operations";

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

    const result = useSelector((state) => state.contacts);
    console.log('useSelector((state) => state)', result)

    return (
        <div className="contacts" style={{ display: 'flex', flexFlow: 'column', gap: '1rem' }}>
            <h1>Список моих контактов</h1>

            <form className="form-contacts" onSubmit={handleSubmit} style={{ display: 'flex', flexFlow: 'column', gap: '1rem' }}>
                <fieldset className="form-contacts__fieldset">
                    <legend className="form-contacts__legend">Создать новый контакт</legend>
                    <label>
                        <p>ФИО</p>
                        <input
                            value={name}
                            type="text"
                            onChange={e => setName(e.currentTarget.value)}
                        />
                        <p>Контактный номер телефона</p>
                        <input
                            value={number}
                            type="number"
                            onChange={e => setNumber(e.currentTarget.value)}
                        />
                    </label>
                </fieldset>

                <button type="submit" style={{ width: 'fit-content' }}>Создать контакт</button>
            </form>

            <ul>
                {result.map((contact) => <li>{`${contact.number}: ${contact.name}`}</li>)}
            </ul>


        </div>
    )
}

export default Contacts