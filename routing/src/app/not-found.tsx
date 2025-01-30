import Link from 'next/link'
import React from 'react'

const PageNotFound = () => {
    return (
        <div>
            <h1>Page Not Found </h1>
            <Link className='border-1 border-black' href={"/"}>Go Back</Link>
        </div >
    )
}

export default PageNotFound