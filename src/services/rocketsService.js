/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { rocketsUrl } from './urls';

export const fetchRockets = () => axios({
  method: 'get',
  url: rocketsUrl,
});
