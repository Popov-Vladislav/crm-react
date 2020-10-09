import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from '../TotoItem/TodoItem'
import classes from './TodoList.modules.css';

function TodoList(props) {
    return (
        <table align='center' className={classes.table}>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Дата</th>
                    <th>Фирма</th>
                    <th>Перевозчик</th>
                    <th>Телефон</th>
                    <th>Комментарий</th>
                    <th>ATI</th>
                    <th>Состояние</th>
                    <th>Управление</th>
                </tr>
            </thead>
            <tbody>
                {!props.clients.length ?
                    <tr><td colSpan='9'>Нет заявок</td></tr> :
                    props.clients.map((client, idx) => {
                        return (
                            <TodoItem
                                client={client}
                                key={client.id}
                                idx={idx}
                                onChange={props.changeStatus}
                            />)
                    })}
            </tbody>
        </table >
    )
}

TodoList.propTypes = {
    clients: PropTypes.arrayOf(PropTypes.object).isRequired,
    changeStatus: PropTypes.func.isRequired,
}

export default TodoList