import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchMissions from '../services/missionsService';
import { setMissions, joinMission } from '../redux/missions/missions-actions';

import './Missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    fetchMissions()
      .then((response) => {
        const missions = response.data.map((mission) => ({
          missionName: mission.mission_name,
          missionId: mission.mission_id,
          description: mission.description,
          reserved: false,
        }));
        dispatch(setMissions(missions));
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="Missions">
      <table className="Missions__table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Join</th>
          </tr>
        </thead>
        {
          missions.map(({
            missionId, missionName, description, reserved,
          }) => (
            <tr key={missionId}>
              <td className="Missions__name">{ missionName }</td>
              <td className="Missions__description">{ description }</td>
              <td>{ reserved ? (<span className="badge badge--primary">ACTIVE MEMBER</span>) : (<span className="badge badge--secondary">NOT A MEMBER</span>) }</td>
              <td>{ reserved ? (<button type="button" onClick={() => dispatch(joinMission(missionId))} className="app-btn-danger">Leave Mission</button>) : (<button type="button" onClick={() => dispatch(joinMission(missionId))} className="app-btn-ghost">Join Mission</button>) }</td>
            </tr>
          ))
        }
      </table>
    </div>
  );
};

export default Missions;
