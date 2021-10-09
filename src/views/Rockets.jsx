import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRockets } from "../services/rocketsService"
import { setRockets } from "../redux/rockets/rockets-actions";
import Rocket from "../components/Rocket";

import "./Rockets.css"

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector(state => state.rockets);

  useEffect(() => {
    console.log(rockets)
    fetchRockets()
      .then(response => {
        const { data } = response;
        console.log(data)
        const rockets = data.map(rocket => ({ id: rocket.id, rocket_name: rocket.rocket_name, description: rocket.description, flickr_images: rocket.flickr_images }))
        dispatch(setRockets(rockets))
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="Rockets">
      {rockets.length > 0 ? rockets.map(rocket => (<Rocket key={rocket.id} {...rocket}/>)): "no"}
    </div>
  )
}

export default Rockets;