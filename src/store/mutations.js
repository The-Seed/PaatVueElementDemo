import * as types from './mutations_types';
export default {
    [types.SET_CODE_TABLE] (state, payload) {
        state[payload.key] = payload.data;
    }
};