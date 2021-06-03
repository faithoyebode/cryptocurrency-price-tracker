<template>
    <div>
        single coin {{ $route.params.id }}
        <HistoryChart />
        <CoinData />
    </div>
</template>

<script>
// @ is an alias to /src
import HistoryChart from '@/components/HistoryChart.vue';
import CoinData from '@/components/CoinData.vue';
import { mapActions } from 'vuex';

export default {
    name: 'SingleCoin',
    components: {
        HistoryChart,
        CoinData
    },
    methods: {
        ...mapActions({
            getTwentyFourHours: "coinDetail/getTwentyFourHours"
        })
    },
    mounted(){
        this.getTwentyFourHours(this.$route.params.id);
    }
}
</script>

<style lang="scss" scoped>
div{
    color: #ffffff;
}
</style>
