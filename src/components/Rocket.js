/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rockets-actions';
import './Rocket.css';

const Rocket = ({
  id, rocketName, description, flickrImages, reserved,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="flex-row align-center Rocket">
      <img src={flickrImages[0]} alt="Flickr" className="Rocket__image" />
      <div>
        <h2>{rocketName}</h2>
        <p className="mb1">
          {' '}
          {reserved && (<span className="badge badge--primary">Reserved</span>)}
          {' '}
          {description}
        </p>
        {reserved ? (<button type="button" onClick={() => dispatch(reserveRocket(id))} className="app-btn-ghost">Cancel Reservation</button>) : (<button type="button" onClick={() => dispatch(reserveRocket(id))} className="app-btn-primary">Reserve Rocket</button>)}
      </div>
    </div>
  );
};

export default Rocket;
