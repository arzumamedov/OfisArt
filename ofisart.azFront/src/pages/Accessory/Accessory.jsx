import React, { useEffect, useState } from 'react'
import './Accessory.scss'
import { Link } from 'react-router-dom'

function Accessory() {

    const [detail, setDetail] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3030/api/product/65cf41eb2072888a8aa42e6a")
            .then((res) => res.json())
            .then((api) => setDetail(api))
    }, [])


    return (
        <>
            <div className='accessory'>
                {detail === null ?
                    <div className="spinner-container">
                        <i className="fa-solid fa-spinner fa-spin"></i>
                    </div>
                    : detail.map((x) => (
                        <div className='card'>
                            <div className='name'>{x.name}</div>
                            <Link to={'/detail/' + x._id}>
                                <img src={x.image[0]} alt="" />
                            </Link>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default Accessory