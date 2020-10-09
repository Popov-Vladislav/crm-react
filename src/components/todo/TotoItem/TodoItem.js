import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import './TodoItem.modules.css'
import Context from '../../../context'
import Modal from '../modal/Modal'

function TodoItem({ client, idx, onChange }) {
    const { removeClient } = useContext(Context)
    const classes = []
    if (!client.completed) {
        classes.push('done')
    }
    return (
        <tr className={classes.join(' ')}>
            <td><strong>{idx + 1}</strong></td>
            <td>{client.date}</td>
            <td>{client.company}</td>
            <td>{client.name}</td>
            <td>{client.tel}</td>
            <td>{client.com}</td>
            <td><a href={`https://ati.su/firms/${client.ATI}/info`}>Перейти</a></td>
            <td>{client.status}
                <input
                    type='checkbox'
                    onChange={() => onChange(client.id)}
                    checked={!client.completed}
                />
            </td>
            <td>
                <Modal title={<i className="fas fa-pencil-alt"></i>} client={client} />
                <button
                    onClick={() => removeClient(client.id)}
                    style={{ background: 'red', color: 'white', border: 'none', marginRight: '0px' }}
                >
                    <i className="fas fa-times"></i>
                </button>
            </td>
        </tr>
    )
}

TodoItem.propTypes = {
    client: PropTypes.object.isRequired,
    idx: PropTypes.number,
    onChange: PropTypes.func.isRequired,
}

export default TodoItem