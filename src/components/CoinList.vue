<template>
    <div>
        <p v-if="coinList">
            <Coin 
                v-for="coin in coinList" 
                :key="coin.id"
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

    computed: {
        ...mapState('coins', {
            loading: 'loading', 
            coinList: 'coinList'
        }) 
    },

    watch: {

    }


}
</script>

<style lang="scss" scoped>
div{
    height: 100%;
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

