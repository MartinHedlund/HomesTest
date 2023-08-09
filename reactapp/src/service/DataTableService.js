import axios from 'axios';
const BASE_URL = 'https://localhost:5108/'
export default class DataService {
    static async getAll() {
        const response = await axios.get(BASE_URL + 'api/Homes/get-all');
        return response.data;
    }

    static async insertHome(param){
      console.log(param);
        // const response = await axios.post(BASE_URL + 'api/Homes', param)
        // .then(function(response) {
        //     console.log(response);
        //   })
        //   .catch(function(error) {
        //     console.log("error" + response);
        //   });
        // return response;
    }
}