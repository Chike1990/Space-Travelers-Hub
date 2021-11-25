/* eslint-disable  react/jsx-props-no-spreading */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRockets from '../services/rocketsService';
import { setRockets } from '../redux/rockets/rockets-actions';
import Rocket from '../components/Rocket';

import './Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    fetchRockets()
      .then((response) => {
        const { data } = response;
        const rockets = data.map((rocket) => ({
          id: rocket.id,
          rocketName: rocket.rocket_name,
          description: rocket.description,
          flickrImages: rocket.flickr_images,
          reserved: false,
        }));
        dispatch(setRockets(rockets));
      });
  }, []);

  return (
    <div className="Rockets">
      {rockets.length > 0 ? rockets.map((rocket) => (<Rocket key={rocket.id} {...rocket} />)) : 'no'}
    </div>
  );
};

export default Rockets;
