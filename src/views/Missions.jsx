import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchMissions from "../services/missionsService";
import { setMissions } from "../redux/missions/missions-actions";
import { joinMission } from "../redux/missions/missions-actions";

import "./Missions.css"

const Missions = () => {
  const dispatch = useDispatch()
  const missions = useSelector((state) => state.missions)

  useEffect(() => {
    fetchMissions()
      .then((response) => {
        const missions = response.data.map(({ mission_id, mission_name, description }) => ({ mission_name, mission_id, description, reserved: false }))
        dispatch(setMissions(missions));
      })
      .catch((error) => console.log(error))
  }, [])
  return (
    <div className="Missions">
      <table className="Missions__table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        {
          missions.map(({ mission_id, mission_name, description, reserved }) => (
            <tr key={mission_id}>
              <td className="Missions__name">{ mission_name }</td>
              <td className="Missions__description">{ description }</td>
              <td>{ reserved ? (<span className="badge badge--primary">ACTIVE MEMBER</span>): (<span className="badge badge--secondary">NOT A MEMBER</span>) }</td>
              <td>{ reserved ? (<button onClick={() => dispatch(joinMission(mission_id))} className="app-btn-danger">Leave Mission</button>): (<button onClick={() => dispatch(joinMission(mission_id))} className="app-btn-ghost">Join Mission</button>) }</td>
            </tr>
          ))
        }
      </table>
    </div>
  )
}

export default Missions;