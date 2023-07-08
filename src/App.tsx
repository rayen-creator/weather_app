import './App.css'
import Rightbar from './components/rightbar'
import TimeDate from './components/timeDate'
import WeatherList from './components/weatherList'

function App() {

  return (

    <div className='flex bg-hero-pattern  bg-cover '>
      <div className="flex-1 h-screen flex flex-col justify-end">
        <TimeDate />
        <div className="mt-auto mx-5">
          <div className='flex flex-row justify-end mb-10'>
          <h1 className="text-white text-8xl">Heavy Rain</h1>

          </div>
          <div className='border my-5 border-gray-400 '></div>
          <WeatherList/>
        </div>
      </div>

      <Rightbar />

    </div>

  )
}

export default App
