import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import { useWeatherContext } from '../context/WeatherContext'

function Days() {
    let { weatherData } = useWeatherContext()
    //console.log(weatherData)
    return (
        <>
            <CardGroup className={'text-center mt-3'}>
                {
                    weatherData.map((item, index) => {
                         const date = new Date(item.date);
                         const dayNumber = date.getDay()
                         const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
                         const day = daysOfWeek[dayNumber]
                        return (
                            <Card key={index} bg={index===0 ? 'secondary':''} text={index===0 ? 'white':''}>
                                <Card.Body className='cardBody'>
                                    <Card.Title>{day}</Card.Title>
                                    <img variant='top' src={item.day.condition.icon} alt="img"></img>
                                </Card.Body>
                                <Card.Footer>
                                    <small><b>{item.day.maxtemp_c}°C</b> {item.day.mintemp_c}°C</small>
                                </Card.Footer>
                            </Card>                         
                        )
                    })
                }
            </CardGroup>
        </>

    )
}

export default React.memo(Days)