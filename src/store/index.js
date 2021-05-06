import { createStore } from 'vuex';
import coins from './coins';

export default createStore({
  modules: {
    coins: coins
  }
})
