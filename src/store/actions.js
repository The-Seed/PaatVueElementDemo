import { codeTable } from '../api/index'
import * as types from './mutations_types'
export default {
    [types.SET_CODE_TABLE] ({ commit, state }, payload) {
        let { key, that, target, select } = payload;
        if(typeof payload == 'string'){
            key = payload;
        }
        if(typeof payload == 'object'){
            if(!that || !target || !select){ console.error(`请设置 { key: 码表名称, that: 作用域, target: 对象, select: 对象名称}`); return false; }
        }
        if(!state[payload.key]){
            codeTable(key).then(res => {
                if(res.data.state == 0){
                    state[payload.key] = res.data.resultInfo;
                    if(typeof payload == 'object'){
                        that.$set(target, select, res.data.resultInfo);
                    }
                }
            });
        }else{
            if(typeof payload == 'object'){
                that.$set(target, select, state[payload.key]);
            }
        }
    }
};