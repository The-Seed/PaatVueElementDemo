import axios from 'axios';
import config from './apiConfig';
import { Notification } from 'element-ui';

axios.interceptors.response.use(
    response => {
        if(response.data.state != "0"){
            Notification.error({ message: response.data.msg });
        }
        // 1104
        return response.data
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 500 :
                    Notification.error({ message: '系统异常请稍后在试！' });
                    break;
            }
        }
        return Promise.reject(error.response)
    }
);
class baseApi1 {
    post (url, param, type){
        config.baseURL = process.env.BASE_URL;
        return axios.post(url, param, config);
    }
    get (url){ return axios.get(url, config); }
}
export default new baseApi1();
