<template>
    <div>
        <p v-if="filteredCoins" class="coin-list">
            <Coin 
                v-for="coin in filteredCoins" 
                :key="coin.id"
                :id="coin.id"
                :name="coin.name"
                :price="coin.current_price" 
                :symbol="coin.symbol"
                :marketCap="coin.market_cap"
                :volume="coin.total_volume"
                :image="coin.image"
                :priceChange="coin.price_change_percentage_24h"
            />
        </p>
        <p v-if="loading" class="loader">Loading....</p>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Coin from '@/components/Coin.vue';
export default {
    name: 'CoinList',
    components: {
        Coin
    },
    data(){
        return{
            filteredCoins: undefined
        }
    },
    props: {
        searchText: String
    },

    computed: {
        ...mapState('coins', {
            loading: 'loading', 
            coinList: 'coinList'
        }) 
    },

    watch: {
        searchText(newValue){
            this.filteredCoins = this.coinList.filter(coin => coin.name.toLowerCase().includes(newValue));
        },
        coinList(){
            this.filteredCoins = this.coinList;
        }
    }


}
</script>

<style lang="scss" scoped>
div{
    height: 100%;

    .coin-list{
        padding-bottom: 60px;
        min-height: 70vh;
    }

    .loader{
        position: relative;
        text-align: center;
        font-size: 40px;
        color: #ffffff;
        height: 450px;
        line-height: 320px;
    }
}
</style>

