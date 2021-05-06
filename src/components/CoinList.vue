<template>
    <div>
        <p v-if="coinList">
            <Coin 
                v-for="coin in coinList" 
                :key="coin.id"
                :name="coin.name"
                :price="coin.current_price" 
                :symbol="coin.symbol"
                :marketCap="coin.total_volume"
                :volume="coin.market_cap"
                :image="coin.image"
                :priceChange="coin.price_change_percentage_24h"
            />
        </p>
        <p v-if="loading === false">{{ loading }}</p>
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

</style>

