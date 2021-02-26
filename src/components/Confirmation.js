import React from 'react'

const Confirmation = (props) => {
    const { order } = props
    return (
        <>
            <pre>{JSON.stringify(order)}</pre>
        </>
    )
}

export default Confirmation