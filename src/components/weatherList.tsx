import { listweatherperhours } from "../constants";

const WeatherList = () => {
    return (<>
        <div className="flex flex-row justify-evenly mb-5 text-gray-300">
            {listweatherperhours.map((w) => (
                <div className="flex flex-col items-center rounded-md p-2 bg-opacity-10 bg-white backdrop-blur-sm">
                    <div className="text-sm ">{w.hour}</div>
                    <div className="border border-gray-400 w-10 my-1"></div>
                    <div>{w.icon}</div>
                    <div className="font-bold text-lg">{w.Degree}</div>
                </div>

            ))

            }


        </div>

    </>);
}

export default WeatherList;