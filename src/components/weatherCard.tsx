import { listweatherperdays } from "../constants";

const WeatherCard = () => {
    return (<div className="flex flex-col py-3 overflow-y-auto">
        {
            listweatherperdays.map((w) => (
                <div className="flex flex-row my-1 py-1 hover:bg-slate-500 rounded-md px-1">
                    <div >{w.icon}</div>
                    <div className="flex flex-col justify-start items-start ml-2 flex-1">
                        <div className="text-sm lg:text-base">{w.day}</div>
                        <div className="text-xs lg:text-sm text-gray-400">{w.weather}</div>
                    </div>
                    <div className="mt-1 mb-0 border border-gray-400 h-10 mr-2 ml-8 lg:mr-3 lg:ml-16"></div>
                    <div className="ml-auto flex flex-col items-center">
                        <div className="text-sm lg:text-base">{w.morningDegree} </div>
                        <div  className="text-sm lg:text-base">{w.eveningDegree}</div>
                    </div>
                </div>
            ))
        }
    </div>);
}

export default WeatherCard;