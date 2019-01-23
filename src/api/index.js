import axios from 'axios'

export const codeTable = key => axios.post(`http://users.paat.net/users/common/getCode/${key}`);