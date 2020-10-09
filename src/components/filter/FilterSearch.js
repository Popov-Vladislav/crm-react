import React from 'react'

function FilterSearch(props) {
    return (
        <input
            className={props.className}
            value={props.search}
            onChange={event => props.onChangeSearchFilter(event)}
            placeholder='Поиск'
        />
    )
}

export default FilterSearch