import axios from 'axios';
import { rocketsUrl } from './urls';

const fetchRockets = () => axios({
  method: 'get',
  url: rocketsUrl,
});

export default fetchRockets;
