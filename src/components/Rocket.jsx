import { useDispatch } from "react-redux";
import { reserveRocket } from "../redux/rockets/rockets-actions";
import "./Rocket.css"

const Rocket = ({ id, rocket_name, description, flickr_images, reserved }) => {
  const dispatch = useDispatch()

  return (
    <div className="flex-row align-center Rocket">
      <img src={flickr_images[0]} alt="Flickr" className="Rocket__image" />
      <div>
        <h2>{rocket_name}</h2>
        <p className="mb1"> {reserved && (<span className="badge badge--primary">Reserved</span>)} {description}</p>
        {reserved ? (<button onClick={() => dispatch(reserveRocket(id))} className="app-btn-ghost">Cancel Reservation</button>) : (<button onClick={() => dispatch(reserveRocket(id))} className="app-btn-primary">Reserve Rocket</button>)}
      </div>
    </div>
   );
}
 
export default Rocket;