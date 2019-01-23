import * as types from './mutations_types';
export default {
    [types.GET_CODE_TABLE]: (state, getters) => key => {
        return state[key] || [];
    }
};