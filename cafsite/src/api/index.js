import axios from 'axios';
import config from './config'

class ApiHandler {
  constructor() {

  };

  async getPlayers() {
    let { data } = await axios.get(`${config.api_url}/players`);
    return data;
  }

  async getStore() {
    let { data } = await axios.get(`${config.api_url}/store`);
    return data;
  }

}

export default ApiHandler;
