<template>
    <div  class="coin_container">
        <div class="coin_row">
            <div class="coin">
                <img :src="image" :alt="name" srcset="" class="coin_img">
                <h1 class="coin_h1">{{ name }}</h1>
                <p class="coin_symbol">{{ symbol }}</p>
            </div>
            <div class="coin_data">
                <p class="coin_price">{{ transformedPrice }}</p>
                <p class="coin_volume">{{ transformedVolume }} </p>
            </div>
            <p v-if="priceChange < 0" class="coin_percent red">
                {{ transformedPriceChange }}
            </p>
            <p v-if="priceChange < 0" class="coin_percent green">
                {{ transformedPriceChange }}
            </p>
            <p v-else class="coin_marketcap">
                Mkt Cap: {{ transformedMktCap }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Coin',
    props: {
        name: String,
        price: Number,
        symbol: String,
        marketCap: Number,
        volume: Number,
        image: String,
        priceChange: Number
    },
    computed: {
        transformedPrice(){
            return '$' + this.price.toLocaleString();
        },
        transformedVolume(){
            return '$' + this.volume.toLocaleString();
        },
        transformedPriceChange(){
            return this.priceChange.toFixed(2) + '%';
        },
        transformedMktCap(){
            return '$' + this.marketCap.toLocaleString();
        }
    }
}
</script>


<style lang="scss" scoped>
.coin_container{
    display: flex;
    justify-content: center;  
}


</style>
