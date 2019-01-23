import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';
import map from './map.js'
export default {
    mockIng(){
        let mock = new MockAdapter(axios);
        mock.onPost('/bandexapi/apitest/doApiTest').reply(res => {
            let para = JSON.parse(res.data);
            return new Promise((resolve, reject) => { setTimeout(() => { resolve([200, map[para.functionCodeInput]]); }, 300); });
        })
    },
}