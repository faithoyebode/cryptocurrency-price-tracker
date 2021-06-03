<template>
    <router-link :to="{name: 'Coin', params: { id: id }}">
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
            <p v-else class="coin_percent green">
                {{ transformedPriceChange }}
            </p>
            <p class="coin_marketcap">
                Mkt Cap: {{ transformedMktCap }}
            </p>
        </div>
    </div>
    </router-link>
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
        priceChange: Number,
        id : String
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
    
    color: #fff;

    .coin_row{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        height: 80px;
        border-bottom: 1px solid #2e2e2e;
        width: 1000px;
        padding: 0rem 2rem;

        &:hover{
            background-color: #3233338f;
        }

        .coin{
            display: flex;
            align-items: center;
            padding-right: 24px;

            .coin_img{
                height: 30px;
                width: 30px;
                margin-right: 10px;
            }

            .coin_h1{
                font-size: 16px;
                width: 150px;
            }

            .coin_symbol{
                text-transform: uppercase;
            }
        }

        .coin_data{
            display: flex;
            text-align: right;
            justify-content: space-between;
            flex-grow: 1;
            flex-shrink: 0;

            .coin_price{
                width: 110px;
            }

            .coin_volume{
               width: 155px; 
            }
        }

        .coin_marketcap{
            width: 230px; 
            text-align: end;
        }

        .coin_percent{
            width: 100px;
            text-align: center;
        }

        .red{
            color: #f00606;
        }

        .green{
            color: #13c783;
        }
    }  
}
</style>
