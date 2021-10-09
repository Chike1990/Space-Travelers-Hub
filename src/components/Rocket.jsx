import "./Rocket.css"

const Rocket = ({ id, rocket_name, description, flickr_images }) => {
  return (
    <div className="flex-row align-center Rocket">
      <img src={flickr_images[0]} alt="Flickr" className="Rocket__image" />
      <div>
        <h2>{rocket_name}</h2>
        <p className="mb1">{description}</p>
        <button className="app-btn-primary">Reserve Rocket</button>
        {/* <button className="app-btn-ghost">Cancel Reservation</button> */}
      </div>
    </div>
   );
}
 
export default Rocket;