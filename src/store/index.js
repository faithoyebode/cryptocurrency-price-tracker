import { createStore } from 'vuex';
import coins from './coins';
import coinDetail from './coinDetail';


export default createStore({
  modules: {
    coins: coins,
    coinDetail: coinDetail 
  }
})
