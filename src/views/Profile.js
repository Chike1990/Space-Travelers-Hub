/* eslint-disable react/jsx-key */
import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions);

  return (
    <div className="flex-row justify-around Profile">
      <div style={{ width: '35%' }}>
        <h2>My Missions</h2>
        <div className="Profile__left">
          {
            missions.filter(({ reserved }) => reserved === true)
              .map(({ missionName }) => (<p>{missionName}</p>))
          }
        </div>
      </div>
      <div style={{ width: '35%' }}>
        <h2>My Rockets</h2>
        <div className="Profile__right">
          {
            rockets.filter(({ reserved }) => reserved === true)
              .map(({ rocketName }) => (<p>{rocketName}</p>))
          }
        </div>
      </div>
    </div>
  );
};

export default Profile;
