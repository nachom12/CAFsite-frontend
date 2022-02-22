import axios from 'axios';
import config from './config'

class ApiHandler {
  constructor() {

  };

  async getPlayers() {
    let res = await axios.get(`${config.api_url}/players`);
    return res.data;
  }

}

export default ApiHandler;
