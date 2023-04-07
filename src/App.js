import './App.css';
import Container from "./components/Container"
import { WeatherProvider } from './context/WeatherContext';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className='App'>
      <div className='container'>
        <div id='weather__app'>
          <div className='row'>
            <div className='col col-12 headline'>
              <span>Weather</span>
              <p>Days Forecast</p>
            </div>
            <div className='col col-12'>
              <WeatherProvider>
                <Container/>
              </WeatherProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


