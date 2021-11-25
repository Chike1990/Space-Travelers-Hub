import axios from 'axios';
import { missionsUrl } from './urls';

const fetchMissions = () => axios({
  method: 'get',
  url: missionsUrl,
});

export default fetchMissions;
