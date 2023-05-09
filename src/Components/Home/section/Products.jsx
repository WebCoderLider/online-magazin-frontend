import React, { useEffect, useState } from 'react'
import './products.css'
function Products() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div id='products'>
            <center><h4 className='m-4'>Products</h4></center>
            <div class="card-group">
                {
                    data ? (
                        data.map(el => (
                            <div class="card m-4" style={{ width: '18rem' }}>
                                <img src={el.img} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{el.title}</h5>
                                    <p class="card-text">{el.body}</p>
                                </div>
                            </div>
                        ))
                    ) : ''
                }
            </div>
        </div>
    )
}

export default Products
