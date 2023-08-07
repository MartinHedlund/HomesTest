import axios from 'axios';
const BASE_URL = 'https://localhost:7053/'
export default class DataService {
    static async getAll() {
        const response = await axios.get(BASE_URL + 'api/Homes/get-all');
        return response.data;
    }

    static async insertHome(param){
        const response = await axios.post(BASE_URL + 'api/Homes', param)
        .then(function(response) {
            alert("OK");
          })
          .catch(function(error) {
            console.log("error");
          });
        return response;
    }
}