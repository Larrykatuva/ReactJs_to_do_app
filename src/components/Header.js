import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const header = ({title}) => {

    const onClick = (e) => {
        console.log(e)
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
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

