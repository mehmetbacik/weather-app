import React from 'react';
import{ Cities} from 'react-bootstrap';
import { useWeatherContext } from '../context/WeatherContext'
import "../App.css"
function Cities() {
  const { city, setCity, cities } = useWeatherContext()
  return (
    <div className='header'>
      <Cities className='dropdown'>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          {`${city}\n`}
        </Dropdown.Toggle>

        <Dropdown.Menu className='select'>
          {
            cities.map((item) => (
              <div key={item.id}>
                <Dropdown.Item onClick={() => setCity(item.name)}>{item.name}</Dropdown.Item>
              </div>
            ))
          }
        </Dropdown.Menu>

      </Cities>

    </div>


  )
}

export default React.memo(Cities)
