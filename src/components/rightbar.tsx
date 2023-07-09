import { days, } from "../constants";
import Sidebar_header from "./sidebar_header";
import WeatherCard from "./weatherCard";
const Rightbar = () => {
    return (<>
        <div className="flex-col items-center bg-opacity-10 bg-white backdrop-blur-sm h-screen text-white  w-1/4 overflow-y-auto  hidden lg:flex ">
            <Sidebar_header />
            <h3 className="text-white text-sm font-sans font-semibold pt-5 lg:text-xl">The Next Days Forecast</h3>
            <div className="flex flex-row text-xs lg:text-sm mt-5">
                {
                    days.map((d) => (
                        <span key={d.key} className="mx-3 p-1 text-xs lg:text-base hover:bg-black  rounded-md">{d.text}</span>

                    ))
                }
            </div>
            <WeatherCard />
        </div>
    </>);
}

export default Rightbar;