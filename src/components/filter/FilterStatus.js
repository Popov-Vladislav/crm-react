import React from 'react'

function FilterStatus(props) {

    return (
        <select
            value={props.select}
            onChange={event => props.onChangeStatus(event)}>
            <option value='все'>Все</option>
            <option value='активно'>Активно</option>
            <option value='завершено'>Завершено</option>
        </select>
    )
}

export default FilterStatus