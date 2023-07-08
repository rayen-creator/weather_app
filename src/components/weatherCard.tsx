import { listweatherperdays } from "../constants";

const WeatherCard = () => {
    return (<div className="flex flex-col py-3">
        {
            listweatherperdays.map((w) => (
                <div className="flex flex-row py-2">
                    <div >{w.icon}</div>
                    <div className="flex flex-col justify-start items-start ml-2 flex-1">
                        <div className="text-base">{w.day}</div>
                        <div className="text-sm text-gray-400">{w.weather}</div>
                    </div>
                    <div className="mt-1 mb-1 border border-gray-400 h-10 mr-3 ml-16"></div>
                    <div className="ml-auto">
                        <div>{w.morningDegree}</div>
                        <div>{w.eveningDegree}</div>
                    </div>
                </div>
            ))
        }
    </div>);
}

export default WeatherCard;