import Link from 'next/link'
import React from 'react'

const ServicePage = () => {
    return (
        <div>
            <h1 className='text-2xl'>Service Page</h1>
            <p className='py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta totam corrupti eos aliquam libero explicabo. Praesentium, est, sapiente atque hic perferendis explicabo nesciunt cumque doloremque labore quas officia nemo exercitationem.</p>
            <h4 className="text-xl underline py-4">Our Services</h4>
            <ul>
                <li><Link href="service/service1">Service One </Link></li>
                <li><Link href="service/service2">Service Two </Link></li>
                <li><Link href="service/service3">Service Three </Link></li>
                <li><Link href="service/service4">Service Four </Link></li>
            </ul>
        </div>
    )
}

export default ServicePage