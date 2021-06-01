<template>
  <div class="home">
    <SearchBar type="text" name="search" placeholder="Search" />
    <CoinList />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/SearchBar.vue';
import CoinList from '@/components/CoinList.vue';
import { mapActions } from 'vuex';


export default {
  name: 'Home',
  components: {
    SearchBar,
    CoinList
  },


  methods: {
    ...mapActions({
      getCoins: "coins/getCoins"
    })  
  },

  mounted(){
    this.getCoins();
  }
}
</script>
