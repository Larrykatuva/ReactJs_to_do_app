import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const header = ({title, onAdd, showAdd}) => {

    const onClick = (e) => {
        console.log(e)
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick={onAdd} color='green' text={showAdd ? 'Close': 'Add Task'}/>
        </header>
    )
}

header.defaultProps = {
    title: 'Task Tracker',
}

header.propTypes = {
    title: PropTypes.string,
}

//Styling in React
//const headingStyle = {
//    color: 'red',
//    backgroundColor:'black',
//}

export default header

