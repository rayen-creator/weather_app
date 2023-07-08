import { days, } from "../constants";
import Sidebar_header from "./sidebar_header";
import WeatherCard from "./weatherCard";
const Rightbar = () => {
    return (<>
        <div className="flex flex-col items-center bg-opacity-10 bg-white backdrop-blur-sm h-screen text-white  w-1/4 ">
            <Sidebar_header />
            <h3 className="text-white text-xl font-sans font-semibold pt-5">The Next Days Forecast</h3>
            <div className="flex flex-row  text-sm mt-5">
                {
                    days.map((d) => (
                        <span key={d.key} className="mx-3 p-1  hover:bg-black  rounded-md">{d.text}</span>

                    ))
                }
            </div>
            <WeatherCard />
        </div>
    </>);
}

export default Rightbar;