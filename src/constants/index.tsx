import {
    TiWeatherShower,
    TiWeatherPartlySunny,
    TiWeatherDownpour,
    TiWeatherCloudy
} from "react-icons/ti";

export const days = [
    { key: 1, text: "5 days" },
    { key: 2, text: "15 days" },
    { key: 3, text: "30 days" }
]

export const listweatherperhours = [
    {
        icon: <div className="bg-gray-600/60 rounded-md p-2  ">
            <TiWeatherDownpour className="text-2xl text-white" />
        </div>, hour: "09:00",Degree: "9°"
    },
    {
        icon: <div className="bg-gray-600/60 rounded-md p-2  ">
            <TiWeatherCloudy className="text-2xl text-white" />
        </div>, hour: "10:00",Degree: "10°"
    },
    {
        icon: <div className="bg-gray-600/60 rounded-md p-2  ">
            <TiWeatherPartlySunny className="text-2xl text-white" />
        </div>, hour: "11:00",Degree: "10°"
    },
    {
        icon: <div className="bg-gray-600/60 rounded-md p-2  ">
            <TiWeatherCloudy className="text-2xl text-white" />
        </div>, hour: "12:00",Degree: "11°"
    },
    {
        icon: <div className="bg-gray-600/60 rounded-md p-2  ">
            <TiWeatherShower className="text-2xl text-white" />
        </div>, hour: "13:00",Degree: "12°"
    },
    {
        icon: <div className="bg-gray-600/60 rounded-md p-2  ">
            <TiWeatherShower className="text-2xl text-white" />
        </div>, hour: "14:00",Degree: "14"
    }, {
        icon: <div className="bg-gray-600/60 rounded-md p-2  ">
            <TiWeatherShower className="text-2xl text-white" />
        </div>, hour: "15:00",Degree: "15°"
    },
    {
        icon: <div className="bg-gray-600/60 rounded-md p-2  ">
            <TiWeatherShower className="text-2xl text-white" />
        </div>, hour: "16:00",Degree: "15°"
    },
    {
        icon: <div className="bg-gray-600/60 rounded-md p-2  ">
            <TiWeatherShower className="text-2xl text-white" />
        </div>, hour: "17:00",Degree: "15°"
    }, {
        icon: <div className="bg-gray-600/60 rounded-md p-2  ">
            <TiWeatherShower className="text-2xl text-white" />
        </div>, hour: "18:00",Degree: "15°"
    },
    {
        icon: <div className="bg-gray-600/60 rounded-md p-2  ">
            <TiWeatherShower className="text-2xl text-white" />
        </div>, hour: "19:00",Degree: "15°"
    }, {
        icon: <div className="bg-gray-600/60 rounded-md p-2  ">
            <TiWeatherShower className="text-2xl text-white" />
        </div>, hour: "20:00",Degree: "15°"
    },
]

export const listweatherperdays = [
    {
        icon: <div className="bg-gray-600/60 rounded-md p-2  ">
            <TiWeatherDownpour className="text-2xl text-white" />
        </div>, day: "Friday , April 21", weather: "Heavy Rain", morningDegree: "9°", eveningDegree: "16°"
    },
    {
        icon: <div className="bg-gray-600/60 rounded-md p-2  ">
            <TiWeatherCloudy className="text-2xl text-white" />
        </div>, day: "Saturday , April 22", weather: "Partly Cloudy", morningDegree: "9°", eveningDegree: "16°"
    },
    {
        icon: <div className="bg-gray-600/60 rounded-md p-2  ">
            <TiWeatherPartlySunny className="text-2xl text-white" />
        </div>, day: "Sunday , April 23", weather: "Partly Sunny", morningDegree: "9°", eveningDegree: "16°"
    },
    {
        icon: <div className="bg-gray-600/60 rounded-md p-2  ">
            <TiWeatherCloudy className="text-2xl text-white" />
        </div>, day: "Monday , April 24", weather: "Partly Cloudy", morningDegree: "9°", eveningDegree: "16°"
    },
    {
        icon: <div className="bg-gray-600/60 rounded-md p-2  ">
            <TiWeatherShower className="text-2xl text-white" />
        </div>, day: "Tuesday , April 25", weather: "Rain", morningDegree: "9°", eveningDegree: "16°"
    },

]