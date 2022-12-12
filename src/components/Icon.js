import {FaRegCircle, FaTimes, FaPen} from "react-icons/fa";

const Icon = ({name})=>{
    
    switch(name){
        case "Cross":
            return <FaRegCircle className="icons"/>
        case "Circle":
            return <FaTimes className="icons"/>
        default:
            return <FaPen className="icons"/>
    }
}
export default Icon