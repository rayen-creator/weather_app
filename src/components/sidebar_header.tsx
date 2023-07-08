import { FiWind } from "react-icons/fi";

const Sidebar_header = () => {
    return ( 
        <div className="flex flex-col justify-center border-b pt-10 px-10 pb-8  border-gray-600  ">
        <div className="text-8xl font-semibold  mb-5 font-sans">
            11°C
        </div>
        <div className="flex items-center">
        <FiWind className="text-lg"/>
        <div className="text-base px-1 font-medium text-gray-400">
            Northwest , 38.9 km/h
        </div>
        </div>
      
    </div>
     );
}
 
export default Sidebar_header;