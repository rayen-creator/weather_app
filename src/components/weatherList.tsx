import { listweatherperhours } from "../constants";

const WeatherList = () => {
    return (
      <div className="overflow-x-auto">
      <div className="flex flex-row justify-evenly mb-5 text-gray-300 space-x-2 lg:space-x-4">
        {listweatherperhours.map((w) => (
          <div
            key={w.hour}
            className="flex flex-col items-center rounded-md p-1 mx-1 lg:p-2 bg-opacity-10 bg-white backdrop-blur-sm"
          >
            <div className="text-xs lg:text-sm">{w.hour}</div>
            <div className="border border-gray-400 w-8 my-0 lg:w-10 lg:my-1"></div>
            <div className="text-sm">{w.icon}</div>
            <div className="font-bold text-sm lg:text-lg">{w.Degree}</div>
          </div>
        ))}
      </div>
    </div>
    
    );
  };
  
  export default WeatherList;
  

