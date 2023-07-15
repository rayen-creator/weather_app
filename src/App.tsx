import { Suspense } from 'react'
import './App.css'
import Rightbar from './components/rightbar'
import TimeDate from './components/timeDate'
import WeatherList from './components/weatherList'

function App() {

  return (
    <Suspense  fallback={
      <div className="flex justify-center items-center h-screen">
        <div className="bg-slate-200 rounded-xl shadow-2xl p-2">
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      </div>
    }>
      <div className='block lg:flex  bg-hero-pattern h-screen w-screen bg-cover '>
        <div className="flex-1 h-screen flex flex-col justify-end">
          <TimeDate />
          <div className="mt-auto mx-5">
            <div className='flex flex-row justify-end mb-10'>
              <h1 className=" text-transparent bg-clip-text bg-gradient-to-t from-gray-500 to-white text-6xl lg:text-8xl">Heavy Rain</h1>
            </div>
            <div className='border my-5 border-gray-400 '></div>
            <WeatherList />
          </div>
        </div>
        <Rightbar />
      </div>
    </Suspense>


  )
}

export default App
