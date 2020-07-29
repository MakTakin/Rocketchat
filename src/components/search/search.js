import React, {useState} from 'react'
import {Input} from "../../styled/styled"

function Search(props) {
    const [term, setTerm] = useState('')

    const onSearchChange = (e) => {
            const term = e.target.value
            setTerm(term)
            props.onSearch(term)
        }

    return (
        <Input type="text" placeholder='Что ищем?'
               value={term}
               onChange={e => onSearchChange(e)}
        />
    )
}

export default Search