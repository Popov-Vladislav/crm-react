import React, { useContext } from 'react'
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import Context from '../../../context'
import './AddItem.css'


function AddItem(props) {
    const { addClient, changeClient } = useContext(Context)
    let [company, setCompany] = React.useState(props.client ? props.client.company : '')
    const [name, setName] = React.useState(props.client ? props.client.name : '')
    const [tel, setTel] = React.useState(props.client ? props.client.tel : '')
    const [com, setCom] = React.useState(props.client ? props.client.com : '')
    const [ATI, setAti] = React.useState(props.client ? props.client.ATI : '')
    const [newDate, setNewDate] = React.useState(props.client ?
        moment(props.client.date, "DD-MM-YYYY HH:mm").format('YYYY-MM-DDTHH:MM') :
        moment().format('YYYY-MM-DDTHH:MM'))

    function submitHandler(event) {
        event.preventDefault()
        const newClient = {
            id: props.client ? props.client.id : Date.now(),
            completed: true,
            date: moment(newDate, "YYYY-MM-DDTHH:mm").format('DD-MM-YYYY HH:mm'),
            company: company,
            name: name,
            tel: tel,
            com: com,
            ATI: ATI,
            status: 'активно',
        }
        props.client ? changeClient(newClient) : addClient(newClient)
        props.closeModal()
        setCompany('')
        setName('')
        setTel('')
        setCom('')
        setAti('')
        setNewDate(moment().format('YYYY-MM-DDTHH:MM'))
    }
    return (
        <form className='form-item' onSubmit={submitHandler}>
            <input type='text' placeholder='Фирма клиента'
                required
                value={company}
                onChange={event => setCompany(event.target.value)} />
            <input type='text' placeholder='ФИО перевозчика'
                required
                value={name}
                onChange={event => setName(event.target.value)}
            />
            <input type='text' placeholder='Контактный телефон перевозчика'
                required
                value={tel}
                onChange={event => setTel(event.target.value)}
            />
            <textarea type='text' placeholder='Комментарий'
                value={com}
                onChange={event => setCom(event.target.value)}
            />
            <input type='text' placeholder='ATI код сети'
                required
                value={ATI}
                onChange={event => setAti(event.target.value)}
            />
            <TextField
                value={newDate}
                onChange={event => setNewDate(event.target.value)}
                id="datetime-local"
                label="Установить время"
                type="datetime-local"
                className='time-field'
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <button type='submit'>Сохранить задачу</button>
        </form>
    )
}

export default AddItem