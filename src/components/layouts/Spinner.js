import React from 'react'
import spinner from './spinner.gif'


const Spinner = () => {
    return (
        <React.Fragment>
            <img src={spinner} alt="Loading" style={{ width:'300px', height: '300px', margin: 'auto', display: 'block' }}/>
        </React.Fragment>
    )
}

export default Spinner
