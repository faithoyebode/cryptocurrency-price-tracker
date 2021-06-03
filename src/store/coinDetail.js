import axios from 'axios';
import { 
    COIN_24_HOURS_REQUEST,
    //COIN_SEVEN_DAYS_REQUEST,
    //COIN_ONE_YEAR_REQUEST, 
    COINS_LIST_SUCCESS,
    COINS_LIST_ERROR
} from './mutation-types';


export default {
    namespaced: true,

    state: () => ({
        loading: false,
        twentyFourHours: undefined,
        sevenDays: undefined,
        oneYear: undefined
    }),

    mutations: {
        [COIN_24_HOURS_REQUEST](state){
            return state.loading = true;
        },
        [COINS_LIST_SUCCESS](state, payload){
            state.loading = false;
            state.twentyFourHours = payload;
            return;
        },
        [COINS_LIST_ERROR](state){
            state.coinList = undefined,
            state.error = true;
            return;
        }
    },

    actions: {
        async getTwentyFourHours({commit}, coin){
            try{
                commit(COIN_24_HOURS_REQUEST);
                console.log(coin);
                const [ resultsDay, resultsWeek, resultsYear, detail ] = await Promise.all([
                    axios.get(`${process.env.VUE_APP_COINS_LIST_URL}/coins/${coin}/market_chart?vs_currency=usd&days=1`),
                    axios.get(`${process.env.VUE_APP_COINS_LIST_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7`),
                    axios.get(`${process.env.VUE_APP_COINS_LIST_URL}/coins/${coin}/market_chart?vs_currency=usd&days=365`),
                    axios.get(`${process.env.VUE_APP_COINS_LIST_URL}/coins/markets?vs_currency=usd&ids=${coin}`)
                ]);
                console.log(resultsDay, resultsWeek, resultsYear, detail);
                commit(COINS_LIST_SUCCESS, resultsDay.data);
            }catch(e){
                commit(COINS_LIST_ERROR);
                console.log(e);
            }
        },
        async getSevenDays(){}
    }
}