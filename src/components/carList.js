import React, { useState, useEffect } from 'react';
import axios from 'axios'

const CarList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/cars')
        .then(res => {
            console.log(res)
            setCars(res.data)
        })
        .catch(err => {
            console.log('GETTING CARS ERROR', err)
        })
    }, [])

    return(
        <>
        <h1>Car List</h1>
        <div className='cars-container'>
            {cars.map(item => {
                return(
                    <>
                        <h4>{item.make}</h4>
                        <p>model: {item.model}</p>
                        <p>mileage: {item.mileage}</p>
                        <p>{item.type}</p>
                        <p>{item.status}</p>
                        <p>VIN: {item.VIN}</p>
                        <p>created at: {item.created_at}</p>
                        <p>last updated: {item.updated_at}</p>
                    </>
                )
            })}
        </div>
        </>
    )
}
export default CarList