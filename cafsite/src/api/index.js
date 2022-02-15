// import axios from 'axios';
import config from './config'
import players from './mocks/playersMock';

class ApiHandler {
  constructor() { };

  async getPlayers () {

    console.log('gettin players')

    const res = players;

    return res;
    // console.log(`http://${config.api_url}`)
    // const res = await axios.get(`http://${config.api_url}`);
    // console.log(res)  
    // return res;
  }

}

export default ApiHandler;
