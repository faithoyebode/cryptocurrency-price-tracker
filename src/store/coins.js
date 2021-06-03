import axios from 'axios';
import { 
    COINS_LIST_REQUEST, 
    COINS_LIST_SUCCESS,
    COINS_LIST_ERROR
} from './mutation-types';


export default {
    namespaced: true,

    state: () => ({
        loading: false,
        coinList: undefined
    }),

    mutations: {
        [COINS_LIST_REQUEST](state){
            return state.loading = true;
        },
        [COINS_LIST_SUCCESS](state, payload){
            state.loading = false;
            state.coinList = payload;
            state.error = false;
            return;
        },
        [COINS_LIST_ERROR](state){
            state.coinList = undefined,
            state.error = true;
            return;
        }
    },

    actions: {
        async getCoins({ commit }){
            try{
                commit(COINS_LIST_REQUEST);
                const data = await axios.get(`${process.env.VUE_APP_COINS_LIST_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`);
                commit(COINS_LIST_SUCCESS, data.data);
            }catch(e){
                commit(COINS_LIST_ERROR);
                console.log(e);
            }
        },
        receivedCoins(){}
    }
}