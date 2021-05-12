import React from 'react'

export const Loading = () => {
    return (
        <div className='row'>
            <div className='col text-center'>
                <div className="spinner-border loader " role="status">
                    <span className="sr-only ">Loading...</span>
                </div>
            </div>
        </div>
    )
}
